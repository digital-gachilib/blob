<template>
  <div class="content">
    <v-container style="width: 60%" class="pt-9">
      <h1>{{ book.title }}</h1>
      <h2>Author: {{ book.author.name + " " + book.author.surname }}</h2>
      <h2>Description:</h2>
      <p>{{ book.description }}</p>
      <DownloadButton />
    </v-container>
  </div>
</template>
<script>
import DownloadButton from "./DownloadButton";
// import BookPreview from "./BookPreview"

export default {
  name: "Content",
  components: { DownloadButton },
  props: ["book"],
};
</script>

<style scoped>
.content {
  width: auto;
  padding: 20px;
  overflow: hidden;
}

.content h3,
.content p {
  display: block;
  margin: 2px 0 0 0;
}

.img {
  margin-right: 15px;
  float: left;
}
</style>
