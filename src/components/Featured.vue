<template>
  <div class="featured container">
    <div class="columns">
      <div class="column has-text-left is-two-thirds">
        <span class="highlight-text">TRY THIS</span>
        <br class="try-this-space" />

        <div class="huge-text-container">
          <span
            class="highlight-text huge-text hanging-indent"
          >Pizza with a lot of cheese, over 4000 calories</span>
        </div>
      </div>
      <div class="column">
        <img class="big-image" src="images/recipes/recipe1.jpg" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.hanging-indent {
  text-indent: 2rem;
  margin-left: -2rem;
}
.highlight-text {
  background-color: yellow;

  font-family: "Raleway", sans-serif;
  padding: 0.5rem;
}
.try-this-space {
  margin-bottom: 1.5rem;
}
.huge-text-container {
  margin-left: 2rem;
}
.huge-text {
  font-size: 4rem;
}
.big-image {
  width: 24rem;
  height: 14rem;
}
.featured {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>