<template>
  <div class="dialog">
    <el-button type="primary" @click="handleClickOpen">Open</el-button>

    <el-dialog :visible.sync="visible" title="Dialog Form" @closed="cancel">
      <form-plus :options="options" ref="formPlus"></form-plus>

      <template #footer>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      options: [
        {
          component: "el-input",
          label: "用户名",
          prop: "name",
          value: "",
          attrs: {
            placeholder: "请输入用户名",
          },
          rules: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
        {
          component: "el-input",
          label: "密码",
          prop: "password",
          value: "",
          attrs: {
            placeholder: "请输入用户名",
            type: "password",
          },
          rules: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
      ],
    };
  },
  methods: {
    handleClickOpen() {
      this.visible = true;
    },
    cancel() {
      this.visible = false;
      this.$refs.formPlus.form.resetFields();
    },
    confirm() {
      this.$refs.formPlus.form.validate((valid) => {
        if (valid) {
          this.visible = false;
          this.$message.success(
            `校验通过: ${JSON.stringify(this.$refs.formPlus.model)}`
          );
        } else {
          this.$message.error("校验失败");
        }
      });
    },
  },
};
</script>

<style></style>
