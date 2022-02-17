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
      <span
        class="card-detail-title"
        v-html="info.seller + '의 ' + info.title"
      />
      <!-- 2.2 리뷰 란-->
      <div class="card-detail-review">
        <span
          class="review-comment"
          v-if="info.reviewComment"
          v-html="info.reviewComment"
        />
        <div class="review-footer">
          <div class="review-rate">
            <i
              class="ico-star fill"
              v-for="idx in info.reviewRate"
              :key="idx"
            />
            <i class="ico-star" v-for="idx in 5 - info.reviewRate" :key="idx" />
          </div>
          <span
            class="review-author"
            v-if="info.reviewAuthor"
            v-html="info.reviewAuthor"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
/**
 * @description 가로형 Card 컴포넌트입니다.
 */
export default {
  name: "MyHorizontalCard",
  props: {
    info: {
      required: true,
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
  border: 1px solid lightgray;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px #e8e8e8;
  box-shadow: 2px 2px 2px #e8e8e8;
  font-size: 1vw;
  width: 100%;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.04);
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: all 0.3s ease;
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

/** IE */
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
</style>
