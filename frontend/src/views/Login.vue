<template>
    <div>
    <LoginForm @loginAttempt="loginAttempt" />
    <UnsuccessfulLogin v-if="showAlert" />
    </div>
</template>

<script>
import axios from "axios"
import LoginForm from '../components/login/LoginForm.vue'
import UnsuccessfulLogin from '../components/login/UnsuccessfulLogin.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    UnsuccessfulLogin,
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
        this.$router.replace({name: "Home"})
      })
      .catch(error => {
          if (error.response.status === 400) {
            localStorage.setItem("token", 'none')
            this.showAlert = true
        }
      })
    },
  }
}
</script>