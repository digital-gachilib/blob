<template>
  <v-btn v-on:click="download()" tale color="btn teal lighten-2">
    <span>DOWNLOAD</span>
  </v-btn>
</template>

<script>
export default {
  name: "DownloadButton",
  methods: {
    download() {
      alert("DOWNLOAD STARTED!!! (or not)");
    },
  },
};
</script>
