<template>
  <div class="svgicon" v-html="inner" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<script>
import Axios from "axios";

let cache = new Map();

export default {
  name: "SvgIcon",
  data() {
    return {
      inner: ""
    };
  },
  props: {
    src: String,
    width: Number,
    height: Number
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      if (cache.has(this.src)) {
        this.inner = cache.get(this.src);
        return;
      }
      let response = await Axios.get(this.src);
      this.inner = response.data;
      cache.set(this.src, response.data);
    }
  }
}
</script>

<style>

</style>