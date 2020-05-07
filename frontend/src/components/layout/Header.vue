<template>
    <div class="mb-10">
        <v-app-bar
                color="teal darken-3"
                dense
                dark
        >
            <ButtonHome/>
            <v-spacer></v-spacer>
            <ButtonUpload v-if="loggedIn == 'true'" />
            <div id="nav">
                <ButtonLogin v-if="loggedIn == 'false'" />
                <ButtonLogout v-if="loggedIn == 'true'" />
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    import ButtonLogin from "./ButtonLogin";
    import ButtonHome from "./ButtonHome";
    import ButtonLogout from "./ButtonLogout";
    import ButtonUpload from "./ButtonUpload";

    export default {
        name: 'Header',
        components: {ButtonUpload, ButtonHome, ButtonLogin, ButtonLogout},
        data() {
            return {
                loggedIn: localStorage.getItem('loggedIn') || "false"
            }
        }
    }
</script>


<style>
</style>