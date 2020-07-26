<template>
  <div class="header-drawer has-text-left" v-if="drawerData">
    <div class="header-drawer-topics-container content-width">
      <div v-for="categoryData in drawerData.categories" :key="categoryData.name">
        <div class="header-topic-category">
          <p class="header-category-title">{{categoryData.name}}</p>
          <div v-for="topic in categoryData.topics" :key="topic.uri">
            <router-link :to="{name:'topic', params:{title:topic.uri}}">{{topic.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drawerData: [],
  },
};
</script>
<style scoped>
.header-drawer {
  /*sticky header*/
  position: fixed;
  top: 3.5rem;
  z-index: 990; /*move header to the front, without it header is under images*/

  background-color: white;
  font-size: 1rem;
  width: 100%;
  height: 12rem;
}
.header-drawer-topics-container {
  display: flex;
  margin: auto;
  line-height: 2rem;
}
.header-topic-category {
  padding: 1rem;
}

a {
  color: #18c1ee;
}
a:hover {
  color: #1181a0;
}
</style>