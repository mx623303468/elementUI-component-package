import TablePlus from "./src/index.vue";

TablePlus.install = (Vue) => {
  Vue.component(TablePlus.name, TablePlus);
};

export default TablePlus;
