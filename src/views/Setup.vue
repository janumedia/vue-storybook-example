<template>
    <div>
        <h1>Setup Page</h1>
        <div class="setup">
            <h4>Your favorite fruits</h4>
            <ul>
                <li v-for="(item, index) in checkboxs" :key="index"><checkbox :id="index" fill>{{ item }}</checkbox></li>
            </ul>
            <h4>The best browser</h4>
            <ul>
                <li v-for="(item, index) in radios" :key="index"><radio-button :id="index" name="radios" fill>{{ item }}</radio-button></li>
            </ul>
            <h4>Allow cookies</h4>
            <switch-button on="Yes" off="No" rounded></switch-button>
            <h4>Annual tax</h4>
            <input-text prefix="💲" type="number" style="width: 200px"/>
            <br>
            <br>
            <custom-button rounded primary>Save Setup</custom-button>
            <br>
            <br>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkboxs: ["Manggo", "Apple", "Banana"],
            radios: ["Chrome", "Safari", "Opera", "Firefox", "Edge"]
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_reset.scss";
.setup {
    display: inline-block;
    text-align: left;
}
li {
    padding: 0.4em;
}
@media screen and (min-width: 500px) {
    li {
        display: inline;
    }    
}
</style>

