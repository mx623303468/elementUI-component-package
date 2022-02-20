<template>
  <!-- model 有值时才显示 -->
  <el-form
    v-if="model"
    ref="form"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
    :validate-on-rule-change="false"
  >
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
          v-model="model[item.prop]"
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
          v-model="model[item.prop]"
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

    <!-- 操作项 -->
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "FormPlus",
  props: {
    options: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: null,
      model: null, // 初始值一定要为 null 防止无法访问属性值
      rules: null,
    };
  },
  watch: {
    // 父组件动态改变表单配置时，重新渲染
    options: {
      deep: true,
      handler() {
        this.initForm();
      },
    },
  },
  mounted() {
    this.initForm();
  },
  methods: {
    initForm() {
      if (this.options && this.options.length) {
        let m = {},
          r = {};
        this.options.map((item) => {
          m[item.prop] = item.value;
          r[item.prop] = item.rules;
        });

        // 深拷贝 解决重置表单
        this.model = cloneDeep(m);
        this.rules = cloneDeep(r);

        // 防止获取不到 form
        this.$nextTick(() => {
          this.form = this.$refs.form;
        });
      }
    },
  },
};
</script>

<style></style>
