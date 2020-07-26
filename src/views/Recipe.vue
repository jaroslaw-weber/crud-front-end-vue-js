<template>
  <div class="home">
    <Header />
    <div class="content-wrap content-width has-text-left">
      <div class="narrow">
        <p class="recipe-title bold-text">{{recipe.title}}</p>
        <p class="recipe-description">{{recipe.description}}</p>
        <p class="recipe-author bold-text">{{recipe.author}}</p>
        <div class="recipe-sns">
          <button class="button recipe-sns-item">
            <b-icon icon="facebook" pack="fa"></b-icon>
          </button>
          <button class="button recipe-sns-item">
            <b-icon icon="pinterest" pack="fa"></b-icon>
          </button>
          <button class="button recipe-sns-item">
            <b-icon icon="twitter" pack="fa"></b-icon>
          </button>
        </div>
        <img :src="recipe.image" />
        <div class="time">
          <div class="time-item">
            <p class="bold-text">total time</p>
            <p>{{recipe.time.totalTime}}</p>
          </div>
          <div class="time-item">
            <p class="bold-text">prep time</p>
            <p>{{recipe.time.prepTime}}</p>
          </div>
          <div class="time-item">
            <p class="bold-text">cook time</p>
            <p>{{recipe.time.cookTime}}</p>
          </div>
        </div>
        <div class="preparation-and-ingredients">
          <div class="preparation-ingredients-column">
            <Ingredients :ingredients="recipe.ingredients" />
          </div>
          <div class="preparation-ingredients-column">
            <Preparation :preparation="recipe.preparation" />
          </div>
        </div>
        <div>nutrition</div>
      </div>
      <div>related recipes</div>
      <div>submit recipe</div>
      <div>comments</div>
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";
import Recipe from "@/classes/Recipe";
import Ingredients from "@/components/recipe/Ingredients.vue";
import Preparation from "@/components/recipe/Preparation.vue";

//single recipe page
export default {
  name: "Home",
  components: {
    Header,
    Newsletter,
    Footer,
    Ingredients,
    Preparation,
  },
  methods: {},
  data: function () {
    return {
      //recipe data (title, description etc)
      recipe: Object,
    };
  },

  mounted: function () {
    this.recipe = Recipe.getDummy();
  },
};
</script>
<style>
.narrow {
  max-width: 50rem;
}
.recipe-title {
  font-size: 3rem;
}
.recipe-author {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.recipe-description {
  font-size: 1.5rem;
  line-height: 1.7rem;
}
.recipe-sns {
  display: flex;
  margin-bottom: 2rem;
}
.recipe-sns-item {
  margin-right: 1rem;
}
.time {
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.time-item {
  margin-right: 1rem;
}
.time-item:not(:first-child) {
  border-left: 2px solid rgb(233, 232, 232); /*vertical line between items*/
  padding-left: 1rem;
}

.preparation-and-ingredients {
  display: flex;
}
.preparation-ingredients-column {
  flex: 2 3;
  padding-right: 1rem;
}
</style>