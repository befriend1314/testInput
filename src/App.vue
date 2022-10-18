<template>
  <div id="app">
    <div class="main">
      <ul>
        <li v-for="i in 50" :key="i">{{i}}</li>
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
}
li{
  line-height: 1.75;
}

</style>
