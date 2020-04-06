<template>
    <v-btn
            v-on:click="go_to_login()"
            color="white"
            text
            value="feed"
            outlined
    >
        <span>Logout</span>
    </v-btn>
</template>

<script>
    export default {
        name: "ButtonLogout",
        methods:{
            go_to_login(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>

</style>