<template>
    <div class="upload">
        <Header></Header>
        <h1>Book upload form</h1>
        <UploadForm/>
    </div>
</template>

<script>
    import UploadForm from "../components/upload_page/UploadForm";
    import Header from "../components/layout/Header";

    export default {
        name: "Upload",
        components: {UploadForm,Header}
    }
</script>

<style scoped>

    h1{
        text-align: center;
    }

</style>