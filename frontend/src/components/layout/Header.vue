<template>
    <div>
        <v-app-bar
                color="teal darken-3"
                dense
                dark
        >
            <v-toolbar-title>DIGITAL LIBRARY</v-toolbar-title>

            <v-spacer></v-spacer>

            <div id="nav">
                <router-link class="router-link" to="/login">Login</router-link>
                |
                <router-link class="router-link" to="/">Home</router-link>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    #nav {
        color: black;
    }

    .router-link{
        text-decoration: none;
        color: aqua;
    }
</style>