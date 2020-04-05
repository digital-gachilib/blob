<template>
    <div>
        <v-footer dark padless absolute>
            <v-card flat tile min-width='100%' class="indigo lighten-1 white--text text-center">
                <v-card-text class="white--text pt-5">
                    This is my footer
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Kamil Rizatdinov</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>