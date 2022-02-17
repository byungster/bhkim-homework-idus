<template>
  <div>
    <textarea
      v-model="inputText"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :disabled="isDisabled"
      :readonly="isReadOnly"
    />
    <span class="remained-length" v-html="remainedLength" />
  </div>
</template>

<script>
/**
 * @description 입력 폼 UI(Textarea) 입니다.
 */
export default {
  name: "MyTextArea",
  props: {
    maxLength: {
      type: Number,
      required: false,
      default: 500,
    },
    placeholder: {
      type: String,
      required: false,
      default: "주문 요청사항을 입력해주세요",
    },
    /**
     * @description 초기 값입니다.
     * watch에서도 값이 있는지를 지켜봅니다.
     */
    storedText: {
      type: String,
      required: false,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isReadOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    /**
     * @description TextArea의 Value를 담는 변수입니다.
     * v-model로 걸려있으며, watch에서도 입력중 여부를 확인하고자 값을 지켜봅니다.
     */
    inputText: "",
  }),
  computed: {
    /**
     * @description 남은 글자수 표시에 사용
     * @returns {number}
     */
    remainedLength() {
      return this.maxLength - this.inputText.length;
    },
  },
  watch: {
    inputText(newValue) {
      let isTyping = newValue !== this.storedText;

      /**
       * 지금 타이핑 중이에요! 또는 아니에요!
       * @property {Boolean} isTyping - 초기 값과 다른 값이 입력된 상태인지의 여부
       */
      this.$emit("textChanged", isTyping);
    },
    remainedLength(newValue) {
      if (newValue < 0) {
        this.$emit("textChanged", false);
      } else if (this.inputText !== this.storedText) {
        this.$emit("textChanged", true);
      }
    },
    /**
     * @description Props를 바로 사용할 수 없으므로, 초기 값이 있다면 inputText에 재할당합니다.
     */
    storedText: {
      immediate: true,
      handler(value) {
        if (value) {
          this.inputText = value;
        }
      },
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  position: relative;
}
textarea {
  border: 0.1vw solid lightgray;
  border-radius: 0.5vw;
  width: 30vw;
  height: 10vh;
  padding: 0.5vw 1vw;
  font-size: 1vw;
}
.remained-length {
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  font-size: 1vw;
}
</style>
