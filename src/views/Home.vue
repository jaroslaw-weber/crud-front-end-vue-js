<template>
  <div class="home">
    <Header />
    <div class="content-wrap content-width">
      <Featured :recipe="featured" />
      <CardList title="trending recipes" :listData="trending" />
      <CardList title="recent recipes" :listData="recent" />
      <b-button class="show-more" @click="showMore()">Show more</b-button>
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";
import Recipe from "@/classes/Recipe";
import Featured from "@/components/Featured.vue";

//home page
export default {
  name: "Home",
  components: {
    Header,
    CardList,
    Newsletter,
    Footer,
    Featured,
  },
  methods: {
    //on show more button
    showMore: function () {
      for (let index = 0; index < 16; index++) {
        this.recent.push(Recipe.getDummy());
      }
    },
  },
  data: function () {
    return {
      featured: Recipe.getDummy(),
      //trending recipes list
      trending: [],
      //recently added recipies
      recent: [],
    };
  },
  mounted: function () {
    //adding fake data
    //todo: request data from server
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
  },
};
</script>
<style>
.show-more {
  margin: 2rem;
}
</style>