<template>
    <div class="container">

        <h2 v-if="submissionComplete">
            Thank you for your submission.
            It will become visible to other users after review by administrators.
        </h2>

        <form class="upload_form" @submit.prevent="onSubmit" v-if="!submissionComplete">
            <p>
                <label for="book_title"> Title: </label>
                <input required id="book_title" v-model="title">
            </p>

            <p>
                <label for="book_description"> Description: </label>
                <textarea required id="book_description" v-model="description"> </textarea>
            </p>

            <p>
                <label for="book_link"> Download link: </label>
                <input required id="book_link" v-model="link">
            </p>

            <input class="submit" type="submit" value="Submit">
        </form>

    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: "UploadForm",
        data() {
            return {
                title: null,
                description: null,
                author: null,
                link: null,
                submissionComplete: false
            }
        },
        methods: {
            onSubmit() {
                if (this.title && this.description && this.link) {
                    let book = {
                        title: this.title,
                        description: this.description,
                        link: this.link
                    };

                    axios.post(
                        "http://127.0.0.1:8000/book-upload/",
                        {
                            'title': book['title'],
                            'description': book['description'],
                            'link': book['link']
                        }
                    ).then(() => {
                        this.submissionComplete = true
                    }).catch(() => {
                        alert('Something went wrong')
                    })
                }
            }
        }
    }

</script>

<style scoped>
    .submit {
        background-color: #4db6ac;
        align-content: center;
        width: 50%;
    }

    .container {
        width: auto;
    }

    .upload_form {
        position: absolute;
        padding: 20px;
        margin: 40px;
        border: 1px solid #d8d8d8;
    }

    input, textarea {
        border: 1px solid #d8d8d8;
        height: 25px;
        margin-bottom: 20px;
    }
</style>