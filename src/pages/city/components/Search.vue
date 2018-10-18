<template>
  <div>
    <div class="search">
       <input type="text"  v-model="keyword"  placeholder="输入城市名称" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li  class="search-item border-bottom" v-for="(item,idx) of nameList" :key="idx">{{item}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:"CitySearch",
    props:{
        list1:Array
    },
    data(){
        return{
           keyword:'' ,
           nameList:[],
           timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
               clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(var i=0;i<22;i++){
                    for(var j=0; j<this.list1[i].cityName.length;j++){
                        if(this.list1[i].cityName[j].indexOf(this.keyword)!=-1 && this.keyword!=''){
                            result.push(this.list1[i].cityName[j])   
                        }    
                    }
                }
                this.nameList=result
            },100)
        }
    },
    mounted(){
      this.scroll=new Bscroll(this.$refs.search)
    },
   computed:{
    hasNoData(){
        return !this.nameList.length
    }
   }
   
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl' 
.search
    height :.72rem
    background:$bgColor
    padding:0 .1rem
    box-sizing :border-box
    .search-input
        box-sizing :border-box
        width :100%
        height :.62rem
        line-height :.62rem
        text-align :center
        border-radius :.06rem
        padding :0 .1rem
.search-content
    overflow :hidden
    position :absolute
    top:1.58rem
    right:0
    bottom :0
    left :0      
    z-index :1
    background:#eee
    .search-item
        line-height :.62rem
        padding-left :.2rem
        background #fff
        color: #666
</style>
