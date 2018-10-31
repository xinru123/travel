<template>
  <div>
      <city-header ></city-header>
      <city-search :list1="listData"></city-search>
      <city-list :list="hotCity" :list1="listData"  :letter="msg"></city-list>
      <city-alphabet :list1="listData" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
import axios from 'axios'
export default {
    name:"City",
    data(){
        return{
         hotCity:[],
         listData:[],
         msg:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
    getHomeInfo(){
      axios.get('/api/city.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if (res.ret&&res.data){
        const data=res.data
        this.hotCity=data.hotCity
        this.listData=data.listData
      }
    },
    handleLetterChange(letter){
       this.msg=letter
    }
  },
    mounted(){
    this.getHomeInfo()
   }
}
</script>
<style lang="stylus" scoped>

</style>
