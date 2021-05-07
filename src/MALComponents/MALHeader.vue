<template>
  <div class="header">
    <div class="header-menu">
      <div class="btn-menu">
        Viewing <span class="username">Your</span> Anime List
      </div>
    </div>
    <a href="/" class="header-title">MyAnimeList.net</a>
  </div>
</template>

<script>
export default {
  name: "MALHeader",
};
</script>

<style scoped>
.header .header-title {
  background-image: url("https://myanimelist.net/img/pc/ownlist/logo_mal.png");
}
</style>
