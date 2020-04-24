<template>
  <v-container @submit.prevent="submit">
    <v-layout row wrap justify-center>
      <v-flex xs10 sm8 md8 lg6 xl5>
        <v-form id="login-form">
          <h1>Login</h1>
          <v-text-field
            v-model="username"
            label="Username"
            required
            prepend-inner-icon="mdi-account"
            color="teal lighten-1"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            required
            type="password"
            prepend-inner-icon="mdi-lock-question"
            color="teal lighten-1"
          ></v-text-field>

          <v-btn class="btn teal lighten-2" type="submit">submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$emit("loginAttempt", {
        username: this.username,
        password: this.password,
      });
      this.clear();
    },
    clear() {
      (this.username = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
#login-form {
  padding: 50px;
  border-radius: 30px;
  box-shadow: 1px 1px 30px gray;
}
</style>
