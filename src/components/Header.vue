<template>
  <div class="header bold-text">
    <div class="header-bar">
      <div class="header-item-container content-width">
        <router-link :to="'/'" class="header-item">Home</router-link>
        <div class="header-item" @click="showDrawer = !showDrawer">
          <p>
            Recipes
            <b-icon v-if="showDrawer" class="header-small-icon" icon="chevron-up" pack="fa" />
            <b-icon v-else class="header-small-icon" icon="chevron-down" pack="fa" />
          </p>
        </div>
        <router-link
          :to="{name:'topic', params:{title:'quarantine-cooking'}}"
          class="header-item is-hidden-touch"
        >Quarantine Cooking</router-link>
        <!--
        <div class="header-item is-hidden-touch">Shop</div>-->
        <div class="header-item is-hidden-touch search-container">
          <SearchBar />
        </div>
      </div>
    </div>
    <HeaderDrawer :drawerData="drawerData" v-if="showDrawer" />
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
import HeaderDrawer from "./HeaderDrawer";

import Topic from "@/classes/Topic";

export default {
  components: { SearchBar, HeaderDrawer },
  data: function () {
    return {
      showDrawer: false,
      drawerData: Object,
    };
  },
  methods: {},
  mounted: function () {
    //todo: server request
    this.drawerData = {};
    let category = {
      name: "easy",
      topics: [Topic.getDummy(), Topic.getDummy(), Topic.getDummy()],
    };
    let category2 = {
      name: "diets",
      topics: [Topic.getDummy(), Topic.getDummy(), Topic.getDummy()],
    };
    let category3 = {
      name: "occasions",
      topics: [Topic.getDummy(), Topic.getDummy(), Topic.getDummy()],
    };
    this.drawerData.categories = [category, category2, category3];
  },
  computed: {},
};
</script>

<style scoped>
.header-bar {
  /*sticky header*/
  position: fixed;
  top: 0;
  z-index: 1000; /*move header to the front, without it header is under images*/

  background-color: #18c1ee;
  font-size: 1.4rem;
  width: 100%;
  height: 3.5rem;
  color: white;
}
.header-item-container {
  display: flex;
  height: 100%;
  margin: auto; /*center horizontally*/
}

.header-item-container div:last-child {
  margin-left: auto; /*move search bar to the right*/
}
.search-container {
  margin-right: 1rem;
}
.header-item {
  vertical-align: middle;
  padding-top: 0.6rem; /*todo: vertical centering*/
  padding-left: 2rem;
  height: 100%;
}
a {
  color: white;
}
a:hover {
  color: yellow;
}
.header-item:hover {
  color: yellow;
}

.header-small-icon {
  font-size: 1rem;
}
</style>