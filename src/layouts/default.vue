<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/setup">Setup</router-link>
            <router-link to="/404">404</router-link>
        </div>
        <div class="page-content">
            <slot/>
        </div>
    </div>
</template>
