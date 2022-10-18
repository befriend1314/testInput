<template>
  <div id="app">
    <div class="main">
      <ul>
        <li v-for="i in 50" :key="i">美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表美云销 版本列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
