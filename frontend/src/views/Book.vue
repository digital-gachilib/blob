<template>
    <div class="book">
        <Header></Header>
        <BookContent :book ='book'> </BookContent>
    </div>
</template>

<script>
    import Header from "../components/layout/Header";
    import axios from 'axios'
    import BookContent from "../components/book_page/BookContent";

    export default {
        name: "Book",
        components: {Header, BookContent},
        props: ['book_id'],
        data() {
            return {
                token: "none",
                book: [],
            }
        },
        mounted: function () {
            this.getToken();
            this.getBook({query: this.book_id})
        },
        methods: {
            getToken: function () {
                this.token = localStorage.getItem("token")
            },
            getBook: function (data) {
                console.log(data);
                axios.get(
                    "http://127.0.0.1:8000/api/book_preview/",
                    {
                        params: {
                            id: data['query']
                        },
                        headers: {
                            Authorization: `Token ${localStorage.getItem("token")}`,
                        },
                    }
                )
                    .then(response => {
                        this.book = response.data
                    })
                    .catch(error => {
                        console.log(error);
                        alert("BOOK NOT FOUND!")
                    })
            }
        }
    }
</script>

<style scoped>

</style>