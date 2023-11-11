<script setup>
import TopBar from '../Components/NavBar.vue';
</script>

<template>
  <TopBar />
  <div class="CreateJoin-container">
    <button class="play-button" @click="handleJoin">Join Game</button>
    <button class="play-button" @click="handleCreate">Create Game</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleCreate() {
      this.$router.push('/create-game');
    },
    handleJoin() {
      this.$router.push('/join-game');
    },
  },
};
</script>

<style>
.CreateJoin-container {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-button {
  width: 25%;
  border-radius: 36px;
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 60px;
  font-family: 'Sigmar One', sans-serif;
  font-weight: 400;
  border: 10px solid black;
  margin: 100px;
}

.play-button {
  background-color: #7F86CA;
}

.play-button:hover {
  background-color: #d9d9d9;
  color: black;
}
</style>
