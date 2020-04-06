<template>
    <div class="mb-10">
        <v-app-bar
                color="teal darken-3"
                dense
                dark
        >
            <v-toolbar-title>DIGITAL LIBRARY</v-toolbar-title>

            <v-spacer></v-spacer>

            <div id="nav">
                <router-link class="router-link mr-3" to="/login">
                    <v-btn
                        color="white"
                        text
                        value="feed"
                        outlined
                    >
                        <span>Login</span>
                    </v-btn>
                </router-link>
                <router-link class="router-link" to="/home">
                    <v-btn
                        color="white"
                        text
                        value="feed"
                        outlined
                    >
                        <span>Home</span>
                    </v-btn>
                </router-link>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    export default {}
</script>

<style>
</style>