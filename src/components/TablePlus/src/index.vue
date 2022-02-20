<template>
  <el-table :data="tableData" v-bind="$attrs">
    <template v-for="item in option">
      <el-table-column v-if="item.custom" :key="item.prop" v-bind="item">
        <template #default="scope">
          <slot :name="item.custom" v-bind="scope" />
        </template>
      </el-table-column>

      <el-table-column v-else :key="item.prop" v-bind="item"></el-table-column>
    </template>

    <el-table-column v-bind="action">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TablePlus",
  props: {
    tableData: {
      type: Array,
      default: () => [],
      required: true,
    },
    tableOption: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    option() {
      return this.tableOption.filter((item) => !item.action);
    },
    action() {
      return this.tableOption.find((item) => item.action);
    },
  },
};
</script>

<style></style>
