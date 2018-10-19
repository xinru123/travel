<template>
  <div class="hello">
   <home-header></home-header>
   <home-swiper :list="swiperList"></home-swiper>
   <home-icons :icons="iconList"></home-icons>
   <home-recommend :recommend="recommendList"></home-recommend>
   <home-weekend :weekend="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
   return{
     swiperList:[],
     iconList:[],
     recommendList:[],
     weekendList:[]
   }
  },
  methods:{
    getHomeInfo(){
      axios('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if (res.ret&&res.data){
        const data=res.data
        this.swiperList=data.swiperList 
        this.iconList=data.iconList 
        this.recommendList=data.recommendList 
        this.weekendList=data.weekendList
      }
      // console.log(res)
    }
  },
  mounted(){
  this.getHomeInfo()
  }
}
</script>


<style lang="stylus" scoped>
 

</style>
