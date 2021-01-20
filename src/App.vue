<template>
  <AppHeader />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
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
    opacity: 0.6;
  }
}
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
