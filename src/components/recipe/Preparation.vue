<template>
  <div class="preparation">
    <p class="preparation-title bold-text">Preparation</p>
    <div class="preparation-block">
      <div class="preparation-step">
        <div>1.</div>
        <div>Make the starter: In a small pot over low heat, combine the water, milk, and flour. Stir continuously until a loose paste forms.</div>
      </div>
      <div class="preparation-step">
        <div>2.</div>
        <div>Make the starter: In a small pot over low heat, combine the water, milk, and flour. Stir continuously until a loose paste forms.</div>
      </div>
      <div class="preparation-step">
        <div>3.</div>
        <div>Make the starter: In a small pot over low heat, combine the water, milk, and flour. Stir continuously until a loose paste forms.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preparation: Object,
  },
};
</script>
<style scoped>
.preparation-title {
  font-size: 1.5rem;
}
.preparation-block {
  margin-top: 1rem;
}
.preparation-step {
  margin-top: 0.8rem;
  display: flex;
}
.preparation {
}
</style>