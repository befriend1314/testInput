<template>
  <div id="app">
    <div class="main" id="myCardList">
      <ul>
        <li v-for="i in 50" :key="i">美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.isIosStopScroll();
  },
  methods: {
    // 一进页面的时候执行的方法
    isIosStopScroll() {
      const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
      if (ios) {
        const divEl = document.getElementById('myCardList'); // 这是你需要定义的容器，这个容器里滑动正常，出了这个容器，页面的橡皮筋效果就被禁用掉了
        this.iosTouchFn(divEl);
      }
    },
    // 解决ios橡皮筋问题
    iosTouchFn(el) {
      // el需要滑动的元素
      el.addEventListener('touchmove', e => {
        e.isSCROLL = true;
      });
      document.body.addEventListener('touchmove', e => {
        if (!e.isSCROLL) {
          e.preventDefault(); // 阻止默认事件(上下滑动)
        } else {
          // 需要滑动的区域
          let top = el.scrollTop; // 对象最顶端和窗口最顶端之间的距离
          const scrollH = el.scrollHeight; // 含滚动内容的元素大小
          const offsetH = el.offsetHeight; // 网页可见区域高
          const cScroll = top + offsetH; // 当前滚动的距离

          // 被滑动到最上方和最下方的时候
          if (top === 0) {
            top = 1; // 0～1之间的小数会被当成0
          } else if (cScroll === scrollH) {
            // eslint-disable-next-line no-param-reassign
            el.scrollTop = top - 0.1;
          }
        }
      }, { passive: false }); // passive防止阻止默认事件不生效
    }

  }
};
</script>

<style>
body, div{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  position: relative;
  height: 500px;
  background: #fcc;
  overflow-y: auto;
}
ul{ width: 500px;}
li{
  line-height: 1.75;
}

</style>
