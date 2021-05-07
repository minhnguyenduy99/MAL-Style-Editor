<template>
  <selectable tag="tbody" class="list-item" element-name="Item">
    <tr class="list-table-data">
      <td class="data status watching"></td>
      <td tag="td" class="data number">{{ numberOrder }}</td>
      <td class="data image">
        <a href="/anime/41006/Higurashi_no_Naku_Koro_ni_Gou" class="link sort">
          <img :src="anime.anime_image" class="hover-info image" />
        </a>
      </td>
      <td tag="td" class="data title clearfix" element-name="Name">
        <selectable
          element-name="Name"
          tag="a"
          class="link sort"
          size="small"
          >{{ anime.series_title.__cdata }}</selectable
        >
        <span class="rewatching" style="display: none"> </span>
        <span class="content-status" style="display: none"> </span>
        <div class="add-edit-more">
          <span class="edit"><a class="List_LightBox">Edit</a></span>
          -
          <span class="more"><a href="#">More</a></span>
        </div>
      </td>
      <td class="data score">
        <a href="#" class="link"
          ><span class="score-label score-na"> - </span></a
        >
      </td>
      <td class="data type">{{ anime.series_type }}</td>
      <td class="data progress">
        <div class="progress-41006">
          <span
            ><a href="#" class="link">-</a>
            /
          </span>
          <span>24</span>
          <a href="#" class="icon-add-episode"
            ><i class="fa fa-plus-circle"></i
          ></a>
        </div>
      </td>
      <td id="tags-41006" class="data tags">
        <div class="tags-41006"></div>
        <a href="#" class="edit">Edit</a>
      </td>
    </tr>
    <tr id="more-41006" class="more-info">
      <td colspan="8" class="more-content"></td>
    </tr>
  </selectable>
</template>

<script>
import AnimeMixin from "./anime.mixin";

export default {
  name: "MALTableItem",
  mixins: [AnimeMixin],
  props: {
    numberOrder: Number,
  },
};
</script>
