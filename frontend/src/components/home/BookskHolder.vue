<template>
    <v-container >
        <v-layout row wrap justify-left>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="book in books" :key="book.id">
                <BookTile v-if="authorized" :book="book"></BookTile>
            </v-flex>
        </v-layout>
        <v-container style="width: 60%" class="pt-9" v-if="books == false">
            <v-alert type="info">
                <strong>No books found :(</strong>
            </v-alert>
        </v-container>
    </v-container>
</template>

<script>
import BookTile from './BookTile.vue'

export default {
    name: 'BooksHolder',
    data() {
        return {
            authorized: true,
        }
    },
    props: ["books"],
    components: {
        BookTile
    }
}
</script>