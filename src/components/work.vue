<template>
  <div class="work">
    <router-link :to="{ name: 'WorkView', params: { id: data._id }}">
      <header>
        <img :src="list.userimg" alt="">
        <p class="name">{{list.name}}</p>
        <p class="time">2017-09-11</p>
      </header>
      <div class="banner" :style="{backgroundImage: 'url(' + list.workbanner + ')'}"></div>
      <h6 class="title">{{list.title}}</h6>
      <p class="dec">{{list.text}}</p>
      <section class="mark">
        <p> 感谢:{{list.mark.think}} • 收藏:{{list.mark.collect}} • 评论:{{list.mark.cont}}</p>
    </section>
    </router-link>
  </div>
</template>



<script>
export default {
  name: 'work',
  props: ['data'],
  data () {
    return {
      list: this.data
    }
  }
}
</script>

<style lang="scss">
.work {
  width: 94%;
  overflow: hidden;
  padding: 3%;
  background: #fff;
  border-bottom: 0.2rem solid #eee;
  header {
    width: 100%;
    height: 1rem;
    margin-bottom: 0.3rem;
    font-size: 0.45rem;
    line-height: 1rem;
    img {
      width: 1rem;
      float: left;
      height: 1rem;
      border-radius: 9999px;
    }
    .name {
      float: left;
      margin-left: 0.25rem;
    }
    .time {
      float: right;
    }
  }
  .banner {
    width: 100%;
    height: 4rem;
    background-position: center;
    background-size: cover;
  }
  .title {
    font-size: 0.55rem;
    line-height: 1.2rem;
  }
  .dec {
    font-size: 0.4rem;
    line-height: 0.55rem;
  }
  .mark {
    font-size: 0.38rem;
    padding-top: 0.5rem;
  }
}
</style>
