<template>
 <div class="wrapper"> 
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg" alt="去哪儿门票">
    </swiper-slide>
    <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1809/4e/4e403d904b3e1502.jpg_750x200_33a2e63b.jpg" alt="去哪儿门票">
    </swiper-slide>
    <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg" alt="去哪儿门票">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
   </swiper>
 </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination'
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
  overflow :hidden
  width :100%
  height :0
  padding-bottom :26.6%
  .swipe-img
   width :100%
</style>
