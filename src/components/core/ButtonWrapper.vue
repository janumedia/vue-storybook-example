<template>
    <button @click="handleClick">
        <slot/>
    </button>
</template>
<script>
export default {
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>
<style lang="scss" scoped>
button {
    font-size: inherit;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    //background: none;
    padding: 0.4em;
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    border-radius: 2em;
    cursor: pointer;
    white-space: nowrap;
    transition-duration: 1s;
    &:hover {
        background-image: radial-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        cursor: not-allowed;
    }
}
</style>
