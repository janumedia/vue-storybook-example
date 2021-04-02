<template>
    <div>
        <switch-button 
            v-model="value"
            :dataOFF="labelOFF" :dataON="labelON" 
            v-if="iOS">

        </switch-button>
        <label class="switch" v-else>
            <input type="checkbox" v-model="value" :default-value="off" @change="handleChange">
            <span class="slider"></span>
            <div class="switch-label">
                <span>{{ labelON }}</span>
                <span>{{ labelOFF }}</span>
            </div>
        </label>
    </div>
</template>
<script>
import {iOSDevice} from '@/utils/utils'
import SwitchButton from '@/components/core/SwitchButton'
export default {
    components: {
        SwitchButton
    },
    props: ["on", "off"],
    data() {
        return {
            value: false
        }
    },
    watch: {
        value: function(newVal, oldVal) {
            this.$emit('input', newVal ? this.labelON : this.labelOFF);
        }
    },
    computed: {
        labelON() {
            if(this.on) return this.on;
            return "ON";
        },
        labelOFF() {
            if(this.off) return this.off;
            return "OFF";
        },
        iOS() {
            return iOSDevice();
        }
    },
    mounted() {
        this.$emit('input', this.value ? this.labelON : this.labelOFF);
    },
    methods: {
        handleChange(e) {
            this.$emit('change', this);
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/_reset.scss';
@import "@/assets/css/_color.scss";
//@import "@/assets/css/_mixin.scss";
.switch {
    position: relative;
    display: inline-block;
    height: 30px;
    color: $secondary;
    border: 1px solid $border-color;
    //margin-bottom: 18px;
}

.switch input {display:none;}

.switch-label {
    position: relative;
    top: 0;
    text-align: center;
    cursor: pointer;
    span {
        display: inline-block;
        width: 70px;
        padding: 4px;
    }
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //@include transition(0.4s);
    transition-duration: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    width: 70px;
    //left: 0;
    bottom: 0;
    top: 0;
    background-color: $secondary;
    border: none;
    //@include transition(0.4s);
    //@include translateX(70px);
    transition-duration: 0.4s;
    //transform: translateX(70px);
    right: 0;
}

input:focus + .slider {
    box-shadow: 0 0 1px $border-color;
}

input:checked + .slider:before {
    //@include translateX(0);
    //transform: translateX(0);
}

input ~ .switch-label {
    > span:first-child {
        color: inherit;
    }
    > span:last-child {
        color: $primary-text;
    }
}

input:checked ~ .switch-label {
    > span:first-child {
        color: $primary-text;
    }
    > span:last-child {
        color: inherit;
    }
}

</style>