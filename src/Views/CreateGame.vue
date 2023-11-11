
<script setup>
import TopBar from '../Components/NavBar.vue';
</script>
<template>
  <TopBar />
  <div class="create-container">
    <div class="text3">CREATE GAME</div>
    <div class="text2">Nº rows/Columns [x,y]</div>
    <div class="input-container">
      <input type="text" id="Directions" placeholder="Directions" class="input" />
      <input type="text" id="Players HP" placeholder="Players HP" class="input" />
    </div>
    <button class="create-button" @click="handleCreate">Create</button>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.text2{
    color: #1E1E1E;
    font-family: Sigmar One;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.text3 {
    color: white;
    font-size: 4vw;
    font-family: 'Shadows Into Light', cursive;
    font-weight: 400;
    margin-bottom: 0;
  }

.create-container {
  min-height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Sigmar One', sans-serif;
}

.input-container {
  font-family: 'Sigmar One', sans-serif;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}

.input, .create-button {
  width: 100%;
  height: 6%;
  background: #D9D9D9;
  border: 3px solid black;
  border-radius: 10px;
  color: #1E1E1E;
  font-size: 2vw;
  margin: 5% 0;
  font-family: 'Sigmar One', sans-serif;
  padding: 5px;
}

.create-button {
  width: 30%;
  border-radius: 36px;
  text-align: center;
  margin: 5% 10%;
  cursor: pointer;
}
</style>
