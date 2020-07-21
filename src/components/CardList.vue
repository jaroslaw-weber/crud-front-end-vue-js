<template>
  <div class="card-list">
    <p>{{title}}</p>

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
    Card
  },
  props: {
    title: String,
    listData: Array // arr of Recipe
  }
};
</script>
<style scoped>
.card-list {
  margin: 3rem;
  text-align: left;
}
.grid {
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
}
@media (max-width: 800px) {
  .grid {
    grid-template-columns: 45% 45%;
  }
}
@media (min-width: 800px) {
  .grid {
    grid-template-columns: 20% 20% 20% 20%;
  }
}
.grid-element {
}
</style>