<template>
    <v-btn
            v-on:click="download()"
            tale
            color="green"
    >
        <span>DOWNLOAD</span>
    </v-btn>
</template>

<script>
    export default {
        name: "DownloadButton",
        methods: {
            download() {
                alert("DOWNLOAD STARTED!!! (or not)")
            }
        }
    }
</script>

<style scoped>
</style>