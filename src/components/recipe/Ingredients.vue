<template>
  <div class="ingredients">
    <p class="ingredients-title bold-text">Ingredients</p>
    <p>for 9 servings</p>
    <div class="ingredients-block">
      <p class="ingredients-subtitle bold-text">Starter</p>
      <ul>
        <li>3 tablespoons water</li>
        <li>3 tablespoons water</li>
        <li>3 tablespoons water</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: Object,
  },
};
</script>
<style scoped>
.ingredients-title {
  font-size: 1.5rem;
}
.ingredients-block {
  margin-top: 1rem;
}
.ingredients {
  line-height: 2rem;
}
</style>