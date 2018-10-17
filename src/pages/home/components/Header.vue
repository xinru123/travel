<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>   
     </div>
   <div class="header-input">
      <span class="iconfont">&#xe632;</span>
     城市/景点/游玩主题
    </div>
    <router-link to="/city">
       <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe60e;</span>
       </div>
    </router-link>
   
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display:flex
  line-height:$headerHeight
  color:#fff
  background :$bgColor
  // text-align :center
  .header-left
    float:left
    width:.64rem
    .back-icon
      text-align :center
      font-size:.4rem

   .header-input
     flex:1
     background :#fff
     border-radius:.1rem
     margin-top:.12rem
     height:.64rem
     margin-left:.2rem
     color:#ccc
     line-height:.64rem
     padding-left :.2rem

   .header-right
     float:right
     width :1.24rem
     text-align :center
     color :#fff
     .arrow-icon
       font-size:.2rem
       margin-left :-.04rem
</style>
