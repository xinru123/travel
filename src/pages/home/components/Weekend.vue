<template>
    <div class="HomeRecommend">
          <div class="title">周末去哪儿</div>
          <ul>
<<<<<<< HEAD
            <li class="item" v-for="x of recommendList" :key="x.id">
=======
            <li class="item" v-for="x of weekend" :key="x.id">
>>>>>>> master
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
<<<<<<< HEAD
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "上海必游TOP10",
          desc: "中西合璧，现代和传统各有各的精彩"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg",
          title: "亲子时光TOP10",
          desc: "走进自然或玩转乐园，感知大千世界"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg",
          title: "上海城市观光",
          desc: "来这里寻找你所认识的上海"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg",
          title: "情迷博物馆",
          desc: "穿梭时光岁月寻找答案"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg",
          title: "学生最爱TOP10",
          desc: "学习之余最爱玩耍，爱玩的你不可错过"
        }
      ]
    };
=======
  props:{
   weekend:Array
  },
  data() {
    return {};
>>>>>>> master
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';
.title 
  line-height: 0.9rem;
  text-indent: 0.2rem;
<<<<<<< HEAD
  margin-top: 0.2rem;
=======
>>>>>>> master
  background :$weekendTitle
.item
  height :4.04rem
  width :100%
  margin-bottom :.1rem
  .item-img-wrapper 
    width: 100%;
    height: 0;
    padding-bottom :2.8rem
    .item-img 
      width: 100%;
      height: 2.78rem;
    
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
<<<<<<< HEAD

=======
>>>>>>> master
