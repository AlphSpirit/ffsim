<template>
  <div id="home">
    <div class="banner">
      <div class="overlay"></div>
      <div class="container">
        A FINAL FANTASY® XIV Rotation Simulation Engine
      </div>
    </div>
    <div class="container">
      <div class="news">
        <div class="subtitle">News</div>
        <div class="post">
          <div class="title">Bard added! - January 20th, 2021</div>
          <div class="content">Bard has been added to the simulation!</div>
        </div>
        <div class="post">
          <div class="title">Samurai added! - January 20th, 2021</div>
          <div class="content">Samurai has been added to the simulation!</div>
        </div>
      </div>
      <div class="disclaimer">
        <div class="subtitle">Dislaimer</div>
        <p>FINAL FANTASY® is a registered trademark of Square Enix Holdings Co., Ltd.</p>
        <p>The FFSIM team has no affiliation whatsoever with Square Enix or FINAL FANTASY®.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.banner {
  height: 200px;
  background-color: #28303e;
  display: flex;
  align-items: center;
  font-size: 24px;
  background-image: url(https://thumbs.gfycat.com/AbandonedMajesticHornet-size_restricted.gif);
  background-position: center;
  background-size: cover;
  position: relative;
  .overlay {
    background-color: #28303e;
    opacity: 0.85;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .container {
    z-index: 1;
  }
}
.subtitle {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.post {
  background-color: #1e242f;
  padding: 20px;
  margin-bottom: 10px;
  .title {
    font-style: italic;
    opacity: 0.7;
    margin-bottom: 4px;
  }
}
</style>