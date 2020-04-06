<template>
    <div>
    <LoginForm @loginAttempt="loginAttempt" />
    <v-container style="width: 60%" class="pt-9">
      <v-alert 
        type="error"
        v-model="showAlert"
        dismissible
      >
        Unsuccessful Login attempt!
      </v-alert>
    </v-container>
    </div>
</template>

<script>
import axios from "axios"
import LoginForm from '../components/login/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
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