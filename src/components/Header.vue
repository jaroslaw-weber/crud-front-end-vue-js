<template>
  <div class="header">
    <div class="header-item-container columns">
      <div class="column header-item">Recipes</div>
      <div class="column header-item">Quarantine Cooking</div>
      <div class="column header-item">Shop</div>
      <div class="column header-item search-container">
        <SearchBar />
      </div>
    </div>
  </div>
  <!--
  <b-navbar class="header">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#" class="header-item">Home</b-navbar-item>
      <b-navbar-item href="#" class="header-item">Documentation</b-navbar-item>
      <b-navbar-dropdown class="header-item" label="Info">
        <b-navbar-item href="#">About</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
  -->
</template>
<script>
import SearchBar from "./SearchBar";
export default {
  components: { SearchBar }
};
</script>

<style scoped>
.header {
  /*sticky header*/
  position: fixed;
  top: 0;
  z-index: 1000; /*move header to the front, without it header is under images*/

  background-color: #18c1ee;
  height: 2rem;
  font-family: "Raleway", sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 3.5rem;
  color: white;
}
.header-item-container {
}
.search-container {
  margin-right: 1rem;
}
.header-item {
  padding-top: 1.5rem;
}
.header-item:hover {
  color: yellow;
}
</style>