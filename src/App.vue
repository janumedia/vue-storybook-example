<template>
  <div id="wrapper">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>

export default {
  name: 'app',
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
    padding: 0 0.5em;
    &:hover,
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
  a:not(:last-of-type) {
    border-right: 2px solid #42b983;
  }
}
</style>
