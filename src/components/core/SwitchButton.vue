<template>
    <label class="switch-button">
        <input 
            :type="type" 
            :id="`switch-button-${id}`" 
            :name="name"
            :disabled="disabled"
            :value="val" 
            @change="handleChange"
        >
        <span :data-off="off" :data-on="on"><slot/></span>
    </label>
</template>
<script>
export default {
    props: {
        id: [Number, String], 
        name: String, 
        type: {
            type: String, 
            default: 'checkbox'
        },
        val: {
            type: String,
        }, 
        disabled: Boolean,
        value: [Boolean, String, Number, Array, Object], 
        on: String,
        off: String
    },
    data() {
        return {
            proxyValue: false
        }
    },
    methods: {
        handleChange(e) {
            let proxy;
            if(Array.isArray(this.value)) {
                proxy = this.value.concat();
                if(e.target.checked) {
                    proxy.push(e.target.value);
                } else {
                    proxy.splice(proxy.indexOf(e.target.value), 1);
                }
            } else if(this.on && this.off) {
                proxy = e.target.checked ? this.on : this.off;
            } else {
                proxy = e.target.checked;
            }

            this.$emit('input', e.target.type == 'radio' ? e.target.value : proxy);
            this.$emit('change', e.target.type == 'radio' ? e.target.value : proxy);
        }
    }
} 
</script>
<style lang="scss" scoped>
@import '@/assets/css/_reset.scss';
@import '@/assets/css/_color.scss';

$enabled-bg: #FFFFFF;
$disabled-text: #FFFFFF;
$disabled-bg: #FFFFFF;

.switch-button {
    font-size: inherit;
    padding: 0;
    position: relative;
    display: inline-block;
    margin: 0 0 5px 0;
    outline: 0;
    cursor: pointer;
    
    &, &::before, &::after,
    & *, & *::before, &::after {
        box-sizing: border-box;

        &::selection {
            background: none;
        }
    }
    
    span {
        position: relative;
        display: block;
        height: 1.8em;
        line-height: 1.2em;
        font-weight: normal;
        text-align: center;
        overflow: hidden;
        padding: .2em 1em;
        border: 1px solid darken($enabled-bg, 2);
        
        &::before {
            position: relative;
            display: block;
            line-height: 1.3em;
            padding: 0 .2em;
            font-size: 1em;
        }

        &::after {
            position: absolute;
            display: block;
            content: '';
            width: 1.3em;
            height: 1.3em;
            margin-left: -1.45em;
            top: .2em;
            background-color: $enabled-bg;
            transition: all 0.3s;
        }
    }
}

.switch-button[rounded] {
    span {
        border-radius: 1.5em;
        &::after {
            border-radius: 1.5em;
        }
    }
}

input[type=radio],
input[type=checkbox] {
    display: none;
    &:not(:checked) + span {
        color: $disabled-text;
        background-color: $disabled;
        background: lighten(desaturate($secondary, 100%), 20%);
        color: darken(desaturate($disabled-text, 100%), 40%);
        padding-left: 1.6em;
        padding-right: 0.8em;
        &::before {
            content: attr(data-off);
            color: $disabled-text;
            color: darken(desaturate($disabled-text, 100%), 40%);
        }
        &::after {
            background-color: $disabled-bg;
            left: 1.6em;
        }
    }
    
    &:checked + span {
        background-color: $secondary;
        color: $secondary-text;
        color: lighten(desaturate($secondary-text, 100%), 100%);
        padding-left: 0.8em;
        padding-right: 1.6em;
        
        &::before {
            content: attr(data-on);
        }

        &::after {
            background-color: $enabled-bg;
            left: 100%;
        }
    }

    &:disabled, &:disabled + span,
    &:read-only, &:read-only + span {
        color: $disabled-text;
        background-color: $disabled;
        background: lighten(desaturate($secondary, 100%), 20%);
        color: darken(desaturate($disabled-text, 100%), 40%);
        cursor: not-allowed;
    }
}
</style>
