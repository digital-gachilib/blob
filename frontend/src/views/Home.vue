<template>
  <div class="home">
    <BooksHolder></BooksHolder>
  </div>
</template>

<script>
import BooksHolder from '../components/home/BookskHolder.vue'

export default {
  name: 'Home',
  data() {
    return {
      token: "no token"
    }
  },
  components: {
    BooksHolder,
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
