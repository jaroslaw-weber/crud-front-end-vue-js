<template>
  <div>
    <div class>
      <div class="card-image-parent">
        <img class="card-image" :src="cardData.image" />
      </div>
    </div>
    <p>{{cardData.title}}</p>
    <p>Presented by {{cardData.author}}</p>
  </div>
</template>
<script>
export default {
  props: {
    cardData: Object
  }
};
</script>
<style scoped>
.card-image {
  border-radius: 2%;
  transform-origin: 50% 50%;
  transition: 0.2s ease-in-out;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.card-image-parent {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  padding-top: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.card-image:hover {
  transform: scale(1.1);
}
</style>