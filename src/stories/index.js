import { storiesOf } from '@storybook/vue'
//import addons
import { linkTo } from '@storybook/addon-links'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS
    }
})

storiesOf('Button', module)
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
    .add('font size: 20px', () => ({
        template: '<custom-button style="font-size:40px" primary>Font Size 40px</custom-button>'
    }));

storiesOf('Input', module)
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
    .add('prefix with symbol', () => ({
        template: '<input-text prefix="💲"/>'
    }))
    .add('suffix with emoji', () => ({
        template: '<input-text suffix="✍️"/>'
    }))
    .add('prefix + suffix', () => ({
        template: '<input-text prefix="Volume" suffix="m2"/>'
    }))
    .add('width: 300px', () => ({
        template: '<input-text style="width: 300px; font-size:30px"/>'
    }));

storiesOf('SwitchButton', module)
    .add('default', () => ({
        template: `<switch-button></switch-button>`
    }))
    .add('rounded', () => ({
        template: `<switch-button rounded></switch-button>`
    }))
    .add('rounded + extra space', () => ({
        template: `<switch-button rounded>&nbsp;&nbsp;&nbsp;&nbsp;</switch-button>`
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
    .add('rounded + font size 30px', () => ({
        template: `<switch-button rounded style="font-size:30px"></switch-button>`
    }));
