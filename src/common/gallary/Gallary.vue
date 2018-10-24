<template>
   <div class="container">
       <div class="wrapper">
           <swiper :options="swiperOption">             
    <!-- slides -->
    <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/sight/p0/1810/56/56fd472f4ac770b0a3.img.jpg_350x240_c1803228.jpg" alt="去哪儿门票">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
   </swiper>
       </div>
   </div>
</template>
<script>
export default {
  name: "CommonGallary",
  data(){
      return{
        swiperOption: {pagination:'.swiper-pagination'}
      }
  }
};
</script>
<style lang="stylus" scoped>
.container 
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;

    .wrapper 
        background: #fff;
        overflow: hidden
        height :0
        width :100%
        padding-bottom:100%

</style>
