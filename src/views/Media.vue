<template>
    <div>
        <div>
            <icon-google-color width="30" height="30"/>
            <icon-facebook-block-color width="30" height="30"/>
            <icon-twitter-color width="30" height="30"/>
            <icon-instagram-color width="30" height="30"/>
        </div>
        <br>
        <VideoPlayer style="width:600px;">
            <source src="https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4" type="video/mp4">
            <track label="English" kind="subtitles" srclang="en" src="/video/sintel/captions.vtt" default>
            <track kind="metadata" label="sintel" src="/video/sintel/thumbs.vtt" default>
            Video Type Not Supported!!!
        </VideoPlayer>
        <br><br>
        <div>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fpeguyangan-waterfall-3.jpg?alt=media&token=82e2b880-f354-468e-a857-f341a108e239"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fklingking-beach.jpg?alt=media&token=0608592e-0bca-43ce-b535-857065b67ef5"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fangel-billabong.jpg?alt=media&token=9d4b2f99-3667-464e-9d6a-5c4b6850bf84"/><br>
            <lazy-image placeHolder="images/image-placeholder-example.jpg" src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fbroken-beach.jpg?alt=media&token=d5c744e6-9fd4-4df0-8552-03659675f6d7"/><br>
            <lazy-image src="https://firebasestorage.googleapis.com/v0/b/nuxt-web-template.appspot.com/o/slides%2Fcrystal-bay-beach-2.jpg?alt=media&token=be8ffb8f-17e9-4b85-bf4a-9dff7f38348a"/>
        </div>
    </div>
</template>
<script>
import LazyImage from '@/components/media/LazyImage'
import {IconGoogleColor, IconFacebookBlockColor, IconTwitterColor, IconInstagramColor} from '@/components/media/Icon'
import VideoPlayer from '@/components/media/VideoPlayer'
export default {
    components: {
        LazyImage,
        IconGoogleColor, IconFacebookBlockColor, IconTwitterColor, IconInstagramColor,
        VideoPlayer
    }
}
</script>
