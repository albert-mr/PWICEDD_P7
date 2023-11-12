<template>
  <header class="top-bar">
    <button class="header-button" @click="handleMain">TRAKIA</button>
    <div class="buttons">
      <button class="header-button" @click="handleGame">Games</button>
      <button class="header-button" @click="handleRanking">Ranking</button>
      <button class="header-button" @click="toggleStoreMenu">Store</button>
      <button class="profile-button">
        <img src="@/assets/profile.png" alt="Profile Image" />
      </button>
    </div>
    <div v-if="showStoreMenu" class="store-menu">
      <button class="menu-item" @click="handleSell">Sell</button>
      <button class="menu-item" @click="handleBuy">Buy</button>
      <button class="menu-item" @click="handleCreate">Create</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showStoreMenu: false,
    };
  },
  methods: {
    toggleStoreMenu() {
      this.showStoreMenu = !this.showStoreMenu;
    },
    handleRanking() {
      this.$router.push('/search-ranking');
    },
    handleGame() {
      this.$router.push('/search-game');
    },
    handleMain() {
      this.$router.push('/main');
    },
    handleBuy() {
      this.$router.push('/store-buy');
    },
    handleSell() {
      this.$router.push('/store-sell');
    },
    handleCreate() {
      this.$router.push('/store-create');
    },
  },
};
</script>
  
  <style scoped>
    .top-bar {
      width: 100vw;
      height: 10vh;
      background: #D9D9D9;
      font-family: 'Sigmar One', sans-serif;
      border-bottom: 7px solid black;
      font-size: 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
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

    .store-menu {
    position: absolute;
    top: 0;
    right: 0;
    background: #D9D9D9;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 9%;
    margin-right: 1%;
  }

  .menu-item {
    background: transparent;
    color: black;
    font-family: 'Sigmar One', sans-serif;
    font-size: 3vw;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .menu-item:hover {
    background: #4056A8;
    color: white;
  }
  </style>
  