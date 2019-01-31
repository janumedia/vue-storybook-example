import { storiesOf } from '@storybook/vue'
//import addons
import { linkTo } from '@storybook/addon-links'
import { action, decorate } from '@storybook/addon-actions'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs, text, boolean, number, select, color } from '@storybook/addon-knobs';
//
import StoryRouter from 'storybook-vue-router'

import App from '@/App'
import Welcome from './Welcome'

import Icon, * as Icons from '@/components/media/Icon'

import router from '@/router'

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS
    }
});

storiesOf('Page|Welcome', module)
    .addParameters({
        options: {
            selectedAddonPanel: 'storybook-addon-viewport/addon-panel'
        }
    })
    .add('welcome', () => ({
        render: h => h(Welcome)
    }));

storiesOf('Page|App', module)
    .addDecorator(StoryRouter({}, router.options))
    .addParameters({
        options: {
            selectedAddonPanel: 'storybook-addon-viewport/addon-panel'
        }
    })
    .add('app with router', () => ({
        render: h => h(App)
    }));

storiesOf('Components|Button', module)
    .add('default', () => ({
        template: '<custom-button>Default Button</custom-button>'
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

storiesOf('Components|Input', module)
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

storiesOf('Components|Checkbox', module)
    .add('default', () => ({
        template: `
            <div>
                <checkbox id="one">Default One</checkbox><br><br>
                <checkbox id="two" checked>Default Two</checkbox>
            </div>`
    }))
    .add('fill', () => ({
        template: `
            <div>
                <checkbox id="one" fill checked>Fill One</checkbox><br><br>
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

storiesOf('Components|RadioButton', module)
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

storiesOf('Components|SwitchButton', module)
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

storiesOf('Components|LazyImage', module)
    .addParameters({
        options: {
            selectedAddonPanel: 'storybook-addon-viewport/addon-panel'
        }
    })
    .add('default', () => ({
        template: `
        <div>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fpeguyangan-waterfall-3.jpg?alt=media&token=82e2b880-f354-468e-a857-f341a108e239"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fklingking-beach.jpg?alt=media&token=0608592e-0bca-43ce-b535-857065b67ef5"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fangel-billabong.jpg?alt=media&token=9d4b2f99-3667-464e-9d6a-5c4b6850bf84"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fbroken-beach.jpg?alt=media&token=d5c744e6-9fd4-4df0-8552-03659675f6d7"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fcrystal-bay-beach-2.jpg?alt=media&token=be8ffb8f-17e9-4b85-bf4a-9dff7f38348a"/>
        </div>
        `
    }))
    .add('custom placeHolder', () => ({
        template: `
        <div>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fpeguyangan-waterfall-3.jpg?alt=media&token=82e2b880-f354-468e-a857-f341a108e239"/><br>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fklingking-beach.jpg?alt=media&token=0608592e-0bca-43ce-b535-857065b67ef5"/><br>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fangel-billabong.jpg?alt=media&token=9d4b2f99-3667-464e-9d6a-5c4b6850bf84"/><br>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fbroken-beach.jpg?alt=media&token=d5c744e6-9fd4-4df0-8552-03659675f6d7"/><br>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fcrystal-bay-beach-2.jpg?alt=media&token=be8ffb8f-17e9-4b85-bf4a-9dff7f38348a"/>
        </div>
        `
    }));

storiesOf('Components|Icon', module)
    .addDecorator(withKnobs)
    .addParameters({
        options: {
            addonPanelInRight: true,
            selectedAddonPanel: 'storybooks/storybook-addon-knobs'
        }
    })
    .add('Icon List', () => ({
        props: {
            color: {
                type: String,
                default: color('color', '#F8E71C')
            },
            width: {
                type: Number,
                default: number('width', 80, {
                    range: true,
                    min: 80,
                    max: 200,
                    step: 10
                })
            },
            height: {
                type: Number,
                default: number('height', 80, {
                    range: true,
                    min: 80,
                    max: 200,
                    step: 10
                })
            }
        },
        render(h) {
            const iconList = [];
            Object.keys(Icons).forEach(name => {
                if(name != 'default') iconList.push(
                    <div>
                        {h(Icons[name], {props:{width:this.width, height:this.height, color:this.color}})}
                        <div>{name}</div>
                        <br/>
                    </div>
                )
            })
            return (
                <div>
                    {iconList}
                </div>
            )
        }
    }))

// decorate return first argument as new value
const firstArg = decorate([args => {
    return Array.isArray(args[0]) ? args[0] : [args[0]]
}]);

storiesOf('Addons|Actions', module)
    .addParameters({
        options: {
            addonPanelInRight: true,
            selectedAddonPanel: 'storybook/actions/actions-panel'
        }
    })
    .add('Button: click', () => ({
        template: '<custom-button @click="handleClick" rounded>Click Me!</custom-button>',
        methods: {
            handleClick: action('click')
        }
    }))
    .add('Checkbox: v-model', () => ({
        template: `
            <div>
                Select your favorite fruit:<br><br>
                <checkbox id="manggo" v-model="listValues" fill>Manggo</checkbox><br><br>
                <checkbox id="orange" v-model="listValues" fill>Orange</checkbox>
            </div>`,
        data() {
            return {
                listValues: ["Orange"]
            }
        },
        watch: firstArg.actions('listValues')
    }))
    .add('RadioButton: v-model', () => ({
        template: `
            <div>
                Select the best browser:<br><br>
                <radio-button v-model="value" id="chrome" name="defaut-radio" fill>Chrome</radio-button><br><br>
                <radio-button v-model="value" id="safari" name="defaut-radio" fill>Safari</radio-button><br><br>
                <radio-button v-model="value" id="firefox" name="defaut-radio" fill>Firefox</radio-button>
            </div>`,
            data() {
                return {
                    value: null
                }
            },
            watch: {
                value: firstArg.action('value')
            }
    }))
    .add('SwitchButton: input', () => ({
        template: '<switch-button @input="handleInput" on="Yes" off="No" rounded></switch-button>',
        methods: {
            handleInput: action('input')
        }
    }))
    .add('SwitchButton: v-model', () => ({
        template: '<switch-button v-model="value" on="Yes" off="No" rounded></switch-button>',
        data() {
            return {
                value: null
            }
        },
        watch: {
            value: firstArg.action('value')
        }
    }));

storiesOf('Addons|Knobs', module)
    .addDecorator(withKnobs)
    .addParameters({
        options: {
            addonPanelInRight: true,
            selectedAddonPanel: 'storybooks/storybook-addon-knobs'
        }
    })
    .add('Button', () => ({
        props: {
            label: {
                type: String,
                default: text('label', 'Button Label 💯')
            },
            rounded: {
                type: Boolean,
                default: boolean('rounded', true)
            },
            primary: {
                type: Boolean,
                default: boolean('primary', false)
            },
            disabled: {
                type: Boolean,
                default: boolean('disabled', false)
            },
            fontSize: {
                type: String,
                default: `${number('font-size', 16, {
                    range: true,
                    min: 0,
                    max: 60,
                    step: 5
                })}px`
            }
        },
        template: `<custom-button :style="{ fontSize }" :rounded="rounded" :primary="primary" :disabled="disabled">{{ label }}</custom-button>`
    }))
    .add('SwitchButton', () => ({
        props: {
            on: {
                type: String,
                default: text('on', 'ON')
            },
            off: {
                type: String,
                default: text('off', 'OFF')
            },
            rounded: {
                type: Boolean,
                default: boolean('rounded', true)
            },
            disabled: {
                type: Boolean,
                default: boolean('disabled', false)
            },
            fontSize: {
                type: String,
                default: `${number('font-size', 16, {
                    range: true,
                    min: 0,
                    max: 60,
                    step: 5
                })}px`
            }
        },
        template: `<switch-button :style="{ fontSize }" :on="on" :off="off" :rounded="rounded" :disabled="disabled"></switch-button>`
    }))
    .add('Input', () => ({
        props: {
            placeholder: {
                type: String,
                default: text('placeholder', 'Place Holder')
            },
            prefix: {
                type: String,
                default: text('prefix', '💲')
            },
            suffix: {
                type: String,
                default: text('suffix', '℉')
            },
            fontSize: {
                type: String,
                default: `${number('font-size', 16, {
                    range: true,
                    min: 0,
                    max: 60,
                    step: 5
                })}px`
            }
        },
        template: '<input-text :style="{ fontSize }" :placeholder="placeholder" :prefix="prefix" :suffix="suffix"/>'
    }));

storiesOf("Addons|Links", module)
    .add('linkTo', () => ({
        template: '<custom-button @click="handleClick" rounded>Go to Welcome</custom-button>',
        methods: {
            handleClick: linkTo('Welcome', 'welcome')
        }
    }));

// Writing Stories using Decorators
// https://storybook.js.org/basics/writing-stories/#using-decorators    
// custom styles
const centerWrapper = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'table',
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    padding: '0.5em'
}
const center = {
    position: 'relative',
    display: 'table-cell',
    verticalAlign: 'middle',
}

//custom decorator using story function
const storyFunction = (storyFn) => {
    const storyFnWrapper = storyFn();
    return {
        components: {storyFnWrapper},
        data(){
            return {
                centerWrapper,
                center
            }
        },
        template: '<div :style="{...centerWrapper}"><div :style="{...center}"><storyFnWrapper/></div></div>'
    }
};
//custom decorator using story component
const storyComponent = () => {
    return {
        data(){
            return {
                centerWrapper: {...centerWrapper, backgroundColor: '#eef'},
                center
            }
        },
        template: '<div :style="{...centerWrapper}"><div :style="{...center}"><story/></div></div>'
    }
};
//custom decorator using custom vue component
import AppDecorator from './AppDecorator';
const vueComponent = () => ({
    components: {AppDecorator},
    template: '<app-decorator><story/></app-decorator>'
});

storiesOf('Customs|Decorator/with story function', module)
    .addDecorator(storyFunction)
    .add('Button', () => ({
        template: '<custom-button rounded>Centered Button</custom-button>'
    }))
    .add('SwitchButton', () => ({
        template: `<switch-button rounded>Centered</switch-button>`
    }));

storiesOf('Customs|Decorator/with story component', module)
    .addDecorator(storyComponent)
    .add('Button', () => ({
        template: '<custom-button rounded>Centered Button</custom-button>'
    }))
    .add('SwitchButton', () => ({
        template: `<switch-button rounded>Centered</switch-button>`
    }));

storiesOf('Customs|Decorator/with vue component', module)
    .addDecorator(vueComponent)
    .add('Button', () => ({
        template: '<custom-button rounded>Centered Button</custom-button>'
    }))
    .add('SwitchButton', () => ({
        template: `<switch-button rounded>Centered</switch-button>`
    }))
