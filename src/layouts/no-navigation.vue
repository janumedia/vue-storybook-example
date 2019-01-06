<template>
    <div id="app">
        <div class="page-content vertical-center">
            <slot/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#app {
    height: 100vh;
    width: 100hw;
    position: relative;
}
.vertical-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

