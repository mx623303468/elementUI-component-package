<template>
  <div class="form-plus">
    <form-plus :options="formOptions" label-width="100px">
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm(scope)">重置</el-button>
      </template>
    </form-plus>
  </div>
</template>

<script>
import FormPlus from "@/components/FormPlus.vue";

export default {
  components: {
    FormPlus,
  },
  data() {
    return {
      formOptions: [
        {
          component: "el-input",
          value: "",
          label: "用户名",
          prop: "name",
          attrs: {
            minlength: 3,
            maxlength: 5,
            placeholder: "请输入用户名",
            clearable: true,
          },
          rules: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
        {
          component: "el-input",
          value: "",
          label: "密码",
          prop: "password",
          attrs: {
            type: "password",
            placeholder: "请输入密码",
          },
          rules: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
        {
          component: "el-input",
          value: "",
          label: "备注",
          prop: "remark",
          attrs: {
            type: "textarea",
            placeholder: "请输入备注",
          },
          rules: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
        {
          component: "el-select",
          value: "",
          prop: "role",
          label: "职位",
          attrs: {
            placeholder: "请选择职位",
            style: {
              width: "100%",
            },
          },
          rules: [
            {
              required: true,
              message: "职位不能为空",
              trigger: "change",
            },
          ],
          children: [
            {
              component: "el-option",
              label: "经理",
              value: "1",
            },
            {
              component: "el-option",
              label: "主管",
              value: "2",
            },
            {
              component: "el-option",
              label: "员工",
              value: "3",
            },
          ],
        },
        {
          component: "el-radio-group",
          value: "",
          prop: "gender",
          label: "性别",
          rules: [
            {
              required: true,
              message: "性别不能为空",
              trigger: "change",
            },
          ],
          children: [
            {
              component: "el-radio",
              label: "男",
              value: "male",
            },
            {
              component: "el-radio",
              label: "女",
              value: "female",
            },
            {
              component: "el-radio",
              label: "保密",
              value: "not",
            },
          ],
        },
        {
          component: "el-checkbox-group",
          value: ["A"],
          label: "checkbox",
          prop: "checkbox",
          children: [
            {
              label: "A",
              // value: "A",
              component: "el-checkbox",
            },
            {
              label: "B",
              // value: "B",
              component: "el-checkbox",
            },
            {
              label: "C",
              // value: "C",
              component: "el-checkbox",
            },
          ],
        },
        {
          component: "el-switch",
          value: "",
          label: "switch",
          prop: "switch",
          attrs: {
            activeText: "打开",
            inactiveText: "关闭",
            disabled: false,
          },
        },
      ],
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.formOptions[6].attrs.disabled = true
    // }, 3000);
  },
  methods: {
    submitForm({ form, model }) {
      form.validate((valid) => {
        if (!valid) return false;
        console.log(model);
        this.$message.success('校验通过')
      });
    },
    resetForm({ form }) {
      form.resetFields();
      this.$message.success('重置成功')
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
