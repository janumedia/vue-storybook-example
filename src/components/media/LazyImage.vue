<template>
    <div class="lazy-image">
        <img :src="placeHolder" :alt="alt" :data-src="src" data-pin-nopin="true">
    </div>
</template>
<script>
let observer, options = {
    rootMargin: '0px',
    threshold: 0.1
}, scrollImages = [];

const registerImage = img => {
    //load image placeHolder first
    const image = new Image();
    image.onload = () => {
        if('IntersectionObserver' in window) registerObserver(img);
        //fallback if browser not support IntersectionObserver
        else registerScrollEvent(img);
    }
    image.src = img.src;
}

const registerObserver = img => {
    //create observer once
    if(!observer) {
        observer = new IntersectionObserver(handleIntersection, options); 
    }
    observer.observe(img);
}
const registerScrollEvent = img => {
    scrollImages.push(img);
    if(scrollImages.length > 1) return;
    if('addEventListener' in window) {
        window.addEventListener('scroll', handleScrollEvent);
        window.addEventListener('resize', handleScrollEvent);
    } else {
        window.attachEvent("onscroll", handleScrollEvent);
        window.attachEvent("onresize", handleScrollEvent);
    }
    setTimeout(handleScrollEvent);
}
const unregisterScrollEvent = () => {
    if('removeEventListener' in window) {
        window.removeEventListener('scroll', handleScrollEvent);
        window.removeEventListener('resize', handleScrollEvent);
    } else {
        window.detachEvent("onscroll", handleScrollEvent);
        window.detachEvent("onresize", handleScrollEvent);
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
const handleScrollEvent = () => {
    if(scrollImages.length == 0) unregisterScrollEvent();
    [].slice.call(scrollImages).map(img => {
        if(intersected(img)) {
            scrollImages.splice(scrollImages.indexOf(img), 1);
            loadImage(img);
        }
    });
}
const intersected = (el, scaleAdjustment) => {
    const rect = el.getBoundingClientRect();
    //adjustment is use in case element has scaled using transform:scale
    scaleAdjustment = scaleAdjustment || 0;
    return (
        rect.bottom + scaleAdjustment >= 0 &&
        rect.right + scaleAdjustment >= 0 &&
        rect.top - scaleAdjustment <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left - scaleAdjustment <= (window.innerWidth || document.documentElement.clientWidth)
    )
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
