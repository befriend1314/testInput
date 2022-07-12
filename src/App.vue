<template>
  <div id="app">
    <div>
      <button @click="index = 0">布局1</button>
      <button @click="index = 1">布局2</button>
      <button @click="index = 2">布局3</button>
    </div>
    <div  v-if="index === 0">
      <div>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <p>床前明月光</p>
        <div class="inputBox">
          <input type="text" ref="myInput" v-model="tel">
        </div>
      </div>
      <input type="button" class="btn" value="免费领取" @click="handleClick">
    </div>
    <div v-if="index === 1">
      <div class="fixedbox">
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <p>疑是地上霜</p>
        <div class="inputBox">
          <input type="text" ref="myInput" v-model="tel">
        </div>
      </div>
      <input type="button" class="btn fixedbtn" value="免费领取" @click="handleClick">
    </div>
    <div v-if="index === 2">
      <div class="inputBox fixedInput">
          <input type="text" ref="myInput" v-model="tel">
        </div>
        <input type="button" class="btn fixedbtn" value="免费领取" @click="handleClick">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  height: 40px;
  border-radius: 5px;
}
.btn{
  display: block;
  margin: 0 auto;
  height: 45px;
  width: 90%;
}
.fixedbox{
  padding-bottom: 40px;
}
.fixedbtn{
  position: fixed;
  bottom: 0;
  left: 0;
}
.fixedInput{
  position: fixed;
  width: 100%;
  bottom: 60px;
  left: 0;
}
</style>
