<template>
    <div class="input">
        <label class="input-prefix" v-if="prefix">{{prefix}}</label>
        <span class="input-wrapper">
            <input
                :type="inputType" 
                :pattern="inputPattern"
                :placeholder="placeholder"
                v-model="content"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
            >
        </span>
        <label class="input-suffix" v-if="suffix">{{suffix}}</label>
    </div>
</template>
<script>
const TYPE_NUMBER = 'NUMBER';
const TYPE_DATE = 'DATE';
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        label: String,
        prefix: String,
        suffix: String,
        value: [Number, String],
        inValid: Function
    },
    data() {
        return {
            errorText: "sadadada"
        }
    },
    computed: {
        inputType() {
            const type = this.type.toUpperCase();
            if(type === TYPE_DATE) return 'tel';
            if(type === TYPE_NUMBER) return this.isMobile ? 'tel': this.type;
            return this.type;
        },
        inputPattern() {
            const type = this.type.toUpperCase();
            if(type === TYPE_DATE) return '^[0-9\/\\]*$';
            if(type === TYPE_NUMBER) return '^[0-9]*$';
            return '';
        },
        isMobile() {
            //https://stackoverflow.com/a/21742107/1578100
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return /android/i.test(userAgent) || /iPad|iPhone|iPhone/.test(userAgent) && !window.MSStream
        },
        content: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                //handled with $emit
            }
        }
    },
    methods: {
        handleFocus(e) {
            this.$el.setAttribute('focus', true);
            this.$emit('focus', this);
        },
        handleBlur(e) {
            e.preventDefault();
            this.$el.removeAttribute('focus');
            this.$emit('blur', this);
        },
        handleInput(e) {
            this.$emit('input', e.target.value.length == 0 ? null : e.target.value);
        }
        
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_reset.scss";
@import '@/assets/css/_color.scss';

.input {
    width: 100%;
    color: inherit;
    font-size: inherit;
    display: table;
    border-bottom: 1px solid $border-color;
    &[focus]{
        border-bottom-width: 2px;
        border-bottom-color: $primary;
    }
}
.input-wrapper {
    width: 100%;
    display: table-cell;
}

input {
    font-size: inherit;
    width: 100%;
    display: table-cell;
    padding: 0.4em 0;
    border: 0;
    border-radius: 0;
}

.input-prefix,
.input-suffix {
    font-size: inherit;
    display: table-cell;
    white-space: nowrap;
}
.input-prefix {
    padding-right: 0.4em;
}
.input-suffix {
    padding-left: 0.4em;
}
</style>

