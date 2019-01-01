# vue-storybook-example
Storybook.js for Vue example

### Step by step setup

1. Create Vue project using Vue CLI:
```
vue create your-app
```
2. Add `@storybook/vue`
```
yarn add --dev @storybook/vue
```
3. Add `babel-preset-vue`
```
yarn add --dev babel-preset-vue
```
4. Create run script to your `package.json` where `-p` refer to port number and `-c` to config directory
```
{
    "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook"
    }
}
```
5. Create `.storybook` folder as the config directory
6. Create `.storybook/config.js` as config file
```
import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // import vuex if you're using vuex

// Import your custom components.
import Mybutton from '../src/stories/Button.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
// This will registered your component and available to use in your Storybook stories
Vue.component('my-button', Mybutton);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories');
}

configure(loadStories, module);
```
7. Create `../src/stories` folder inside src directory
8. Write your stories inside `../src/stories/index.js`
```
import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('MyButton', module)
    .add('story as a template', () => (
      '<my-button :rounded="true">story as a function template</my-button>'
    )
    .add('story as a component', () => ({
        components: { MyButton },
        template: '<my-button :rounded="true">rounded</my-button>'
    }));
```
9. Run your Storybook
```
yarn storybook
```

### Further Reading
[Storybook Quick Start Guide](https://storybook.js.org/basics/quick-start-guide/)

[Storybook for Vue](https://storybook.js.org/basics/guide-vue/)

[Writing Stories](https://storybook.js.org/basics/writing-stories/)