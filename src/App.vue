<template>
  <div id="app">
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
    </div>
    <input type="button" class="btn" value="免费领取" @click="handleClick">
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      tel: ''
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
</style>
