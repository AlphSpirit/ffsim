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
.input-group {
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  label {
    opacity: 0.8;
    font-size: 16px;
    margin-bottom: 4px;
  }
  input {
    background-color: #28303e;
    border: 1px solid #3c485d;
    font-size: 18px;
    color: #eee;
    padding: 4px 8px;
    outline: none !important;
    transition: border-color 0.1s ease;
    &:active, &:focus {
      border-color: #63789c;
    }
  }
}
.btn {
  background-color: #28303e;
  border: 1px solid #3c485d;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.1s ease;
  &:hover {
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
    border-color: #63789c;
  }
}
</style>
