<template>
<div class="detail-header">
    <router-link class="header-abs" to="/" v-show="showAbs">
        <div class="iconfont back-icon">&#xe624;</div>  
    </router-link> 
    <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
        景点详情
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
       </router-link>
    </div> 
</div>
   
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return{
          showAbs:true,
          opcityStyle:{
              opacity:0
          }
        }
    },
    methods:{
    handleScroll(){
   
        const top=document.documentElement.scrollTop
       
        if(top>60){
            let opacity=top/140
            opacity=opacity>1?1:opacity
            this.opcityStyle={opacity}
            this.showAbs=false
        }else{
            this.showAbs=true
        }
    }
    },
    /*---------------------重要！！！全局事件解绑-----------------*/
    activated(){
        // 监听事件绑定在全局window上会对其他组件也产生影响
      window.addEventListener('scroll',this.handleScroll)
    },
    // 在页面即将隐藏或即将被替换成新的页面时执行deactivated(){}，
    deactivated(){
        //清除监听事件
        window.removeEventListener('scroll',this.handleScroll)
    }
}   
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl' 
 
.header-abs
   position :absolute
   left :.2rem 
   top:.2rem
   width :.8rem
   height :.8rem
   border-radius: 0.4rem
   background:rgba(0,0,0,.8) 
   text-align:center
   line-height:.8rem
   .back-icon
     color:#fff
     font-size :.32rem 

.header-fixed
   display:block
   height:$headerHeight
   line-height:$headerHeight
   text-align: center
   color:#fff
   background:$bgColor
   font-size :.32rem
   position: fixed
   top:0
   right:0
   left :0
   .header-fixed-back
       width :.64rem
       text-align :center
       font-size :.4rem
       position :absolute
       top:0
       left :0
       color :#fff     
</style>
