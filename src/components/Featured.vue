<template>
  <div class="featured container bold-text">
    <div class="is-hidden-touch">
      <div class="featured-container-desktop">
        <div class="has-text-left featured-item-desktop">
          <span class="highlight-text">TRY THIS</span>
          <br class="try-this-space" />

          <div class="huge-text-container">
            <span class="highlight-text huge-text hanging-indent">{{recipe.title}}</span>
          </div>
        </div>
        <div class="featured-item-desktop">
          <img class="big-image" :src="recipe.image" />
        </div>
      </div>
    </div>
    <div class="is-hidden-desktop">
      <img class="big-image" :src="recipe.image" />
      <br />
      <span class="highlight-text hanging-indent text-inside-image">{{recipe.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>
<style scoped>
.hanging-indent {
  text-indent: 2rem;
  margin-left: -2rem;
}
.highlight-text {
  background-color: yellow;

  padding: 0.5rem;
}
.try-this-space {
  margin-bottom: 1.5rem;
}
.huge-text-container {
  margin-left: 2rem;
}
.huge-text {
  font-size: 3rem;
}
.big-image {
}
.featured {
  margin-left: 3rem;
  margin-right: 3rem;
}
.featured-container-desktop {
  display: flex;
}
.featured-item-desktop {
  flex: 2 5;
}
.featured-item-desktop:first-of-type {
  /*text going over image effect*/
  margin-right: -5rem;
  z-index: 900;
}

.text-inside-image {
  margin: 1rem;
  font-size: 2rem;
}
</style>