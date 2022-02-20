import Vue from "vue";
import TablePlus from "./TablePlus";
import FormPlus from "./FormPlus";

const components = [TablePlus, FormPlus];

components.map((c) => {
  Vue.use(c);
});
