<template>
  <div id="status-menu" class="status-menu-container">
    <div class="status-menu">
      <a class="status-button all_anime on">All Anime</a
      ><a class="status-button watching">Currently Watching</a
      ><a class="status-button completed">Completed</a
      ><a class="status-button onhold">On Hold</a
      ><a class="status-button dropped">Dropped</a
      ><a class="status-button plantowatch">Plan to Watch</a>
      <div class="search-container">
        <div id="search-box"><input type="text" value="" /></div>
        <a id="search-button" href="javascript: void(0);">
          <i class="fa fa-search"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MALStatusMenu",
};
</script>
