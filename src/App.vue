<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/default.css";
// @import "./assets/grid-layout.css";

:root {
  --primary-color: red;
  --primary-dark-color: rgba(255, 0, 0, 0.5);
  --text-color: black;
  --label-color: rgb(150, 150, 150);
  --animate-duration: 0.3s;

  --is-size-1: 3rem;
  --is-size-2: 2.5rem;
  --is-size-3: 2rem;
  --is-size-4: 1.5rem;
  --is-size-5: 1rem;
  --is-size-6: 0.75rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
