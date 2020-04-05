<template>
    <v-container>
        <v-col v-for="book in books" :key="book.id">
            <Book v-if="authorized" :title="book.book_title" :description="book.book_description"></Book>
        </v-col>
    </v-container>
</template>

<script>
import axios from 'axios'
import Book from './Book.vue'

export default {
    name: 'BooksHolder',
    data() {
        return {
            books: [],
            authorized: false,
        }
    },
    components: {
        Book
    },
    mounted: function() {
        this.getBooks()
    },
    methods: {
        getBooks: function() {
            axios.get(
                'http://127.0.0.1:8000/books/',
                {
                    headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                    }
                }
            )
            .then(response => {
                this.books = response.data
                this.authorized = true
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.authorized = false
                }
            })
        }
    }
}
</script>