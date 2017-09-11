<template>
  <div class="no-view">
      <div class="basic">
        <h4>404</h4>
        <p>Didn’t find anything here!</p>
        <br>
        <p><router-link to="home">Go to home!</router-link></p>
      </div>
  </div>
  
</template>



<script>
export default {
  name: 'no-view'
}
</script>

<style lang="scss">
.no-view {
  width: 100%;
  height: 100%;
  
  background: #333;
  .basic {
    display: flex;
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-size: 4rem;
    color: #fff;
    text-align: center;
    p {
      font-size: 0.5rem;
    }
  }
}
</style>