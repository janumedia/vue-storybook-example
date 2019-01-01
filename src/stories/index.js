import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
//import addons
import { linkTo } from '@storybook/addon-links'

import Button from './Button.vue'
import Checkbox from './Checkbox.vue'

storiesOf('Button', module)
    .add('button as a template', () => ({
        template: '<my-button @click="handleClick">button as a template</my-button>',
        methods: {
            handleClick: linkTo('Button', 'button as a component')
        },
    }))
    .add('button as a component', () => ({
        components: {'the-button':Button},
        template: '<the-button @click="handleClick">button as a component</the-button>',
        methods: {
            handleClick: linkTo('Checkbox')
        },
    }));

storiesOf('Checkbox', module)
    .add('default', () => ({
        components: {Checkbox},
        template: '<checkbox>Default</checkbox>'
    }));