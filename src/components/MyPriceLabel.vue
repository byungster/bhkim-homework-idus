<template>
  <div>
    <span class="sale-rate" v-html="saleRate + '%'" />
    <span class="new-price" v-html="newPrice + '원'" />
    <span class="price" v-html="price + '원'" />
  </div>
</template>

<script>
export default {
  name: "MyPriceLabel.vue",
  props: {
    saleRate: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    newPrice() {
      return (this.price * (100 - this.saleRate)) / 100;
    },
  },
};
</script>

<style scoped>
.sale-rate {
  font-size: 1.4vw;
  font-weight: 800;
  color: #ff4b50;
  margin-right: 8px;
}

.new-price {
  font-size: 1.4vw;
  font-weight: 600;
}

.price {
  display: block;
  text-decoration: line-through;
}
</style>
