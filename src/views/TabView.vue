<template>
  <div class="home-view">
      <router-view></router-view>
      <nav>
        <div class="tabs">
            <router-link to="home" active-class="on-tab">
                <svg t="1505113782929" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2239" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M640 479.968h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64m0 160h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64M800.256 128H223.744A64 64 0 0 0 160 192.064v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.904V192.064A64 64 0 0 0 800.256 128" p-id="2240"></path></svg>
            </router-link>
        </div>
        <div class="tabs">
            <svg t="1505114468210" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2353" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M645.568 409.6h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64M512 128C300.288 128 128 300.256 128 512c0 211.712 172.288 384 384 384 211.744 0 384-172.288 384-384 0-211.744-172.256-384-384-384" p-id="2354"></path></svg>
        </div>
        <div class="tabs">
           <svg t="1505114518432" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2467" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M416.096 167.776H223.904A64 64 0 0 0 160 231.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 423.872V231.68a64 64 0 0 0-63.904-63.904M885.088 282.56l-135.904-135.872a64 64 0 0 0-90.368 0L640 165.504 522.912 282.56a63.456 63.456 0 0 0-18.656 45.056 63.456 63.456 0 0 0 18.656 45.312l18.816 18.816L640 490.08l18.816 18.816a63.904 63.904 0 0 0 90.368-0.032l117.088-117.12 18.816-18.784a63.936 63.936 0 0 0 0-90.368M416.096 551.776H223.904A64 64 0 0 0 160 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 480 807.872V615.68a64 64 0 0 0-63.904-63.904M800.096 551.776h-192.192A64 64 0 0 0 544 615.68v192.192a64 64 0 0 0 63.904 63.904h192.192A64 64 0 0 0 864 807.872V615.68a64 64 0 0 0-63.904-63.904" p-id="2468"></path></svg>
        </div>
        <div class="tabs">
            <svg t="1505114580800" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2581" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M688 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96M512 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96m-176 0a48 48 0 1 1-0.032-95.968A48 48 0 0 1 336 544M805.312 192H218.688C186.336 192 160 219.488 160 253.248v471.392c0 33.792 26.4 61.248 58.816 61.248h189.344c5.888 0 15.648 5.728 18.304 10.752l38.08 71.968 2.912 4.544c11.136 14.496 27.36 22.816 44.48 22.848h0.032c17.152 0 33.376-8.32 44.576-22.816l40.992-76.544c2.432-4.576 11.936-10.752 18.336-10.752h189.504c32.32 0 58.624-27.456 58.624-61.248V253.248C864 219.488 837.664 192 805.312 192" p-id="2582"></path></svg>
        </div>
        <div class="tabs">
            <router-link to="more" active-class="on-tab">
                <svg t="1505114674054" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2809" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M645.568 409.6h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64M512 128C300.288 128 128 300.256 128 512c0 211.712 172.288 384 384 384 211.744 0 384-172.288 384-384 0-211.744-172.256-384-384-384" p-id="2810"></path></svg>
            </router-link>
        </div>
        </nav>  
  </div>
  
</template>



<script>
export default {
  name: 'tab-view'
}
</script>

<style lang="scss">
nav {
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid #666;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ededed;
    display: flex;
    .tabs {
      flex: 1;
      display: flex;
      svg {
          width: 0.8rem;
          height: 0.8rem;
          fill: #959595;
      }
      align-items: center;
      justify-content: center;
      .on-tab svg {
          fill: #2196f3;
      }
    }
  }
</style>