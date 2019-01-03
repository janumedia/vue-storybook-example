<template>
    <div class="checkbox">
        <input type="checkbox" :id="`checkbox-${id}`" :value="label" v-model="checked" @change="handleChange">
        <label :for="`checkbox-${id}`" class="checkbox-label"><slot/></label>
    </div>
</template>
<script>
export default {
    props: ["id", "value"],
    data() {
        return {
            proxyValue: false
        }
    },
    computed: {
        label() {
            if(this.$slot) return this.$slots.default[0].text;
            else return ""
        },
        checked: {
            get() {
                return this.value;
            },
            set(value) {
                this.proxyValue = value;
            }
        }
    },
    watch: {
        proxyValue: function(newVal, oldVal) {
            this.$emit('input', newVal);
        }
    },
    methods: {
        handleChange(e) {
            this.$el.setAttribute('checked', e.target.checked);
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/_reset.scss';
@import '@/assets/css/_color.scss';

.checkbox {
    display: inline-block;
    font-size: inherit;
    position: relative;
}

.checkbox[fill] {
    &::before {
        content: '';
        position: absolute;
        top: 0;
        opacity: 0;
        display: block;
        width: 1.2em;
        height: 1.2em;
        background-color: $secondary;
        border: 0.1em solid $border-color;
        transition: opacity 0.4s;
    }
    input[type=checkbox] {
        &:checked + .checkbox-label {
            &::before {
                border-bottom-color: $secondary-text;
                border-right-color: $secondary-text;
            }
        }
    }
}

.checkbox[fill][checked="true"] {
    &::before {
        opacity: 1;
    }
}

input[type=checkbox] {
    display: none;
    &:checked + .checkbox-label {
        color: $secondary;
        &::before {
            width: 0.6em;
            top: -0.3em;
            left: 0.3em;;
            border-top-color: transparent;
            border-left-color: transparent;
            transform: rotate(45deg);
        }
    }
}

.checkbox-label {
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
        border: 0.1em solid $border-color;
        transition: all 0.2s;
    }
}
</style>
