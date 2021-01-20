<template>
  <AppHeader />
  <div class="app-content">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: { AppHeader: Header }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #11151a;
  color: #eee;
  fill: #eee;
  font-family: "Open Sans";
  font-size: 18px;
}
* {
  box-sizing: border-box;
}
a, .alink {
  color: #eee;
  text-decoration: none;
  outline: 0;
  &:hover {
    opacity: 0.7;
  }
}
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .app-content {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
