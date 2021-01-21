<template>
  <div class="panel">
    <div class="title" :class="{opened}" @click="opened = !opened">
      {{ title }}
      <div class="grow"></div>
      <div class="toggle">
        <SvgIcon v-if="opened" src="ionicons/chevron-up.svg" :width="24" :height="24" />
        <SvgIcon v-if="!opened" src="ionicons/chevron-down.svg" :width="24" :height="24" />
      </div>
    </div>
    <div class="content" v-if="opened">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    title: String
  },
  data() {
    return {
      opened: true
    };
  }
}
</script>

<style lang="scss" scoped>
.panel {
  background-color: #1e242f;
}
.title {
  padding: 10px 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.opened {
    border-bottom: 1px solid #28303e;
  }
}
.content {
  padding: 20px;
}
.grow {
  flex-grow: 1;
}
</style>