<template>
  <div id="app">
    <div class="main">
      <div class="ctbox">
        <img src="./assets/logo.png" alt="">
        <h3>注册登陆</h3>
        <input type="text" class="inputbox">
      </div>
      <button class="btnBox">免费领取</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      tel: '',
      index: 0
    };
  },
  methods: {
    handleClick() {
      this.$refs.myInput.focus();
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
  height: 100vh;
}
.ctbox{
  padding-top: 120px;
}
.inputbox{
  height: 40px;
}
.btnBox{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
}
</style>
