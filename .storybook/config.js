import {configure} from '@storybook/vue'

import Vue from 'vue'

import Button from '../src/stories/Button.vue'

Vue.component('my-button', Button);

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);