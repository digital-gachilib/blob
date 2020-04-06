<template>
    <v-btn
            v-on:click="go_to_home()"
            color="white"
            text
    >
        <span>DIGITAL LIBRARY</span>
    </v-btn>
</template>

<script>
    export default {
        name: "ButtonHome",
        methods: {
            go_to_home() {
                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>

</style>