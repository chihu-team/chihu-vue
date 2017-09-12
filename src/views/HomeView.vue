<template>
<VuePullRefresh :on-refresh="onRefresh">
    <section class="home-view">
        <section class="search-bar">
            <div class="search">
                <svg t="1505115529398" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2923" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                    <defs></defs>
                    <path d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28" p-id="2924"></path>
                </svg>
                搜索
            </div>
        </section>
        <section class="content">
            <work v-for="idata in data" v-bind:data="idata" v-bind:key="idata.id">
            </work>
        </section>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    </section>
</VuePullRefresh>
</template>



<script>
import work from '../components/work'
import qs from 'qs'
import InfiniteLoading from 'vue-infinite-loading';
import VuePullRefresh from 'vue-pull-refresh';


export default {
    name: 'home-view',
    components: { work, InfiniteLoading, VuePullRefresh },
    data() {
        return {
            data: []
        }
    },
    created: function() {
        //this.getData();
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        },
        onInfinite() {
            this.getData();
            //this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        },
        getData() {
            this.$http.post(
                'https://www.devonhello.com/chihu2/home',
                qs.stringify({ 'len': this.data.length })
                )
                .then(response => {

                    // get body data
                    console.log(response.data);
                    this.data = this.data.concat(response.data);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }, response => {
                    // error callback
                });
        }
    }
}
</script>

<style lang="scss">
.home-view {
    width: 100%;
    position: relative;
    height: 100%;
    background: #eee;
    .search-bar {
        width: 100%;
        padding: 0.2rem;
        height: 1.1rem;
        background: #2196f3;
        position: fixed;
        top: 0;
        left: 0;
        .search {
            width: calc(100% - 0.8rem);
            height: 100%;
            padding: 0 0.2rem;
            background: #fff;
            display: flex;
            font-size: 0.45em;
            align-items: center;
            svg {
                width: 0.5rem;
                height: 0.5rem;
                margin-right: 0.3rem;
            }
        }
    }
    .content {
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
}
</style>