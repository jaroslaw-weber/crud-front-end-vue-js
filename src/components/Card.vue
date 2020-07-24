<template>
  <a :href="cardData.uri">
    <div class="card">
      <div class="card-image-parent">
        <img class="card-image" :src="cardData.image" />
      </div>
    </div>
    <p class="card-title">{{cardData.title}}</p>
    <!-- <p>Presented by {{cardData.author}}</p>-->
  </a>
</template>
<script>
export default {
  props: {
    cardData: Object,
  },
};
</script>
<style scoped>
.card-image {
  border-radius: 2%;

  /*animation*/
  transform-origin: 50% 50%;
  transition: 0.2s ease-in-out;

  /*stuff necessary to zoom animation effect*/
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  /* don't stretch images */
  object-fit: cover;
}
.card-image-parent {
  position: relative;
  overflow: hidden; /*part of animation effect*/
  width: 100%;
  height: auto;
  padding-top: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.card-image:hover {
  transform: scale(1.1);
}
.card-title {
  font-family: "Raleway", sans-serif;
}
a:link {
  color: black;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: #18c1ee;
}

/* selected link */
a:active {
  color: #18c1ee;
}
</style>