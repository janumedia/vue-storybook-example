<template>
    <button @click="handleClick"><slot/></button>
</template>
<script>
export default {
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    },
}
</script>
