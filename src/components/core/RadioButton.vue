<template>
    <div class="radio-button">
        <input type="radio" :id="`radio-${id}`" :name="name" :value="label" v-model="selected">
        <label class="radio-label" :for="`radio-${id}`"><slot/></label>
    </div>
</template>
<script>
export default {
    props: ["id", "name", "value"],
    computed: {
        label() {
            if(this.$slots.default) return this.$slots.default[0].text;
            else return "";
        },
        selected: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_reset.scss";
@import "@/assets/css/_color.scss";

.radio-button {
    display: inline-block;
    font-size: inherit;
    position: relative;
}

.radio-button[fill] {
    input[type=radio] {
        &:checked ~ .radio-label::after {
            left: 0;
            top: 0;
            width: 1.2em;
            height: 1.2em;
            background-color: $secondary;
        }
    }
}

input[type=radio] {
    position: absolute;
    visibility: hidden;

    &:checked ~ .radio-label::after {
        width: 0.6em;
        height: 0.6em;
        top: 0.3em;
        left: 0.3em;
        background-color: $secondary;
    }

    &:checked ~ .radio-label {
        color: $secondary;
    }
}

.radio-label {
    font-size: inherit;
    display: block;
    position: relative;
    padding-left: 1.8em;
    cursor: pointer;
    transition: color 0.2s;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        display: block;
        width: 1.2em;
        height: 1.2em;
        border: 0.1em solid $secondary;
        border-radius: 100%;
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100%;
        width: 0;
        height: 0;
        top: 0.6em;
        left: 0.6em;
        transition: all 0.2s;
    }
}
</style>

