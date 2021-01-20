<template>
  <div class="svgicon" v-html="inner" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<script>
import Axios from "axios";

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
      let response = await Axios.get(this.src);
      console.log(response.data);
      this.inner = response.data;
      console.log(this.inner);
    }
  }
}
</script>

<style>

</style>