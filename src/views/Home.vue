<template>
  <div class="home">
    <!-- 과제 1. Card UI 보고서 -->
    <h1 v-html="'1. 카드 UI'" />
    <div class="homework-1">
      <!-- 과제 1.1 Card UI - 세로형 -->
      <h3 v-html="'1.1 세로형 카드 (Vertical Card)'" />
      <div class="homework-1-1">
        <my-card-list :cards="cards" />
      </div>
      <!-- 과제 1.1 Card UI - 가로형 -->
      <h3 v-html="'1.2 가로형 카드 (Horizontal Card)'" />
      <div class="homework-1-2">
        <my-card-list :cards="cards" :is-vertical="false" />
      </div>
    </div>
    <div class="homework-2">
      <h1 v-html="'2. 폼 입력 UI'" />
      <h3 v-html="'2.1 디폴트 상태 & 입력중 상태'" />
      <div class="homework-2-1">
        <h4 v-html="'설정해보기'" />
        <div class="homework-2-1-config">
          <label>
            최대 글자수
            <input
              type="number"
              placeholder="최대 글자 수"
              v-model="configMaxLength"
            />
          </label>
          <label>
            초기 값
            <input
              type="text"
              placeholder="초기 값"
              v-model="configStoredText"
            />
          </label>
        </div>
        <div class="homework-2-1-form">
          <my-text-area
            @textChanged="setEditState"
            :stored-text="configStoredText"
            :max-length="configMaxLength"
          />
          <button class="btn" :disabled="!isNowEdit" v-html="'저장'" />
        </div>
      </div>
      <h3 v-html="'2.2 Disable 상태 & Read Only 상태'" />
      <div class="homework-2-2">
        <my-text-area :is-disabled="true" />
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
    cards: [],
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
  height: 100px;
  overflow-y: scroll;
}

.homework-2-1-config {
  display: flex;
}

.homework-2-1-form {
  display: flex;
}

.btn {
  background: #ffffff;
  border: 1px solid #ff7b30;
  color: #ff7b30;
}

.btn[disabled] {
  color: #d9d9d9;
  background: #f2f2f2;
  cursor: default;
  border: 1px solid #d9d9d9;
}
</style>
