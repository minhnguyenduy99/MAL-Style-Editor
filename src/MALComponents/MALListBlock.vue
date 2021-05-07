<template>
  <div class="list-block">
    <div class="list-unit all_anime">
      <div class="list-status-title">
        <span class="text">ALL ANIME</span>
        <span class="stats">
          <a href="javascript: void(0);" id="show-stats-button"
            ><i class="fa fa-bar-chart"></i> Stats</a
          >
          <a href="javascript: void(0);" id="advanced-options-button"
            ><i class="fa fa-filter"></i> Filters</a
          >
        </span>
      </div>
      <div class="list-stats">
        TV: 135, OVA: 2, Movies: 32,
        <span title="Specials">Spcl.</span>: 2, Eps: 2181, Days: 37.97, Mean
        Score: <span class="score-label score-6">7.0</span>, Score
        <span title="Deviation">Dev.</span>: -0.94
      </div>
      <selectable element-name="Table">
        <mal-table />
      </selectable>
    </div>
  </div>
</template>

<script>
export default {
  name: "MALListBlock",
  components: {
    "mal-table": () => import("./MALTable")
  },
};
</script>
