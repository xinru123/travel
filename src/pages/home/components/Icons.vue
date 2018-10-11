<template>
   <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="x of page" :key="x.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="x.imgUrl"  alt=""> 
          </div>
          <p class="icon-desc">{{x.desc}}</p>
        </div> 
      </swiper-slide>
         
   </swiper>
   </div> 
</template>
<script>
export default {
  name: "HomeIcons",
  data(){
    return{
      iconList:[{
        id:'0001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'景点门票'
      },{
        id:'0002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'打卡圣地'
      },{
        id:'0003',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc:'一日游'
      },{
        id:'0004',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc:'文化古迹'
      },{
        id:'0005',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc:'动植物园'
      },{
        id:'0006',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'景点门票'
      },{
        id:'0007',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc:'打卡圣地'
      },{
        id:'0008',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'一日游'
      },{
        id:'0009',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc:'泡温泉'
      }]
    }
  },
  computed:{
    pages(){
      const pages=[]
      this.iconList.forEach((x,index)=>{
        const page =Math.floor(index/8)//确定page页个数
        //pages 数组本为空，if操作之后使得pages[0]和pages[1]都成为一个空数组
        if(!pages[page]){
           pages[page]=[]
           console.log(pages)
        }
        //向每个page页中填内容
        pages[page].push(x)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons >>>.swiper-container
  height: 0
  padding-bottom: 50%
.icon 
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-img 
      position: absolute
      top: 0
      bottom: 0.44rem
      left: 0
      right: 0
      box-sizing: border-box
      padding: 0.1rem

      .icon-imgcontent 
        display: block
        margin: 0 auto
        height: 100%
      
    

    .icon-desc 
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      color: $darkTextColor
      font-size: 12px
      ellipsis()

</style>
