<template>
  <v-container>
    <v-col>
      {{msg}}
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['msg'],
  }
</script>
