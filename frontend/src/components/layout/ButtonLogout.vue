<template>
    <v-btn
            v-on:click="go_to_login()"
            text
            tale
    >
        <span>Logout</span>
        <v-icon>mdi-logout</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ButtonLogout",
        methods:{
            go_to_login(){
                localStorage.setItem('loggedIn', 'false')
                localStorage.setItem("token", 'none')
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>

</style>