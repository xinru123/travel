<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list  :list="list"></detail-list>
        </div>
    </div>
    
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',//组件name的用途：1.递归组件；2.keep-alive中指定某个组件不被缓存exclude="Detail"；3.vue调试工具中会用到
    bannerImg:"",
    gallaryImgs:[],

    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName:'',
            bannerImg:"",
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
      getDetailInfo(){
        axios.get('/api/detail.json',  {
            params:{
              id: this.$route.params.id
            }
        }).then(this.handleGetDataSucc)
      },
    
      handleGetDataSucc(res){
          res=res.data
          if(res.ret && res.data){
              const data=res.data
              this.sightName=data.sightName
              
              this.bannerImg=data.bannerImg
              this.gallaryImgs=data.gallaryImgs
              this.list=data.categoryList
            //   console.log(data)
          }
      }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
.content
   height: 50rem
</style>
