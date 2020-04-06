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
                <HeaderButtonLogin/>
                <HeaderButtonHome/>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    import HeaderButtonLogin from "./HeaderButtonLogin";
    import HeaderButtonHome from "./HeaderButtonHome";

    export default {
        components: {HeaderButtonHome, HeaderButtonLogin},
    }
</script>


<style>
</style>