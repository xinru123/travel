<template>
<div>
    <div class="banner">
        <img  class="banner-img" src="http://img1.qunarzz.com/sight/p0/1810/c3/c34ec378f12232d0a3.img.jpg_600x330_c482162f.jpg" alt="">
        <div class="banner-info">
            <div class="banner-number"><span  class="iconfont heart">&#xe67a;</span> 21</div>
            <div class="banner-title">古水北镇</div>
        </div>
    </div>
    <common-gallary></common-gallary>
</div> 
</template>
<script>
import CommonGallary from 'gallary/Gallary.vue'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary
    }
}
</script>
<style lang="stylus" scoped>
.banner
    overflow :hidden
    height :0
    padding-bottom :55%
    position: relative
    .banner-img
       width :100% 
    .banner-info
       position:absolute
       bottom:.4rem
       left:0
       right:0
       color :#fff
       padding-left :.2rem
       .banner-title
           line-height :.4rem
           font-size :.36rem
           margin-top :.1rem
       .banner-number
           line-height :.4rem        
           background-color:rgba(0,0,0,.5)
           width :1.2rem
           height :.4rem
           border-radius:.2rem
           text-align :center
</style>
