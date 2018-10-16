<template>
 <div class="wrapper"> 
   <swiper :options="swiperOption" v-if="showSwiper">             
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl" alt="去哪儿门票">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
   </swiper>
 </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination',
          autoplay:true
      }
    };
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
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
