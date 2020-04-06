<template>
    <v-app>
    <Header></Header>
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
=======
    <br>
>>>>>>> 16a7c7688ef2f0f0452c111f8ad62366d61dc3fe
    <router-view/>
    <!-- <Footer></Footer> -->
    </v-app>
</template>

<script>
// import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    // Footer,
    Header,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
