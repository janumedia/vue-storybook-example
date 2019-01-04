<template>
    <button @click="handleClick">
        <router-link v-if="url && url.indexOf('http') == -1" :title="label" :to="url">{{ label }}</router-link>
        <a v-else-if="url" :href="url" target="_blank" :title="label" rel="noopener">{{ label }}</a>
        <span v-else-if="label">{{ label }}</span>
        <slot v-else/>
    </button>
</template>
<script>
export default {
    props: {
        label: String,
        url: String
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_color.scss";
button {
    font-size: inherit;
    border: min(0.05em, 0.05em) solid $border-color;
    display:inline-block;
    vertical-align:middle;
    text-decoration:none;
    color: $secondary;
    background-color:inherit;
    text-align:center;
    cursor:pointer;
    white-space:nowrap;
    transition-duration: 0.4s;
    padding: 0.6em 1em;
    &:focus {
        outline: none;
    }
    & span,
    & a {
        display:block;
        color: $secondary;
        padding: 0.6em 1em;
        margin: -0.6em -1em; //reset parent padding
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.4s;
    }
    &:hover,
    &:hover > span,
    & > a:hover {
        color: $primary-text;
        background-color: $secondary;
    }
    &:disabled {
        cursor: not-allowed;
        color: $disabled-text;
        border-color: $disabled;
        background-color: $disabled;
        &:hover,
        &:hover > span,
        & > a:hover {
            color: $disabled-text;
            border-color: $disabled;
            background-color: $disabled;
        }
    }
}

button[primary]:not([disabled]) {
    border-color: $secondary;
    color: $secondary-text;
    background-color: $secondary;
    & span,
    & a {
        color: $secondary-text;
    }
    &:hover,
    &:hover > span,
    & > a:hover {
        color: $primary-text;
        background-color: $primary;
        border-color: $primary;
    }
}

button[rounded] {
    border-radius: 1.5em;
    &:hover,
    &:hover > span,
    & > a:hover {
        border-radius: 1.5em;
    }
}

button[uppercase] {
    text-transform: uppercase;
    letter-spacing: 0.04em;
}
</style>
