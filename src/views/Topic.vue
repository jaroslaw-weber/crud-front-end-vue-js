<template>
  <div class="topic">
    <Header />
    <div class="content-wrap content-width">
      <div class="has-text-left">
        <div class="topic-and-count">
          <p class="topic-title bold-text">{{this.topic.title}}</p>
          <p class="topic-count">{{this.recipesCount}} recipes</p>
        </div>
        <p class="topic-description">{{this.topic.description}}</p>
      </div>
      <CardList :listData="recipes" />

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
import Topic from "@/classes/Topic";
import Recipe from "@/classes/Recipe";

//home page
export default {
  name: "Home",
  components: {
    Header,
    CardList,
    Newsletter,
    Footer,
  },
  methods: {
    //on show more button
    showMore: function () {
      for (let index = 0; index < 16; index++) {
        this.recipes.push(Recipe.getDummy());
      }
    },
    reloadData: function () {
      //adding fake data
      //todo: request data from server
      this.recipes = [];
      for (let index = 0; index < 16; index++) {
        this.recipes.push(Recipe.getDummy());
      }
      this.topic = Topic.getDummy();
      this.topic.title = this.$route.params.title.replace("-", " ");
      this.recipesCount = 1234;
    },
  },
  data: function () {
    return {
      topic: undefined,
      //list of recipes for this topic
      recipes: [],
      recipesCount: 0,
    };
  },
  computed: {
    uri: function () {
      return this.$route.params.title;
    },
  },
  mounted: function () {
    this.reloadData();
  },
  watch: {
    uri: function () {
      this.reloadData();
    },
  },
};
</script>
<style>
.show-more {
  margin: 2rem;
}
.topic-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
.topic-description {
  font-size: 1.5rem;
}
.topic-and-count {
  display: flex;
}
.topic-count {
  margin-top: auto; /* move text to bottom*/
  margin-bottom: auto;
}
</style>