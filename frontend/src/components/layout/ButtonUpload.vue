<template>
    <v-btn
            v-on:click="go_to_route()"
            text
    >
        <span>UPLOAD</span>
        <v-icon>mdi-upload</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ButtonUpload",
        methods: {
            go_to_route() {
                this.$router.push("/upload")
            }
        }
    }
</script>

<style scoped>

</style>