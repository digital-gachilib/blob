<template>
    <v-btn
            v-on:click="go_to_login()"
            text
            tale
    >
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ButtonLogin",
        methods:{
            go_to_login(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>

</style>