import Vue from 'vue'
import {storiesOf} from '@storybook/vue'

import Button from './Button.vue'

storiesOf('my-button', module)
    .add('story as a template', () =>
        '<my-button>hello world</my-button>'
    )
    .add('story as a component', () => ({
        components: {'the-button':Button},
        template: '<the-button>button component</the-button>'
    }));