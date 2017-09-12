<template>
  <section class="work-view">
    <header>
      <router-link to="/home">
        <svg t="1505141012474" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2918" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
          <defs></defs>
          <path d="M270.347636 472.67297H886.703838v79.943111H270.347636l304.232728 268.759919-58.536081 56.535919L138.343434 512.649051l29.269334-28.267314L516.041697 147.393939l58.537374 56.519112-304.231435 268.759919z" p-id="2919"></path>
        </svg>
      </router-link>
      <p class="title">{{data.title}}</p>
    </header>
    <section class="banner" :style="{backgroundImage: 'url(' + data.workbanner + ')'}"></section>
    <section class="user">
      <img :src="data.userimg" />
      <section class="data">
        <h4>{{data.name}}</h4>
        <p>创建于：{{data.time}}</p>
      </section>
      <section class="fork">＋ 关注</section>
    </section>
    <section class="content">
      <h6 class="b-title">{{data.title}}</h6>
      <!-- 食材 -->
      <p class="sm-title">用料：</p>
      <food
        v-for="idata in data.food"
        v-bind:data="idata"
        v-bind:key="idata.id"
      ></food>
      <!-- 步骤 -->
      <p class="sm-title">做法：</p>
      <step
        v-for="idata in data.work"
        v-bind:data="idata"
        v-bind:key="idata.id"
      ></step>
    </section>
  </section>
</template>



<script>
import food from '../components/food'
import step from '../components/step'
import qs from 'qs'

export default {
  name: 'work-view',
  components: { food, step },
  data() {
    return {
      data: {}
    }
  },
  created: function() {
    console.log(this.$route.params.id);
    this.getData();
  },
  methods: {
    getData() {
      this.$http.post(
                'https://www.devonhello.com/chihu2/article_dec',
                  qs.stringify({ 'id': this.$route.params.id })
                )
                .then(response => {
                    // get body data
                    console.log(response.data);
                    this.data = response.data[0];
                }, response => {
                    // error callback
                });
    }
  }
}
</script>

<style lang="scss">
.work-view {
  width: 100%;
  padding-top: 1.1rem;
  header {
    width: calc(100% - 0.4rem);
    padding: 0.2rem;
    height: 1.1rem;
    background: #2196f3;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
      fill: #fff;
    }
    .title {
      font-size: 0.55rem;
      line-height: 1.1rem;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 70%;
    }
  }
  .banner {
    width: 100%;
    height: 5.5rem;
    background-position: center;
    background-size: cover;
  }
  .user {
        width: calc(100% - 0.4rem);
        height: 1.25rem;
        padding: 0.3rem 0.2rem;
        background: #fff;
        box-shadow: 0 0 4px #c4c6c8;
        img {
            width: 1.1rem;
            height: 1.1rem;
            border-radius: 99999px;
            float: left;
            margin-right: 12px;
        }
        .data {
            float: left;
            width: 54%;
            h4,
            p {
                margin: 0 !important;
                font-size:0.4rem;
                line-height: 0.55rem;
            }
        }
        .fork {
            width: 65px;
            height: 34px;
            font-size: 0.35rem;
            line-height: 34px;
            float: right;
            border: 1px solid #1e8ae8;
            color: #1e8ae8;
            text-align: center;
            position: relative;
            top: 5px;
        }
        .nofork {
            border: 1px solid red;
            color: red;
        }
    }
    .content {
      width: calc(100% - 0.4rem);
      padding: 0.4rem 0.2rem;
      .b-title {
        display: block;
        font-size: 0.55rem;
      }
      .sm-title {
        line-height: 2rem;
        font-size: 0.45rem;
        color: #eec755;
      }
    }
    
}
</style>