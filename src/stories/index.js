import { storiesOf } from '@storybook/vue'
//import addons
import { linkTo } from '@storybook/addon-links'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import App from '@/App'

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS
    }
})

storiesOf('Page|App', module)
    .add('app', () => ({
        render: h => h(App)
    }));

storiesOf('Component|Button', module)
    .add('default', () => ({
        template: '<custom-button @click="handleClick">Default Button</custom-button>',
        methods: {
            handleClick: linkTo('CheckBox')
        }
    }))
    .add('rounded', () => ({
        template: '<custom-button rounded>Rounded Button</custom-button>'
    }))
    .add('uppercase', () => ({
        template: '<custom-button uppercase>Uppercase Button</custom-button>'
    }))
    .add('primary', () => ({
        template: '<custom-button primary>Primary Button</custom-button>'
    }))
    .add('disabled', () => ({
        template: '<custom-button disabled>Disabled Button</custom-button>'
    }))
    .add('emoji & symbol', () => ({
        template: '<custom-button>😎🌍🍺💯</custom-button>'
    }))
    .add('custom font size', () => ({
        template: '<div><custom-button style="font-size:30px" primary>30px</custom-button><br><br><custom-button style="font-size:40px" primary>40px</custom-button></div>'
    }));

storiesOf('Component|Input', module)
    .add('default', () => ({
        template: '<input-text/>'
    }))
    .add('placeholder', () => ({
        template: '<input-text placeholder="Your Placeholder"/>'
    }))
    .add('prefix', () => ({
        template: '<input-text prefix="Euro"/>'
    }))
    .add('suffix', () => ({
        template: '<input-text suffix="km/s"/>'
    }))
    .add('emoji & symbol', () => ({
        template: `
            <div>
                <input-text prefix="💲"/><br><br>
                <input-text suffix="✍️"/><br><br>
            </div>
        `
    }))
    .add('custom width', () => ({
        template: '<input-text prefix="💲" suffix="✍️" style="width:300px;"/>'
    }));

storiesOf('Component|Checkbox', module)
    .add('default', () => ({
        template: `
            <div>
                <checkbox id="one">Default One</checkbox><br><br>
                <checkbox id="two">Default Two</checkbox>
            </div>`
    }))
    .add('fill', () => ({
        template: `
            <div>
                <checkbox id="one" fill>Fill One</checkbox><br><br>
                <checkbox id="two" fill>Fill Two</checkbox>
            </div>`
    }))
    .add('custom font size', () => ({
        template: `
            <div>
                <checkbox id="one" fill style="font-size: 30px">30px</checkbox><br><br>
                <checkbox id="two" fill style="font-size: 40px">40px</checkbox>
            </div>`
    }));

storiesOf('Component|RadioButton', module)
    .add('default', () => ({
        template: `
            <div>
                <radio-button id="one" name="defaut-radio">Default One</radio-button><br><br>
                <radio-button id="two" name="defaut-radio">Default Two</radio-button>
            </div>
        `
    }))
    .add('fill', () => ({
        template: `
            <div>
                <radio-button id="one" name="fill-radio" fill>Fill One</radio-button><br><br>
                <radio-button id="two" name="fill-radio" fill>Fill Two</radio-button>
            </div>
        `
    }))
    .add('custom font size', () => ({
        template: `
            <div>
                <radio-button id="one" name="fill-radio" style="font-size:30px" fill>30px</radio-button><br><br>
                <radio-button id="two" name="fill-radio" style="font-size:40px" fill>40px</radio-button>
            </div>
        `
    }))

storiesOf('Component|SwitchButton', module)
    .add('default', () => ({
        template: `<switch-button></switch-button>`
    }))
    .add('rounded', () => ({
        template: `<switch-button rounded></switch-button>`
    }))
    .add('rounded + label', () => ({
        template: `<switch-button rounded>My Label</switch-button>`
    }))
    .add('rounded + on + off', () => ({
        template: `<switch-button on="Yes" off="No" rounded></switch-button>`
    }))
    .add('rounded + disabled', () => ({
        template: `<switch-button rounded disabled>Disabled</switch-button>`
    }))
    .add('custom font size', () => ({
        template: `
            <div>
                <switch-button rounded style="font-size:20px">20px</switch-button><br><br>
                <switch-button rounded style="font-size:40px">40px</switch-button>
            </div>
        `
    }));
