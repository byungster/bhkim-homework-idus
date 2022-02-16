<template>
  <li class="card">
    <!-- 1. 썸네일 란-->
    <div class="card-thumbnail-cover">
      <div
        class="card-thumbnail"
        :style="{ backgroundImage: `url(${info.thumbnailPath})` }"
      />
    </div>
    <!-- 2. 상세 란-->
    <div class="card-detail">
      <span class="card-detail-seller" v-html="info.seller" />
      <span class="card-detail-title" v-html="info.title" />
      <!-- 2.1 가격 란 -->
      <my-price-label
        class="card-detail-price"
        :saleRate="info.saleRate"
        :price="info.price"
      />
      <!-- 2.2 리뷰 란-->
      <div class="card-detail-review">
        <div class="review-rate">
          <i class="ico-star fill" v-for="idx in info.reviewRate" :key="idx" />
          <i
            class="ico-star"
            v-for="idx in 5 - info.reviewRate"
            :key="idx + '5'"
          />
        </div>
        <span
          class="review-comment"
          v-if="info.reviewComment"
          v-html="info.reviewComment"
        />
      </div>
    </div>
  </li>
</template>

<script>
import MyPriceLabel from "../MyPriceLabel.vue";
export default {
  components: { MyPriceLabel },
  props: {
    info: {
      required: true,
      type: Object,
      default: () => ({
        id: "cb31z306-00fe-491a-9f55-653a3f7c0e53",
        thumbnailPath:
          "https://image.idus.com/image/files/29f37b26904b40819df8e84df11c6baa_512.jpg",
        seller: "김병호",
        title: "점심 도시락",
        price: 8500,
        saleRate: 30,
        reviewRate: 3,
        reviewComment: "내가 먹는 점심식사는 11시 30분부터 시작됩니다.",
        reviewAuthor: "병스터",
      }),
    },
    isVertical: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.card {
  -webkit-box-flex: 1;
  -ms-flex: 0 0 21%;
  flex: 0 0 21%; /* explanation below */
  margin: 1%;
  list-style: none;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px #e8e8e8;
  box-shadow: 2px 2px 2px #e8e8e8;
  font-size: 1vw;
}

.card-thumbnail-cover {
  overflow: hidden;
}

.card-thumbnail {
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-thumbnail:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card-detail {
  margin: 5px;
  text-align: left;
}

.card-detail-seller {
  display: block;
  font-size: 1vw;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}

.card-detail-title {
  color: black;
  font-size: 1.5vw;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .card-detail-title {
    color: black;
    font-size: 1.5vw;
    font-weight: 500;
    display: block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.card-detail-price {
  margin: 8px 0;
}

.card-detail-review {
  border-top: 1px solid lightgray;
}

.review-comment {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .review-comment {
    display: block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
