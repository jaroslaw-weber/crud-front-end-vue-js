<template>
  <div class="card-list is-centered">
    <p class="list-name">{{titleFormatted}}</p>

    <div class="grid">
      <div v-for="elementData in listData" :key="elementData.id">
        <div class="grid-element">
          <Card :cardData="elementData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    title: String,
    listData: Array, // arr of Recipe
  },
  computed: {
    titleFormatted: function () {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style scoped>
.list-name {
  font-family: "Raleway", sans-serif;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #f43192;
}
.card-list {
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: left;
}
.grid {
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
}
@media (max-width: 800px) {
  .grid {
    grid-template-columns: 48% 48%;
  }
}
@media (min-width: 800px) {
  .grid {
    grid-template-columns: 24% 24% 24% 24%;
  }
}
.grid-element {
}
</style>