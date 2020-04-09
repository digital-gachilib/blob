<template>
    <v-container>
        <v-col v-for="book in books" :key="book.id">
            <Book v-if="authorized" :title="book.title" :description="book.description"></Book>
        </v-col>
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