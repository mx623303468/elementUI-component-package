import DialogForm from "./src/index.vue";

DialogForm.install = (Vue) => {
  Vue.component(DialogForm.name, DialogForm);
};

export default DialogForm;
