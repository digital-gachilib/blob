<template>
  <div class="home">
    <BooksHolder></BooksHolder>
    <BookSearcher></BookSearcher>
  </div>
</template>

<script>
import BooksHolder from '../components/home/BookskHolder.vue'
import BookSearcher from "../components/home/BookSearcher";

export default {
  name: 'Home',
  data() {
    return {
      token: "no token"
    }
  },
  components: {
    BooksHolder,
    BookSearcher
  },
  mounted: function() {
    this.getToken()
  },
  methods: {
    getToken: function() {
      this.token = localStorage.getItem("token")
    }
  }
}
</script>
