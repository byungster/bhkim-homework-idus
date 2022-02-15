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
