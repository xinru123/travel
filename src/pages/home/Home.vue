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
import {mapState} from 'vuex'
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
     lastCity:'',
     swiperList:[],
     iconList:[],
     recommendList:[],
     weekendList:[]
   }
  },
  computed:{
   ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      // http://zxr.kiwifruits.cn/mock/index.json
      axios.get('http://zxr.kiwifruits.cn/mock/index.php?city='+this.city).then(this.getHomeInfoSucc)
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
    this.lastCity=this.city
  },
  activated(){
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }
  }
}
</script>


<style lang="stylus" scoped>
 

</style>
