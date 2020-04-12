<template>
    <div>
      <Header />
      <LoginForm @loginAttempt="loginAttempt" />
      <v-container>
        <v-alert 
          type="error"
          v-model="showAlert"
          dismissible
        >
          <strong>Unsuccessful Login attempt!</strong>
        </v-alert>
      </v-container>
    </div>
</template>

<script>
import axios from "axios"
import LoginForm from '../components/login/LoginForm.vue'
import Header from '../components/layout/Header.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    Header,
  },
  data() {
    return {
      showAlert: false
    }
  },
  methods: {
    loginAttempt(data) {
      axios.post(
        "http://127.0.0.1:8000/api-token-auth/", 
        {
          'username': data['username'],
          'password': data['password'],
        }
      ).then(response => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("loggedIn", "true")
        this.$router.replace({name: "Home"})
      })
      .catch(error => {
          if (error.response.status === 400) {
            localStorage.setItem("token", 'none')
            this.showAlert = true
        }
      })
    },
  },
  beforeCreate() {
    if (localStorage.getItem("loggedIn") === "true") {
      this.$router.replace({name: "Home"})
    }
  }
}
</script>