<template>
    <v-container id="search-form" @submit="submit">
        <v-form >
            <v-text-field
                solo
                clearable
                color="teal lighten-1"
                label="Search book"
                prepend-inner-icon="mdi-magnify"
                v-model="query"
            ></v-text-field>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "BookSearcher",
        data() {
            return {
                query:''
            }
        },
        methods:{
            submit: function() {
                console.log(this.query)
                this.clear()
            },
            clear: function() {
                this.query = ''
            }
        }
    }
</script>

<style scoped>
    #search-form {
        width: 60%
    }
</style>