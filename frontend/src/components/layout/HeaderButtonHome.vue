<template>
    <v-btn
            v-on:click="go_to_home()"
            color="white"
            text
            value="feed"
            outlined
    >
        <span>Home</span>
    </v-btn>
</template>

<script>
    export default {
        name: "HeaderButtonHome",
        methods: {
            go_to_home() {
                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>

</style>