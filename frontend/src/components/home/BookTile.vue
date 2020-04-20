<template>
  <v-card elevation="3" class="ma-3 pa-6">
    <v-card-title>{{ book.title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text style="-webkit-line-clamp: 3">{{ description }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn v-on:click="read()" text>Read</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BookTile",
  props: ["book"],
  methods: {
    read() {
      this.$router.onReady(() => {
        this.$router.push({
          name: "book_page",
          params: { book_id: this.book.id },
        });
      });
    },
  },
  computed: {
    description() {
      return this.book.description.slice(0, 100) + "..";
    },
  },
};
</script>
