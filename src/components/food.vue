<template>
  <div class="food-item">
    <p>{{foods.name}}</p>
    <p>{{foods.len}}</p>
  </div>
</template>



<script>
export default {
  name: 'food',
  props: ['data'],
  data() {
    return {
      foods: this.data
    }
  }
}
</script>

<style lang="scss">
.food-item {
  display: flex;
  border-bottom: 1px solid #ddd;
  p {
    flex: 1;
    font-size: 0.4rem;
    line-height: 01rem;
  }
}
</style>
