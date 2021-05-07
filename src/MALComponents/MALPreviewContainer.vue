<template>
  <div class="mal-preview-container">
    <div class="ownlist anime">
      <stylee element-name="header" class-name="header">
        <mal-header />
      </stylee>
      <selectable element-name="container">
        <mal-container />
      </selectable>
      <selectable element-name="footer">
        <mal-footer />
      </selectable>
    </div>
  </div>
</template>

<script>
export default {
  name: "MALPreviewContainer",
  components: {
    "mal-header": () => import("./MALHeader"),
    "mal-container": () => import("./MALContainer"),
    "mal-footer": () => import("./MALFooter"),
  },
};
</script>

<style scoped>
.mal-preview-container {
  background-color: #222222 !important;
  margin: 0 0 0 0;
  color: #cccccc !important;
  text-align: center;
  font-family: Verdana, Arial;
  font-size: 11px;
}

.ownlist {
  background-attachment: fixed;
  background-position: center top;
  background-repeat: repeat\2d x;
}
</style>
