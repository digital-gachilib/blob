<template>
    <v-container>
        <v-container v-if="books == false" style="width: 60%" class="pt-9">
            <v-alert type="info">
                <strong>No books found :(</strong>
            </v-alert>
        </v-container>
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