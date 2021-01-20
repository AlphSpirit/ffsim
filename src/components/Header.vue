<template>
  <div id="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">FFSIM</router-link>
      </div>
      <div class="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/simulate">Simulate</router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
      <div class="grow"></div>
      <router-link class="user" to="/profile">
        <SvgIcon src="ionicons/person-outline.svg" :width="24" :height="24" />
        AlphSpirit
      </router-link>
      <div class="logout alink">
        <SvgIcon src="ionicons/log-out-outline.svg" :width="24" :height="24" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
#header {
  background-color: #28303e;
  height: 52px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}
.container {
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  margin-right: 14px;
}
.grow {
  flex-grow: 1;
}
.user {
  display: flex;
  align-items: center;
  padding: 14px;
  .svgicon {
    margin-right: 6px;
  }
  &.router-link-active {
    color: #00aaff;
  }
}
.links {
  .link {
    padding: 14px;
    &.router-link-active {
      color: #00aaff;
    }
  }
}
.logout {
  padding: 14px 14px;
  margin-right: -14px;
  cursor: pointer;
}
</style>