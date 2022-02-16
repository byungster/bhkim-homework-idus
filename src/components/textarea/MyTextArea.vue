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
export default {
  name: "MyTextArea.vue",
  props: {
    maxLength: {
      type: String,
      required: false,
      default: "500",
    },
    placeholder: {
      type: String,
      required: false,
      default: "주문 요청사항을 입력해주세요",
    },
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
    inputText: "",
  }),
  computed: {
    remainedLength() {
      return this.maxLength - this.inputText.length;
    },
  },
  watch: {
    inputText(newValue) {
      this.$emit("textChanged", newValue !== this.storedText);
    },
    remainedLength(newValue) {
      if (newValue < 0) {
        this.$emit("textChanged", false);
      } else if (this.inputText !== this.storedText) {
        this.$emit("textChanged", true);
      }
    },
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
