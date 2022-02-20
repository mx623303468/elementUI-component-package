<template>
  <div id="app">
    <div class="nav">
      <el-button-group>
        <el-button
          type="primary"
          v-for="button in buttons"
          :key="button.text"
          @click="$router.push({ name: button.text })"
          >{{ button.text }}</el-button
        >
      </el-button-group>
      <h2>{{ $route.name }}</h2>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from "./router";
export default {
  name: "app",
  data() {
    return {
      buttons: [],
    };
  },
  mounted() {
    this.generateButtons(router.options.routes);
  },
  methods: {
    generateButtons(data) {
      data.map((item) => {
        this.buttons.push({ text: item.name });
        if (item.children) {
          this.generateButtons(item.children);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  text-align: center;
}
</style>
