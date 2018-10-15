<template>
    <div class="HomeRecommend">
          <div class="title">
            <span  class="iconfont heart">&#xe6aa;</span>
          猜你喜欢</div>
          <ul>
            <li class="item" v-for="x of recommendList" :key="x.id">
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
            </li>
          </ul>
    </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg",
          title: "古北水镇",
          icon: "&#xe810;",
          num: "3267",
          price: "￥141起",
          local: "密云县"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1606/36/362f693e73d95311e2.water.jpg_200x200_c11e4e13.jpg",
          title: "喇叭沟原始森林公园",
          icon: "&#xe810;",
          num: "3267",
          price: "￥41起",
          local: "怀柔区"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg",
          title: "什刹海",
          icon: "&#xe810;",
          num: "3267",
          price: "￥61起",
          local: "西城区"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg ",
          title: "颐和园",
          icon:"&#xe810;",
          num: "3267",
          price: "￥160起",
          local: "海淀区"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg",
          title: "世界花卉大观园",
          icon: "&#xe810;",
          num: "3267",
          price: "￥99起",
          local: "丰台区"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg",
          title: "京东石林峡",
          icon: "&#xe810;",
          num: "3267",
          price: "￥61起",
          local: "平谷区"
        }
      ]
    };
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
