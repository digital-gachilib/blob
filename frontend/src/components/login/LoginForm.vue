<template>
    <v-container id="login-form" @submit="submit">
        <v-form>
            <h1>Login</h1>
            <v-text-field
            v-model="username"
            :counter="100"
            label="Username"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :counter="100"
            label="Password"
            required
            type='password'
            ></v-text-field>

            <v-btn class="btn mr-10 teal lighten-3" type="submit">submit</v-btn>
            <v-btn class="btn red lighten-3" @click="clear">clear</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import axios from "axios"

export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: '',
            authorized: false,
        }
    },
    methods: {
        submit() {
            axios.post(
                "http://127.0.0.1:8000/api-token-auth/", 
                {
                    'username': this.username,
                    'password': this.password,
                }
            ).then(response => {
                localStorage.setItem("token", response.data.token)
                this.$router.replace({name: "Home"})
            })
            .catch(error => {
                if (error.response.status === 400) {
                    localStorage.setItem("token", 'none')
                }
            })
            this.clear()
        },
        clear() {
            this.username = '',
            this.password = ''
        }
    }
}
</script>

<style scoped>
    #login-form {
        width: 50%;
        padding: 100px;
        border-radius: 30px;
        box-shadow: 1px 1px 30px gray;
    }

    .btn {
        width: 150px
    }
</style>