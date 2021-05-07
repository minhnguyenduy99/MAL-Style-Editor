export default {
  props: {
    anime: {
      series_animedb_id: String,
      series_title: {
        __cdata: String,
      },
      series_type: String,
      series_episodes: Number,
      my_id: Number,
      my_watched_episodes: Number,
      my_start_date: String,
      my_finish_date: String,
      my_rated: String,
      my_score: Number,
      my_storage: String,
      my_storage_value: Number,
      my_status: String,
      my_comments: {
        __cdata: String,
      },
      my_times_watched: Number,
      my_rewatch_value: String,
      my_priority: String,
      my_tags: {
        __cdata: String,
      },
      my_rewatching: Number,
      my_rewatching_ep: Number,
      my_discuss: Number,
      my_sns: String,
      update_on_import: Number,
      anime_image: String,
    },
  },
};
