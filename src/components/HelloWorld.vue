<template>
  <div class="text-container">
    <div class="text1">GET SET FOR THE ACTION</div>
    <div class="text2">TRAKIA</div>
    <button class="button" @click="handleSignUp">Sign Up</button>
    <button class="button" @click="handleLogIn">Log In</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      // Add your SignUp logic here
    },
    handleLogIn() {
      // Add your Log In logic here
    },
  },
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  text-align: center;
}

.text1 {
  color: white;
  font-size: 4vw;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 400;
}

.text2 {
  color: #1E1E1E;
  font-size: 4vw;
  font-family: 'Sigmar One', sans-serif;
  font-weight: 400;
}

.button {
  width: 30%;
  height: 6%;
  position: relative;
  background: #D9D9D9;
  border-radius: 36px;
  border: 3px black solid;
  font-size: 2vw;
  color: #1E1E1E;
  margin: 5% 0;
}
</style>
