<template>
  <div class="home">
    <Header />
    <BookSearcher @getBooks.prevent="getBooks"></BookSearcher>
    <BooksHolder :books="books"></BooksHolder>
  </div>
</template>

<script>
import axios from "axios";

import BooksHolder from "../components/home/BookskHolder.vue";
import BookSearcher from "../components/home/BookSearcher";
import Header from "../components/layout/Header.vue";

export default {
  name: "Home",
  components: {
    BooksHolder,
    BookSearcher,
    Header,
  },
  data() {
    return {
      token: "none",
      books: [],
    };
  },
  mounted: function() {
    this.getToken(), this.getBooks({ query: "" });
  },
  methods: {
    getToken: function() {
      this.token = localStorage.getItem("token");
    },
    getBooks: function(data) {
      axios
        .get("http://127.0.0.1:8000/api/book_searcher/", {
          params: {
            title: data["query"],
          },
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$router.replace({ name: "Login" });
        });
    },
  },
};
</script>
