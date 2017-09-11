<template>
  <div class="step">
    <p>{{steps.text}}</p>
    <img :src="steps.src" alt="">
  </div>
</template>



<script>
export default {
  name: 'step',
  props: ['data'],
  data() {
    return {
      steps: this.data
    }
  }
}
</script>

<style lang="scss">
.step {
  font-size: 0.4rem;
  line-height: 0.6rem;
  img {
    width: 100%;
    margin: 0.4rem 0 0.55rem;
  }
}
</style>
