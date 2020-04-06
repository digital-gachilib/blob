<template>
    <div class="mb-10">
        <v-app-bar
                color="teal darken-3"
                dense
                dark
        >
            <ButtonHome/>
            <v-spacer></v-spacer>
            <div id="nav">
                <ButtonLogin/>
                <ButtonLogout/>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    import ButtonLogin from "./ButtonLogin";
    import ButtonHome from "./ButtonHome";
    import ButtonLogout from "./ButtonLogout";

    export default {
        components: {ButtonHome, ButtonLogin, ButtonLogout},
    }
</script>


<style>
</style>