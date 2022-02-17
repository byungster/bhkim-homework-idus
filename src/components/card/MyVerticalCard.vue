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
      <div
        class="card-detail-review"
        v-if="info.reviewRate || info.reviewComment"
      >
        <div class="review-rate">
          <i class="ico-star fill" v-for="idx in info.reviewRate" :key="idx" />
          <i class="ico-star" v-for="idx in 5 - info.reviewRate" :key="idx" />
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

/**
 * @description 세로형 카드입니다.
 */
export default {
  components: { MyPriceLabel },
  props: {
    info: {
      type: Object,
      default: () => ({
        id: "",
        thumbnailPath: "",
        seller: "",
        title: "",
        price: 0,
        saleRate: 0,
        reviewRate: 0,
        reviewComment: "",
        reviewAuthor: "",
      }),
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
  border-radius: 0.5vw;
  -webkit-box-shadow: 0.2vw 0.2vw 0.2vw #e8e8e8;
  box-shadow: 0.2vw 0.2vw 0.2vw #e8e8e8;
  font-size: 1vw;
  height: 100%;
  cursor: pointer;
}

.card-thumbnail-cover {
  overflow: hidden;
}

.card-thumbnail {
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}

.card:hover {
  transform: scale(1.04);
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: all 0.3s ease;
}

.card-thumbnail:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card-detail {
  margin: 1vw;
  text-align: left;
}

.card-detail-seller {
  display: block;
  font-size: 1vw;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1vw;
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

.card-detail-review {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: center;
  align-content: center;
  padding-top: 0.5vw;
  height: 4vh;
  border-top: 0.1vw solid lightgray;
}

.card-detail-price {
  margin: 1vw 0;
}

.review-comment {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/** IE */
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

  .card-detail-review {
    height: 100%;
  }

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
