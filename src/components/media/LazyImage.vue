<template>
    <div class="lazy-image">
        <img :src="placeHolder" :alt="alt" :data-src="src" data-pin-nopin="true">
    </div>
</template>
<script>
let observer, options = {
    rootMargin: '0px',
    threshold: 0.1
};

const registerImage = img => {
    //create observer once
    if(!observer) {
        observer = new IntersectionObserver(handleIntersection, options); 
    }
    //register observer only after placeholder loaded
    img.onload = () => {
        img.onload = null;
        observer.observe(img);
    }
}
const handleIntersection = (entries, observer) => {
    entries.map(entry => {
        if(entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            loadImage(entry.target);
        }
    })
}
const loadImage = img => {
    const src = img.getAttribute('data-src');
    const image = new Image();
    image.onload = () => {
        img.src = src;
    };
    image.onerror = (e) => {
        console.log (e); 
    };
    image.src = src;
}
export default {
    name: 'lazy-image',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
        placeHolder: {
            type: String,
            default: 'assets/image-placeholder.svg'
        }
    },
    mounted() {
        registerImage(this.$el.querySelector('img'));
    }
}
</script>
<style lang="scss" scoped>
.lazy-image {
    img {
        padding: 0;
        margin: 0;
        width: 100%;
    }
}
</style>
