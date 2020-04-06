<template>
  <div class="home">
    <Header />
    <BookSearcher></BookSearcher>
    <BooksHolder></BooksHolder>
  </div>
</template>

<script>
import BooksHolder from '../components/home/BookskHolder.vue'
import BookSearcher from "../components/home/BookSearcher";
import Header from '../components/layout/Header.vue'

export default {
  name: 'Home',
  components: {
    BooksHolder,
    BookSearcher,
    Header,
  },
  data() {
    return {
      token: "none"
    }
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
