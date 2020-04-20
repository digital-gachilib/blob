<template>
  <v-btn v-on:click="download()" tale color="btn teal lighten-2" class="mt-9">
    <span>DOWNLOAD</span>
  </v-btn>
</template>

<script>
  export default {
    name: "DownloadButton",
    props:['download_link'],
    methods: {
      download() {
        window.open(this.download_link);
      },
    },
  };
</script>
