<template>
    <div class="HomeRecommend">
          <div class="title">周末去哪儿</div>
          <ul>
            <li class="item" v-for="x of weekend" :key="x.id">
              <div class="item-img-wrapper">
                <img class="item-img" :src="x.imgUrl" alt="">      
              </div>
              <div class="item-info">
                <p class="item-title">{{x.title}}</p>
                <p class="item-desc">{{x.desc}}</p>
              </div>
            </li>
          </ul>
    </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props:{
   weekend:Array
  },
  data() {
    return {};
}
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';
.title 
  line-height: 0.9rem;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
  background :$weekendTitle
.item
  width :100%
  margin-bottom :.1rem
  .item-img-wrapper 
    width: 100%;
    .item-img 
      width: 100%;
      height:37.06%

  .item-info 
    padding:.14rem .2rem .2rem .2rem ;
    .item-title 
      padding-right: 1.4rem;
      color:$itemTitleColor
      font-size: .28rem;
      line-height: .48rem;
      ellipsis()
    .item-desc 
      padding-right: 1.4rem;
      color:$descColor;
      font-size: .24rem;
      line-height: .42rem;
      ellipsis()
</style>
