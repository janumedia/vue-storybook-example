import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';

import Vue from 'vue'

import Button from '@/components/core/Button'
import Input from '@/components/core/Input'
import Checkbox from '@/components/core/Checkbox'
import RadioButton from '@/components/core/RadioButton'
import SwitchButton from '@/components/core/SwitchButton'

Vue.component('custom-button', Button);
Vue.component('input-text', Input);
Vue.component('checkbox', Checkbox);
Vue.component('radio-button', RadioButton);
Vue.component('switch-button', SwitchButton);

addDecorator(
    withOptions({
        hierarchyRootSeparator: /\|/
    })
);

function loadStories() {
    require('../src/stories');
};

configure(loadStories, module);