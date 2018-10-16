<template>
  <div class="hello">
<<<<<<< HEAD
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-icons></home-icons>
   <home-recommend></home-recommend>
   <home-weekend></home-weekend>
   <div>next</div>
=======
   <home-header :city="city"></home-header>
   <home-swiper :list="swiperList"></home-swiper>
   <home-icons :icons="iconList"></home-icons>
   <home-recommend :recommend="recommendList"></home-recommend>
   <home-weekend :weekend="weekendList"></home-weekend>
>>>>>>> master
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> master
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
<<<<<<< HEAD
=======
  },
  data(){
   return{
     city:"",
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
        this.city=data.city
        this.swiperList=data.swiperList 
        this.iconList=data.iconList 
        this.recommendList=data.recommendList 
        this.weekendList=data.weekendList
      }
      console.log(res)
    }
  },
  mounted(){
  this.getHomeInfo()
>>>>>>> master
  }
}
</script>


<style scoped>

</style>
