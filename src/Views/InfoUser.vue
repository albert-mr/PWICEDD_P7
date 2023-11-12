<script setup>
import TopBar from '../Components/NavBar.vue';
</script>

<template>
  <TopBar />
  <div class="container-horizontal">
    <div class="container-vertical-1">
      <button class="profile-button">
        <img src="@/assets/profile.png" alt="Profile Image" />
      </button>
      <div class="text4">Username</div>
      <div class="text3">Level:</div>
      <div class="text3">XP:</div>
      <div class="text3">Coins:</div>
      <button class="button2"  @click="handleSignUp">Delete User</button>

    </div>
    <div class="container-vertical-2">
      <div class="text1">ATTACKS</div>
      <button class="button"  @click="handleBackpack">BACKPACKED</button>
      <button class="equiped">EQUIPED</button>
      <div class="text2">Name</div>
      <div class="text2">Name</div>
      <div class="text2">Name</div>
    </div>
  
  </div>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      this.$router.push('/signup');
    },
    handleBackpack() {
      this.$router.push('/backpack');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light|Sigmar+One&display=swap');

@media only screen and (max-width: 600px) {
  .container-horizontal {
    width: 120%;
    height: 120%;
    background: #4056A8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.container-horizontal {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container-vertical-1 {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.container-vertical-2 {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.text1 {
  color: white;
  font-size: 4vw;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 400;
}

.text2 {
  color: #1E1E1E;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  font-weight: 400;
}

.text3 {
  color: #1E1E1E;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  font-weight: 400;
  margin-left: 20%;
  margin-top: 4%;
}

.text4 {
  color: #1E1E1E;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  font-weight: 400;
  margin-left: 40%;
  margin-bottom: 6%;
}

.button {
  width: 50%;
  height: 6%;
  position: relative;
  background: #D9D9D9;
  border-radius: 36px;
  border: 3px black solid;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  color: #1E1E1E;
  margin: 5% 0;

  cursor: pointer;
}



.button2 {
  width: 50%;
  height: 6%;
  position: relative;
  background: #D9D9D9;
  border-radius: 36px;
  border: 3px black solid;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  color: #1E1E1E;
  margin: 5% 0;
  margin-left: 75%;

  cursor: pointer;
}

.equiped {
  width: 50%;
  height: 7%;
  position: relative;
  background: #D9D9D9;
  border-radius: 12px;
  border: 3px black solid;
  font-size: 2vw;
  font-family: 'Sigmar One', sans-serif;
  color: #1E1E1E;
  margin: 5% 0;

  cursor: pointer;
}

.profile-button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  
    .profile-button img {
      width: 19vw;
      height: auto;
      cursor: pointer;
      margin-bottom: 5%;
      margin-left: 4.3%; 
    }
</style>
