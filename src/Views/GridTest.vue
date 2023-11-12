<script setup>
import TopBar from '../Components/NavBar.vue';
import Grid from '../Components/GridPlay.vue';
</script>
<template>
  <TopBar />
  <div class="Grid-container">
  <Grid />
  </div> 
</template>

<style scoped>

.Grid-container {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
    .Grid-container {
    width: 120%;
    height: 120%;
    background: #4056A8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>