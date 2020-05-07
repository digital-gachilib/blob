<template>
  <div>
    <h2 v-if="submissionComplete">
      Thank you for your submission.
      It will become visible to other users after review by administrators.
    </h2>

    <v-container @submit.prevent="onSubmit" v-if="!submissionComplete">
      <v-layout row wrap justify-center>
        <v-flex xs11 sm10 md10 lg8 xl6>
          <v-form id="login-form">
            <h1>Book upload form</h1>
            <v-text-field v-model="title" label="Title" required color="teal lighten-1"></v-text-field>
            <v-text-field
              v-model="author_first_name"
              label="Author first name"
              required
              color="teal lighten-1"
            ></v-text-field>
            <v-text-field
              v-model="author_last_name"
              label="Author last name"
              required
              color="teal lighten-1"
            ></v-text-field>
            <v-text-field v-model="link" label="Link to download" required color="teal lighten-1"></v-text-field>
            <v-textarea v-model="description" label="Description" required color="teal lighten-1"></v-textarea>

            <v-btn class="btn teal lighten-2" type="submit">submit</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UploadForm",
  data() {
    return {
      title: null,
      description: null,
      author_first_name: null,
      author_last_name: null,
      link: null,
      submissionComplete: false
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:8000/api/new_book/", null, {
          params: {
            link: this.link,
            title: this.title,
            description: this.description,
            first_name: this.author_first_name,
            last_name: this.author_last_name
          },
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
          }
        })
        .then(() => {
          this.submissionComplete = true;
        })
        .catch(() => {
          alert("Something went wrong");
        });
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>