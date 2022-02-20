import FormPlus from "./src/index.vue";

FormPlus.install = (Vue) => {
  Vue.component(FormPlus.name, FormPlus);
};

export default FormPlus;
