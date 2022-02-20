import Vue from "vue";
import TablePlus from "./TablePlus";
import FormPlus from "./FormPlus";
import DialogForm from "./DialogFrom";


const components = [TablePlus, FormPlus, DialogForm];

components.map((c) => {
  Vue.use(c);
});
