<template>
  <div class="home">
    <!-- 과제 1. Card UI 보고서 -->
    <div class="homework-1">
      <!-- 과제 1.1 Card UI - 세로형 -->
      <h1>H1</h1>
      <div class="homework-1-1">
        <my-card-list :cards="cards" />
      </div>
      <!-- 과제 1.1 Card UI - 가로형 -->
      <h1>H2</h1>
      <div class="homework-1-2">
        <my-card-list :cards="cards" :is-vertical="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { Dummy } from "@/assets/dummy";
import MyCardList from "@/components/card/MyCardList.vue";

export default {
  name: "Home",
  components: { MyCardList },
  data: () => ({
    cards: [],
  }),
  created() {
    let dummy = new Dummy();
    this.cards = dummy.createCardInfoList(50);
  },
};
</script>

<style scoped>
.homework-1 > div {
  background-color: #f6f6f6;
  height: 700px;
  overflow-y: scroll;
}
</style>
