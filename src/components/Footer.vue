<template>
  <footer class="footer">
    <div class="content-width footer-content">
      <div></div>
      <div class="privacy-policy-etc fat-font">
        <a>Privacy Policy</a>
        <br />
        <a>User Agreement</a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: #222;
  color: white;
  height: 3rem;
}
.footer-content {
  display: flex;
  margin: auto;
}
.privacy-policy-etc {
  margin-left: auto;
  text-align: right;
}
a {
  color: white;
}
a:hover {
  color: lightgray;
}
.fat-font {
  font-family: "Raleway", sans-serif;
}
</style>