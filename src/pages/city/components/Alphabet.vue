<template>
   <ul class="list">
        <li class="item" v-for="(item,index) of letters" :key="index"
         @click="handleLetterClick"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         :ref="item">{{item}}</li>
   </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    list1: Array
  },
  computed: {
    letters() {
      const letters = [];
      for (var i = 0; i < this.list1.length; i++) {
        letters.push(this.list1[i].title);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //函数节流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index <= this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
        //touchY为手指距绿色区域底端的距离，
        //e.touches[0].clientY返回的值是手指距屏幕顶端的距离,79为绿色区域高度
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list 
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item 
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  

</style>
