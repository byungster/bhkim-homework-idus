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
      <span class="card-detail-title">{{
        info.seller + "의 " + info.title
      }}</span>
      <!-- 2.2 리뷰 란-->
      <div class="card-detail-review">
        <span v-if="info.reviewComment" class="review-comment">
          {{ info.reviewComment }}
        </span>
        <div class="review-footer">
          <div class="review-rate">
            <i
              class="ico-star fill"
              v-for="idx in info.reviewRate"
              :key="idx"
            />
            <i
              class="ico-star"
              v-for="idx in 5 - info.reviewRate"
              :key="idx + '5'"
            />
          </div>
          <span class="review-author">{{ info.reviewAuthor }} </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    info: {
      required: true,
      type: Object,
      default: () => ({
        id: "cb31z306-00fe-491a-9f55-653a3f7c0e53",
        thumbnailPath:
          "https://image.idus.com/image/files/29f37b26904b40819df8e84df11c6baa_512.jpg",
        seller: "김병호",
        title: "점심 도시락 스시 세트",
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
  width: 100%;
}

.card-thumbnail-cover {
  float: left;
  width: 40%;
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
  float: right;
  text-align: left;
  width: 60%;
}

.card-detail-title {
  color: black;
  font-size: 0.9vw;
  font-weight: 500;
  padding: 0.5vw 0.5vw 0 0.5vw;
  overflow: hidden;
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
    font-size: 0.9vw;
    font-weight: 500;
    padding: 0.5vw 0.5vw 0 0.5vw;
    overflow: hidden;
    display: block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.card-detail-review {
  margin-top: 0.5vw;
}

.review-footer {
  width: 100%;
  display: flex;
  font-size: 0.7vw;
  padding: 0.5vw;
}

.review-comment {
  font-size: 0.7vw;
  padding-left: 0.5vw;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .review-comment {
    font-size: 0.7vw;
    padding: 0.5vw;
    display: block;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

@media only screen and (max-width: 1000px) {
  .review-comment {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.review-rate {
  float: left;
}
.ico-star:before {
  font-size: 0.7vw !important;
}
.review-author {
  float: right;
}
.review-author:before {
  content: "| ";
  padding-left: 0.5vw;
}
</style>
