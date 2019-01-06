<template>
  <div class="welcome">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>Welcome to Vue Storybook Example</h1>
    <p>
      For a guide and recipes on how to configure / customize Storybook Vue,<br>
      check the following links or refer to
      <a href="https://github.com/janumedia/vue-storybook-example" target="_blank" rel="noopener">this source</a>.
    </p>
    <h3>Step by Step Guides</h3>
    <ul>
      <li><a href="https://github.com/janumedia/vue-storybook-example/blob/master/README.md#step-by-step-setup" target="_blank" rel="noopener">installation</a></li>
      <li><a href="https://github.com/janumedia/vue-storybook-example/blob/master/README.md#add-support-to-scss" target="_blank" rel="noopener">scss support</a></li>
      <li><a href="https://github.com/janumedia/vue-storybook-example#resolve-url-path-alias" target="_blank" rel="noopener">url alias</a></li>
      <li><a href="https://github.com/janumedia/vue-storybook-example/blob/master/README.md#vue-router" target="_blank" rel="noopener">vue-router</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://storybook.js.org/basics/introduction/" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://storybook.js.org/examples/" target="_blank" rel="noopener">Examples</a></li>
      <li><a href="https://now-examples-slackin-nqnzoygycp.now.sh/" target="_blank" rel="noopener">Slack</a></li>
      <li><a href="https://github.com/storybooks/storybook" target="_blank" rel="noopener">Contribute</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
a {
  color: #42b983;
}
@media screen and (min-width: 500px) {
    li {
        display: inline-block;
      margin: 0 10px;
    }    
}
</style>
