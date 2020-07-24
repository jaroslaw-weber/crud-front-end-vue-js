<template>
  <div class="home">
    <Header />
    <div class="content-wrap content-width">
      <Featured />
      <CardList title="trending recipes" :listData="trending" />
      <CardList title="recent recipes" :listData="recent" />
      <b-button class="show-more" @click="showMore()">Show more</b-button>
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";
import Recipe from "@/classes/Recipe";
import Featured from "@/components/Featured.vue";

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
    showMore: function () {
      for (let index = 0; index < 16; index++) {
        this.recent.push(Recipe.getDummy());
      }
    },
  },
  data: function () {
    return {
      trending: [],
      recent: [],
    };
  },
  mounted: function () {
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
.content-wrap {
  margin-top: 7rem !important;
  margin: auto;
}

.content-width {
  max-width: 75rem;
}
.show-more {
  margin: 2rem;
}
</style>