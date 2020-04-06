<template>
    <v-btn
            v-on:click="go_to_login()"
            color="white"
            text
            value="feed"
            outlined
    >
        <span>Login</span>
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