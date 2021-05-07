<template>
  <table class="list-table">
    <tbody>
      <tr class="list-table-header">
        <th class="header-title status"></th>
        <th class="header-title number">#</th>
        <th class="header-title image"><a class="link hover_info">Image</a></th>
        <th class="header-title title">
          <a class="link sort"> Anime Title </a>
        </th>
        <th class="header-title score">
          <a class="link sort"> Score </a>
        </th>
        <th class="header-title type">
          <a class="link sort"> Type </a>
        </th>
        <th class="header-title progress">
          <a class="link sort"> Progress </a>
        </th>
        <th class="header-title tags">Tags</th>
      </tr>
    </tbody>
    <mal-table-item v-for="anime in animes" :key="anime.id" :anime="anime" />
  </table>
</template>

<script>
export default {
  name: "MALTable",
  components: {
    "mal-table-item": () => import("./MALTableItem/MALTableItem"),
  },
  data: () => ({
    animes: [
      {
        series_animedb_id: 31646,
        series_title: {
          __cdata: "3-gatsu no Lion",
        },
        series_type: "TV",
        series_episodes: 22,
        my_id: 0,
        my_watched_episodes: 22,
        my_start_date: "0000-00-00",
        my_finish_date: "0000-00-00",
        my_rated: "",
        my_score: 8,
        my_storage: "",
        my_storage_value: 0,
        my_status: "Completed",
        my_comments: {
          __cdata: "",
        },
        my_times_watched: 0,
        my_rewatch_value: "",
        my_priority: "LOW",
        my_tags: {
          __cdata: "",
        },
        my_rewatching: 0,
        my_rewatching_ep: 0,
        my_discuss: 1,
        my_sns: "default",
        update_on_import: 0,
        anime_image:
          "https://cdn.myanimelist.net/r/96x136/images/anime/1716/111533.webp?s=1f8a22474958009d6323859e58cf27d4",
      },
      {
        series_animedb_id: 35180,
        series_title: {
          __cdata: "3-gatsu no Lion 2nd Season",
        },
        series_type: "TV",
        series_episodes: 22,
        my_id: 0,
        my_watched_episodes: 22,
        my_start_date: "0000-00-00",
        my_finish_date: "0000-00-00",
        my_rated: "",
        my_score: 9,
        my_storage: "",
        my_storage_value: 0,
        my_status: "Completed",
        my_comments: {
          __cdata: "",
        },
        my_times_watched: 0,
        my_rewatch_value: "",
        my_priority: "LOW",
        my_tags: {
          __cdata: "",
        },
        my_rewatching: 0,
        my_rewatching_ep: 0,
        my_discuss: 1,
        my_sns: "default",
        update_on_import: 0,
        anime_image:
          "https://cdn.myanimelist.net/r/96x136/images/anime/1716/111533.webp?s=1f8a22474958009d6323859e58cf27d4",
      },
      {
        series_animedb_id: 36793,
        series_title: {
          __cdata: "3D Kanojo: Real Girl",
        },
        series_type: "TV",
        series_episodes: 12,
        my_id: 0,
        my_watched_episodes: 12,
        my_start_date: "0000-00-00",
        my_finish_date: "0000-00-00",
        my_rated: "",
        my_score: 4,
        my_storage: "",
        my_storage_value: 0,
        my_status: "Completed",
        my_comments: {
          __cdata: "",
        },
        my_times_watched: 0,
        my_rewatch_value: "",
        my_priority: "LOW",
        my_tags: {
          __cdata: "",
        },
        my_rewatching: 0,
        my_rewatching_ep: 0,
        my_discuss: 1,
        my_sns: "default",
        update_on_import: 0,
        anime_image:
          "https://cdn.myanimelist.net/r/96x136/images/anime/1716/111533.webp?s=1f8a22474958009d6323859e58cf27d4",
      },
    ],
  }),
};
</script>

<style scoped>
.table-item-wrapper {
  width: 100%;
}
</style>
