<template>
    <header class="top-bar">
      TRAKIA
      <div class="buttons">
        <button class="header-button" @click="handleGame">Games</button>
        <button class="header-button" @click="handleRanking">Ranking</button>
        <button class="header-button">Store</button>
        <button class="profile-button">
          <img src="../assets/profile.png" alt="Profile Image" />
        </button>
      </div>
    </header>
  </template>

<script>
export default {
  methods: {
    handleRanking() {
      this.$router.push('/search-ranking');
    },
    handleGame() {
      this.$router.push('/search-game');
    },
  },
};
</script>
  
  <style scoped>
    .top-bar {
      width: 100%;
      background: #D9D9D9;
      font-family: 'Sigmar One', sans-serif;
      border-bottom: 7px solid black;
      font-size: 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2%;
    }
  
    .buttons {
      display: flex;
      align-items: center;
    }
  
    .header-button {
      background: transparent;
      color: black;
      font-family: 'Sigmar One', sans-serif;
      font-size: 3vw;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      margin-left: 10px;
      margin-right: 10px;
    }
  
    .profile-button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  
    .profile-button img {
      width: 5vw;
      height: auto;
      cursor: pointer;
    }
  
    .header-button:hover {
      color: #4056A8;
    }
  
    .main-container {
      width: 100%;
      height: 100%;
      position: relative;
      background: #4056A8;
    }
  
    .background {
      position: absolute;
      background: #7F86CA;
    }
  </style>
  