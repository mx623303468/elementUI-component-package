<template>
  <el-form :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options">
      <!-- 没有子节点 -->
      <el-form-item
        v-if="!item.children || !item.children.length"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :is="item.component"
          v-model="item.value"
          v-bind="item.attrs"
        ></component>
      </el-form-item>

      <!-- 有子节点 -->
      <el-form-item
        v-if="item.children && item.children.length"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :is="item.component"
          v-model="item.value"
          v-bind="item.attrs"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="child.component"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    model() {
      return this.options.reduce((previous, current) => {
        previous[current.prop] = current.value;
        return previous;
      }, {});
    },
    rules() {
      return this.options.reduce((previous, current) => {
        previous[current.prop] = current.rules;
        return previous;
      }, {});
    },
  },
};
</script>

<style></style>
