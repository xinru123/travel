<template>
    <div class="HomeRecommend">
          <div class="title">
            <span  class="iconfont heart">&#xe6aa;</span>
          猜你喜欢</div>
          <ul>
            <router-link class="item" v-for="x of recommend" :key="x.id" :to="'/detail/'+x.id">
              <div class="item-img-wrapper">
                <img class="item-img" :src="x.imgUrl" alt="">      
              </div>
              <div class="item-info">
                <p class="item-title">{{x.title}}</p>
                <div class="item-two">
                  <div class="star iconfont" v-html="x.icon"></div>
                  <div class="star iconfont" v-html="x.icon"></div>
                  <div class="star iconfont" v-html="x.icon"></div>
                  <div class="star iconfont" v-html="x.icon"></div>
                  <span class="comment">{{x.num}}条评论</span>
                </div>
                <div class="item-three">
                  <strong class="price">{{x.price}}</strong>
                  <span class="local">{{x.local}}</span>
                </div>
              </div>
            </router-link>
          </ul>
    </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';
.title 
  line-height: 0.9rem;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
  .heart
   color :#ff585b

.item 
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  height: 2.4rem;
  overflow: hidden;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-left: 0.2rem;

  .item-img-wrapper 
    width: 2rem;
    height: 2rem;
    flex: 1;

    .item-img 
      width: 2rem;
      height: 2rem;
    
  

  .item-info 
    flex: 2;
    float: left;
    padding-left: 0.2rem;

    .item-title 
      height: 0.4rem;
      width: auto;
      margin-top: 0.26rem;
      font-size: 0.32rem;
    

    .item-two 
      height: 0.34rem;
      line-height: 0.34rem;
      text-align: center;
      margin-top: 0.14rem;

      .star 
        height: 0.28rem;
        float: left;
        color: #FFB436;
      

      .comment 
        margin-left :.2rem
        float: left;
        color: #616161;
      
    

    .item-three 
      height: 0.46rem;
      margin-top: 0.22rem;
      line-height: 0.46rem;
      text-align: center;

      .price 
        float: left;
        color: $recommendPriceColor
        font-size: 0.4rem;
      

      .local 
        float: right;
        margin-right: 0.24rem;
        color: $descColor;
      
    
  

</style>
