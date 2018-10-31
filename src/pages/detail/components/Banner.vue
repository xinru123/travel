<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img  class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-number"><span  class="iconfont heart">&#xe67a;</span> {{this.gallaryImgs.length}}</div>
            <div class="banner-title">{{sightName}}</div>
        </div>
    </div>
    <fade-animation>
        <!-- <common-gallary>作为slot -->
       <common-gallary :imgs="gallaryImgs"   v-show="showGallary" @close="handleGalleryClose"></common-gallary>
    </fade-animation>
</div> 
</template>
<script>
import CommonGallary from 'gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    } ,
    data(){
      
      return{
         imgs:[] ,
         showGallary: false     
      }
    },
    components:{
        CommonGallary,
        FadeAnimation
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handleGalleryClose(){
            this.showGallary=false
        }
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
