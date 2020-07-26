<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* below are classes that are reused throughout the app*/

.content-wrap {
  margin-top: 7rem !important;
  margin: auto;
}

@media (max-width: 75rem) {
  .content-width {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.content-width {
  max-width: 75rem;
}

.bold-text {
  font-family: "Raleway", sans-serif;
}
</style>
