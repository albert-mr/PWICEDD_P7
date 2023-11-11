
<script setup>
import TopBar from '../Components/NavBar.vue';
</script>
<template>
  <TopBar />
  <div class="GamesMain-container">
    
    <div class="input-container">
      <div class="text-label">Search Game</div>
      <input type="text" id="Game id" placeholder="Game id" class="input" />
    </div>
    <button class="ranking-button" @click="handleRanking">All Games</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleRanking() {
      this.$router.push('/storesell');
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.GamesMain-container {
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}

.input, .ranking-button {
  width: 100%;
  height: 6%;
  background: #D9D9D9;
  border: 3px solid black;
  border-radius: 10px;
  color: #1E1E1E;
  font-size: 2vw;
  margin: 5% 0;
  padding: 5px;
  font-family: 'Sigmar One', sans-serif;
}

.ranking-button {
  width: 30%;
  border-radius: 36px;
  text-align: center;
  margin: 5% 10%;
  cursor: pointer;
}

.text-label {
  font-size: 3vw;
  color: #000000;
  margin-bottom: 5%;
}
</style>
