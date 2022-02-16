<template>
  <div class="home">
    <!-- 과제 1. Card UI 보고서 -->
    <h1 v-html="'과제 1. 카드 UI'" />
    <div class="homework-1">
      <!-- 과제 1.1 Card UI - 세로형 -->
      <h3 v-html="'1.1 세로형 카드 (Vertical Card)'" />
      <div class="homework-1-1">
        <my-card-list :cards="cards" :isShowReview="isShowReview" />
      </div>
      <!-- 과제 1.1 Card UI - 가로형 -->
      <h3 v-html="'1.2 가로형 카드 (Horizontal Card)'" />
      <div class="homework-1-2">
        <my-card-list :cards="cards" :is-vertical="false" />
      </div>
    </div>
    <div class="homework-2">
      <h1 v-html="'과제 2. 입력 폼 UI'" />
      <h3 v-html="'2.1 디폴트 상태 & 입력중 상태'" />
      <div class="homework-2-1">
        <div class="homework-2-1-form">
          <my-text-area
            @textChanged="setEditState"
            :stored-text="configStoredText"
            :max-length="configMaxLength"
          />
          <button
            class="btn"
            :disabled="!isNowEdit || configMaxLength < 0"
            v-html="'저장'"
          />
        </div>
        <div class="homework-2-1-config">
          설정:
          <label>
            1. 최대 글자수
            <input
              type="number"
              placeholder="최대 글자 수"
              v-model="configMaxLength"
            />
          </label>
          ,
          <label>
            2. 초기 값
            <input
              type="text"
              placeholder="초기 값"
              v-model="configStoredText"
            />
          </label>
        </div>
      </div>
      <h3 v-html="'2.2 Disable 상태'" />
      <div class="homework-2-2">
        <my-text-area :is-disabled="true" />
      </div>
      <h3 v-html="'2.3 Read Only 상태'" />
      <div>
        <my-text-area :is-read-only="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { Dummy } from "@/assets/dummy";
import MyCardList from "@/components/card/MyCardList.vue";
import MyTextArea from "@/components/textarea/MyTextArea.vue";

export default {
  name: "Home",
  components: { MyTextArea, MyCardList },
  data: () => ({
    // 첫번째 과제,
    cards: [],
    isShowReview: true,

    // 두번째 과제
    isNowEdit: false, // 입력 중
    configMaxLength: 500, // 최대 글자 수
    configStoredText: "", // 초기 값
  }),
  created() {
    let dummy = new Dummy();
    this.cards = dummy.createCardInfoList(50);
  },
  methods: {
    setEditState(flag) {
      this.isNowEdit = flag;
    },
  },
};
</script>

<style scoped>
.homework-1 > div {
  background-color: #f6f6f6;
  height: 700px;
  overflow-y: scroll;
}

.homework-2-1-config {
  display: flex;
  margin: 1vh 0;
  font-size: 1.2vw;
}

.homework-2-1-config > label {
  margin: 0 1vw;
}

.homework-2-1-form {
  display: flex;
}

.btn {
  background: #ffffff;
  border: 1px solid #ff7b30;
  color: #ff7b30;
  margin-left: 0.5vw;
}

.btn[disabled] {
  color: #d9d9d9;
  background: #f2f2f2;
  cursor: default;
  border: 1px solid #d9d9d9;
}
</style>
