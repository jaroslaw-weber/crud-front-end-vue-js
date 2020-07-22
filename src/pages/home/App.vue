<template>
  <div id="app">
    <Header />
    <div class="list-container">
      <Featured />
      <CardList title="trending recipes" :listData="trending" />
      <CardList title="recent recipes" :listData="recent" />
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from "./../../components/Header.vue";
import CardList from "./../../components/CardList.vue";
import Newsletter from "../../components/Newsletter.vue";
import Footer from "../../components/Footer.vue";
import Recipe from "../../classes/Recipe";
import Featured from "../../components/Featured.vue";

export default {
  name: "App",
  components: {
    Header,
    CardList,
    Newsletter,
    Footer,
    Featured
  },
  data: function() {
    return {
      trending: [],
      recent: []
    };
  },
  mounted: function() {
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.trending.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
    this.recent.push(Recipe.getDummy());
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.list-container {
  margin-top: 7rem;
}
</style>
