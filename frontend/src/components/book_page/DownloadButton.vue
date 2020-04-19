<template>
  <v-btn v-on:click="download()" tale color="btn teal lighten-2" class="mt-9">
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
