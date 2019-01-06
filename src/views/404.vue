<template>
    <div>
        <h1>Error {{ statusCode }}</h1>
        <h2>{{ message }}</h2>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statusCode: 404,
            message: 'Page not found'
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.message = to.params.message || vm.message
            vm.statusCode = to.params.statusCode || vm.statusCode
        })
    }
}
</script>
