import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';

import Vue from 'vue'

import DefaultLayout from '@/layouts/default'
import NoNavigationLayout from '@/layouts/no-navigation'

import Button from '@/components/core/Button'
import Input from '@/components/core/Input'
import Checkbox from '@/components/core/Checkbox'
import RadioButton from '@/components/core/RadioButton'
import SwitchButton from '@/components/core/SwitchButton'

//setup preview styles
import '@/assets/css/_normalize.scss'

//register layouts
Vue.component('default-layout', DefaultLayout);
Vue.component('no-nav-layout', NoNavigationLayout);

//register components
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