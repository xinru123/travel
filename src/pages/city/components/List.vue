<template>
  <div class="list" ref="wrapper">
    <div>
     <div class="area">
         <div class="title border-topbottom">您的位置</div>
         <div class="button-list">
             <div class="button-wrapper">
                <div class="button">北京</div>
             </div>
         </div>
     </div>
     <div class="area">
         <div class="title border-topbottom">热门城市</div>
         <div class="button-list">
             <div class="button-wrapper" v-for="(item ,index) of list" :key="index">
                <div class="button">{{item}}</div>
             </div>
         </div>
     </div>
     <div class="area" v-for="x of list1" :key="x.title">
        <div class="title border-topbottom" :ref="x.title">{{x.title}}</div>
        <div class="item-list" v-for="(city,index) of x.cityName" :key="index">
            <div class="item border-bottom">{{city}}</div> 
        </div>     
     </div>
     </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
   name:"CityList",
   props:{
       list:Array,
       list1:Array,
       letter:String
   },
   mounted(){
       this.scroll=new Bscroll(this.$refs.wrapper)
   },
   watch:{
     letter() {
        //  console.log(this.letter)
        if(this.letter){
            //获取以点击字母为ref属性值的dom元素
            const element =this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
            // console.log("Ok")
        }
     } 
   }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    position:absolute
    top:1.58rem
    left :0
    bottom:0
    right :0
    overflow: hidden
    .area
        background:rgba(0,0,0,0)
        .title
           line-height :.54rem
           background :#eee
           padding-left:.2rem
           color :#666
           font-size :.26rem
        .border-topbottom
          &:before
            border-color:#ccc
          &:after
            border-color:#ccc 
        .border-bottom
          &:before
            border-color:#ccc
             
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow: hidden
            .button-wrapper
               float:left
               width :33.33%
               .button
                   margin: .1rem
                   text-align :center
                   border 0.02rem solid #ccc
                   padding :.1rem 0
                   border-radius:.06rem
                   font-size :.28rem
        .item-list
            .item
                line-height :.76rem
                padding-left :.2rem
                font-size :.28rem
            
       

</style>
