<template>
  <div id="app">
    <div class="main scroll-box" >
      <ul>
        <li v-for="i in 50" :key="i">美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.bindTouchEvents();
  },
  methods: {
    // 修改 vxe-table 中的滑动容器行为
    bindTouchEvents() {
      const element = document.getElementsByClassName(
        'scroll-box'
      )[0];
      if (element) {
        element.addEventListener(
          'touchstart',
          event => {
            event.preventDefault();
            this.touchX = event.changedTouches[0].clientX;
            this.touchY = event.changedTouches[0].clientY;
          },
          true
        );
        element.addEventListener(
          'touchmove',
          event => {
            event.preventDefault();

            // 计算手指偏移量
            const offsetX = event.changedTouches[0].clientX - this.touchX;
            const offsetY = event.changedTouches[0].clientY - this.touchY;
            element.scrollLeft -= offsetX;
            element.scrollTop -= offsetY;

            this.touchX = event.changedTouches[0].clientX;
            this.touchY = event.changedTouches[0].clientY;
          },
          true
        );
        element.addEventListener(
          'touchend',
          event => {
            event.preventDefault();

            this.touchX = event.changedTouches[0].clientX;
            this.touchY = event.changedTouches[0].clientY;
          },
          true
        );
      } else {
        console.warn('未获取到表格元素');
      }
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
  overflow-x: auto;
  overflow-y: auto;
}
ul{ width: 500px;}
li{
  line-height: 1.75;
}

</style>
