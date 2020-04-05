<template>
    <v-alert type="error">
        You need to be logged into the system in order to view the books
    </v-alert>
</template>

<script>
export default {
    name: 'Unauthorized',
    methods: {
        goToLogin() {
            this.$router.replace({name: "Login"})
        }
    }
}
</script>