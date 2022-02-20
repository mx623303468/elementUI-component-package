<template>
  <table-plus :tableData="tableData" :tableOption="tableOption" stripe border>
    <template #date="scope">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>

    <template #name="scope">
      <el-popover effect="light" trigger="hover" placement="top">
        <p>姓名: {{ scope.row.name }}</p>
        <p>住址: {{ scope.row.address }}</p>
        <span slot="reference">
          {{ scope.row.name }}
        </span>
      </el-popover>
    </template>

    <template #tag="scope">
      <el-tag
        :type="scope.row.tag === '家' ? 'primary' : 'success'"
        disable-transitions
        >{{ scope.row.tag }}</el-tag
      >
    </template>

    <template #action="scope">
      <el-button @click="handleClick(scope)">操作</el-button>
    </template>
  </table-plus>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
      tableOption: [
        {
          prop: "date",
          label: "日期",
          custom: "date",
          sortable: true,
        },
        {
          prop: "name",
          label: "姓名",
          custom: "name",
        },
        {
          prop: "address",
          label: "地址",
          sortable: true,
        },
        {
          prop: "tag",
          label: "标签",
          custom: "tag",
          filters: [
            { text: "家", value: "家" },
            { text: "公司", value: "公司" },
          ],
          filterMethod: this.filterTag,
          filterPlacement: "bottom-end",
        },
        {
          action: true,
          label: "操作",
          headerAlign: "center",
          width: 100,
        },
      ],
    };
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
  },
};
</script>

<style></style>
