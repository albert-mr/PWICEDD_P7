<template>
  <div class="login-container">
    <header class="top-bar">TRAKIA</header>
    <div class="input-container">
      <input type="text" id="username" placeholder="Username" class="input" />
      <input type="password" id="password" placeholder="Password" class="input" />
    </div>
    <button class="login-button" @click="handleSignUp">Sign Up</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      this.$router.push('/main');
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 600px) {
  .login-container {
  min-height: 120%;
  width: 120%;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Sigmar One', sans-serif;
}
}

.login-container {
  min-height: 100vh;
  background: #4056A8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Sigmar One', sans-serif;
}

.top-bar {
  height: 10%;
  background: #D9D9D9;
  border-bottom: 7px solid black;
  text-align: center;
  color: #1E1E1E;
  font-size: 3vw;
  display: flex;
  align-items: center;
  padding: 0 2%;
}

.input-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}

.input, .login-button {
  width: 100%;
  height: 6%;
  background: #D9D9D9;
  border: 3px solid black;
  border-radius: 10px;
  color: #1E1E1E;
  font-size: 2vw;
  margin: 5% 0;
  padding: 5px;
}

.login-button {
  width: 30%;
  border-radius: 36px;
  text-align: center;
  margin: 5% 10%;
  cursor: pointer;
}
</style>
