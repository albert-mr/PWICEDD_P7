<template>
    <div class="main-container">
      <div class="background">
        <div class="buttons-container">
          <button class="action-button">TRAKIA</button>
          <button class="text-button rankings">RANKING</button>
          <button class="text-button games">GAMES</button>
          <button class="action-button play">PLAY</button>
          <div class="store-button">
            <button class="action-button store">STORE</button>
          </div>
        </div>
        <img class="logo-image" src="https://via.placeholder.com/122x122" alt="Logo Image" />
        <img class="rotate-image" src="https://via.placeholder.com/227x238" alt="Rotated Image" />
      </div>
    </div>
  </template>

  
  <style scoped>
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
  
  .buttons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .text-button, .action-button {
    font-family: 'Sigmar One', cursive;
    font-weight: 400;
  }
  
  .text-button {
    color: #1E1E1E;
    font-size: 48px;
    word-wrap: break-word;
  }
  
  .action-button {
    color: white;
    font-size: 96px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .action-button.store {
    background: #D9D9D9;
    border-radius: 15px;
    padding: 10px 20px;
  }
  
  .logo-image, .rotate-image {
    position: absolute;
  }
  
  .logo-image {
    width: 122px;
    height: 122px;
    left: 1295px;
    top: 0px;
  }
  
  .rotate-image {
    width: 227px;
    height: 238px;
    left: 941.36px;
    top: 392px;
    transform: rotate(166.11deg);
    transform-origin: 0 0;
    border-radius: 87px;
  }
  </style>
  