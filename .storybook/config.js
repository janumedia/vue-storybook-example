import {configure} from '@storybook/vue'

import Vue from 'vue'

import Button from '@/components/core/Button'
import Input from '@/components/core/Input'
import SwitchButton from '@/components/core/SwitchButton'

Vue.component('custom-button', Button);
Vue.component('input-text', Input);
Vue.component('switch-button', SwitchButton);

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);