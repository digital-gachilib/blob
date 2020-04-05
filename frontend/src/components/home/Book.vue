<template>
    <v-card
      class="mx-auto"
      min-width="600"
      max-width="800"
      elevation="3"
    >
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
  
      <v-card-actions>
        <v-btn @onclick="read" text>Read</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'Book',
    props: ['title', 'description'],
    methods: {
        read() {
            console.log('Books reading not implemented yet')
        }
    }
}
</script>