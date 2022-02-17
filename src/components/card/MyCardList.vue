<template>
  <ul class="card-list">
    <component
      :is="cardShape"
      v-for="cardInfo in cards"
      :key="cardInfo.id"
      :info="cardInfo"
    />
  </ul>
</template>

<script>
import MyVerticalCard from "./MyVerticalCard.vue";
import MyHorizontalCard from "./MyHorizontalCard.vue";

/**
 * @description 카드를 표시하는 list입니다.
 * vertical 여부에 따라 컴포넌트를 동적으로 가져오는 것이 이 컴포넌트의 주요 기능입니다.
 */
export default {
  name: "MyCardList",
  components: { MyHorizontalCard, MyVerticalCard },
  props: {
    isVertical: {
      type: Boolean,
      default: true,
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cardShape() {
      return this.isVertical ? "my-vertical-card" : "my-horizontal-card";
    },
  },
};
</script>

<style scoped>
.card-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
