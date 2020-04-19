<template>
    <v-card
            elevation="3"
            class="ma-3 pa-6"
    >
        <v-card-title>{{ book.title }}</v-card-title>
        <v-card-text>{{ book.description }}</v-card-text>

        <v-card-actions>
            <v-btn v-on:click="read()" text>Read</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'BookTile',
        props: ['book'],
        methods: {
            read() {
                this.$router.onReady(() => {
                    this.$router.push({name: 'book_page', params: {book_id: this.book.id}})
                })
            }
        }
    }
</script>