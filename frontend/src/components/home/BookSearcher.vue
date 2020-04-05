<template>
    <div class="searcher">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

        <v-toolbar
                dense
                floating
        >
            <v-text-field
                    v-model="query"
                    @input="do_search()"
                    hide-details
                    prepend-icon="search"
                    single-line
            ></v-text-field>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "BookSearcher",
        data(){
            return {
                query:''
            }
        },
        methods:{
            do_search(){
                console.log(this.query)
            }
        }
    }
</script>

<style scoped>
.searcher{
    position: absolute;
    top: 50px;
    right: 0px;
}
</style>