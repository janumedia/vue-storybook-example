<template>
    <div class="centerWrapper">
        <div class="center"><slot/></div>
    </div>
</template>
<style lang="scss" scoped>
.centerWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
    padding: 0.5em;
    background-color: yellow;
}
.center {
    position: relative;
    display: table-cell;
    vertical-align: middle;
}
</style>
