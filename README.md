# vue-storybook-example
Storybook.js for Vue example

## Step by step setup
> This Storybok example is based on Vue CLI 3.0, some libraries required by Storybook are already installed by Vue CLI except  `babel-preset-vue` that you should install it manually.

 1. Create Vue project using Vue CLI
	 ```
	 vue create your-app
	 cd your-app
	 ```
 2. Add `@storybook/vue`
	 ```
	 yarn add --dev @storybook/vue
	 ```
 3. Add `babel-preset-vue`
	 ```
	 yarn add --dev babel-preset-vue
	 ```
 4. Add Storybook run script to your `package.json`
	 ```
	{
		"scripts": {
			"storybook": "start-storybook -p 9001 -c .storybook"
		}
	} 
	```
	 > The **-p** command refer to the port number where the Storybook will be run in your localhost.
	 > The **-c** command refer to the config directory
 5. Create `.storybook` directory as the config directory
 6. Create `.storybook/config.js` as config file
	 ```
	 import { configure } from '@storybook/vue'
	 import Vue from 'vue'
	 
	 // import your vue plugins
	 import Vuex from 'vuex'
	 
	 // import your custom components
	 import Button from '../src/stories/Button.vue'
	 
	 // install your vue plugins
	 Vue.use(Vuex);
	 // register your custom components
	 Vue.component('my-button', Button);
	 function loadStories() {
		 // you can require as many stories as you need
		 require('../src/stories');
	 }
	 configure(loadStories, module);
	 ```
	 > **Note**: All custom components and Vue plugins should be registered before calling  `configure()`.
 7. Create `../src/stories` directory as the place your Storybook stories
 8. Write your stories inside `../src/stories/index.js`
	 ```
	 import Vue from 'vue'
	 import { storiesOf } from '@storybook/vue'
	 import Button from './Button.vue'
	 storiesOf('Button', module)
	 .add('Button as a template', () => (
		 '<my-button>button as template</my-button>'
	 )
	 add('Button as a component', () =>({
		 components: {'the-button': Button},
		 template: '<the-button>button as component</the-button>'
	 }));
	 ```
 9. Write your custom component, in this case `../src/stories/Button.vue`
	 ```
	 <template>
		 <button><slot/></button>
	 </template>
	 ``` 
 10. Run your Storybook
	 ```
	 yarn storybook
	 ```

## Further Reading
[Storybook Quick Start Guide](https://storybook.js.org/basics/quick-start-guide/)

[Storybook for Vue](https://storybook.js.org/basics/guide-vue/)

[Writing Stories](https://storybook.js.org/basics/writing-stories/)