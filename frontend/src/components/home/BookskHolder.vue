<template>
    <v-container >
        <v-layout row wrap justify-left>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="book in books" :key="book.id">
                <Book v-if="authorized" :title="book.title" :description="book.description"></Book>
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
import Book from './Book.vue'

export default {
    name: 'BooksHolder',
    data() {
        return {
            authorized: true,
        }
    },
    props: ["books"],
    components: {
        Book
    }
}
</script>