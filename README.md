# vue-storybook-example
Storybook.js for Vue example

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bbc08dc-4fda-4263-b558-cd4acfa94825/deploy-status)](https://app.netlify.com/sites/vue-storybook-example/deploys)

[Live Demo](https://vue-storybook-example.netlify.com)

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
 4. Add Storybook run and build scripts to your `package.json`
	 ```
	{
		"scripts": {
			"storybook": "start-storybook -p 9001 -c .storybook -s public",
			"storybook:build": "build-storybook -c .storybook -o .out -s public"
		}
	} 
	```
	 > The **-p** command refer to the port number where the Storybook will be run.  
	 > The **-c** command refer to the config directory.  
	 > The **-o** command refer to directory where to store built files.  
	 > The **-s** command refer to directory to load static / public files
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
11. To build your Storybook
	 ```
	 yarn storybook:build
	 ```
	 > `.out` directory will be created with built files and ready to upload to your hosting server.

## Add Support to SCSS

By default Storybook not support SCSS even project the created using Vue CLI support SCSS or other preprocesor CSS. This is because Storybook use different Webpack. You must extend Storybook Webpack's config by creating `webpack.config.js` inside `.storybook` directory and define SCSS or your other style loader.
```
//.storybook/webpack.config.js
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    return defaultConfig;
};
```

## Resolve URL (Path) Alias

With Vue CLI each time URL started with `@` it will aliases to `<projectRoot>/src`. But since Storybook use different Webpack this URL alias will not work and your existing Vue components will not work. To fix this issue you should define URL alias setup manually by extend Storybook webpack's config.
```
//.storybook/webpack.config.js
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.resolve.alias = {
        ...defaultConfig.resolve.alias,
        "@": path.resolve(__dirname, "../src")
    };
    return defaultConfig;
};
```
## Vue-Router

To enable `vue-router` you can implement `addDecorator` and use [storybook-vue-router](https://github.com/gvaldambrini/storybook-router/tree/master/packages/vue) with the following steps:
1. Add `storybook-vue-router`
   ```
   yarn add -D storybook-vue-router
   ```
2. Add `@storybook/addon-actions` as `storybook-vue-router` require this addons.  
   >**Note:** If you're already installed it you can jump to next step
   ```
   yarn add -D @storybook/addon-actions
   ```
3. Use `storybook-vue-router` as decorator in your stories
   ```
   // .src/stories/index.js
   
   import { storiesOf } from '@storybook/vue'
   import StoryRouter from 'storybook-vue-router'
   
   import App from '@/App'
   
   //import your router
   import router from '@/router'
   
   storiesOf('App', module)
    .addDecorator(StoryRouter({}, router.options))
    .add('app', () => ({
        render: h => h(App)
    }));
   
   ```
4. Read [storybook-vue-router-guide](https://github.com/gvaldambrini/storybook-router/blob/master/packages/vue/README.md)

## Further Reading

[Storybook Quick Start Guide](https://storybook.js.org/basics/quick-start-guide/)

[Storybook for Vue](https://storybook.js.org/basics/guide-vue/)

[Writing Stories](https://storybook.js.org/basics/writing-stories/)

[Custom Webpack Config](https://storybook.js.org/configurations/custom-webpack-config/)

[Using Addons](https://storybook.js.org/addons/using-addons/)
