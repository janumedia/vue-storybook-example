<script>
import Button from '@/components/core/ButtonWrapper'
import * as Icons from '@/components/media/Icon'

export default {
    components: {
        Button,
        ...Icons
    },
    data(){
        return {
            isPlaying: false,
            isFullscreen: false,
            isMuted: false,
            subtitlesState: -1,
            timeoutID: null,
            videoDuration: "00:00",
            videoCurrentTime: "00:00",
            videoSeek: "00:00"
        }
    },
    computed: {
        video() {
            return this.$el.querySelector('video');
        },
        videoOverlay() {
            return this.$el.querySelector('.video-overlay');
        },
        bufferBar() {
            return this.$el.querySelector('.progress-buffer-bar');
        },
        progressBar() {
            return this.$el.querySelector('.progress-elapse-bar');
        },
        subtitlesTracks() {
            return Object.keys(this.video.textTracks).map(index => this.video.textTracks[index]).filter(item => item.kind == 'subtitles');
        },
        metadataTracks() {
            return Object.keys(this.video.textTracks).map(index => this.video.textTracks[index]).filter(item => item.kind == 'metadata');
        }
    },
    mounted() {
        this.subtitlesState = this.video.textTracks.length > 0 ? 0 : -1;
        window.addEventListener('keydown', this.keydownHandler, false);
        window.addEventListener('webkitfullscreenchange', this.fullscreenHandler, false);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.keydownHandler);
        window.removeEventListener('webkitfullscreenchange', this.fullscreenHandler);
    },
    methods: {
        convertTime(time){
            const HOUR = 60 * 60;
            const MINUTE = 60;

            let minutesInSeconds = time % HOUR;
            let hours = Math.floor(time / HOUR);
            let minutes = Math.floor(minutesInSeconds / MINUTE)
            let seconds = (minutesInSeconds % MINUTE).toFixed(0);
            if(seconds.length < 2) seconds = "0" + seconds;

            if(hours > 0) return hours + ':' + minutes + ':' + seconds;
            return minutes + ':' + seconds;
        },
        handleMouseVideoOverlay(e) {
            if(e.type === 'mousemove') {
                clearTimeout(this.timeoutID);
                this.timeoutID = setTimeout(() => {
                    this.videoOverlay.setAttribute('data-state', 'leave');
                }, 3000);
            }
            this.videoOverlay.setAttribute('data-state', e.type === 'mousemove' ? 'hover' : 'leave');
        },
        handlePreviewThumb(e){
            const thumb = this.$el.querySelector('.video-thumb-preview');
            const seek = this.$el.querySelector('.video-seek-label');

            if(e.type === 'mousemove') {

                let {x, width} = e.target.getBoundingClientRect();
                let time = (e.clientX - x) * this.video.duration / width;
                if(time < 0) time = 0; 

                this.videoSeek = this.convertTime(time);

                seek.style.left = `${(e.target.offsetLeft + e.clientX - x - seek.getBoundingClientRect().width * 0.5)}px`;
                seek.style.visibility = 'visible';
                
                if(this.metadataTracks.length == 0) return;

                let {cues} = this.metadataTracks[0];
                const cue = Object.keys(cues).map(index => cues[index]).find(item => item.startTime <= time && item.endTime > time);
                if(!cue) return;
                const src = this.video.querySelector('track[kind="metadata"]').src;
                const xywh = cue.text.substr(cue.text.indexOf("=")+1).split(',');
                thumb.style.backgroundImage = `url(${src.substr(0, src.lastIndexOf("/"))}/${cue.text.split('#')[0]})`;
                thumb.style.backgroundPosition = `-${xywh[0]}px -${xywh[1]}px`;
                thumb.style.left = `${(e.target.offsetLeft + e.clientX - x - xywh[2] * 0.5)}px`;
                thumb.style.width = `${xywh[2]}px`;
                thumb.style.height = `${xywh[3]}px`;
                thumb.style.visibility = 'visible';
            } else {
                thumb.style.visibility = 'hidden';
                seek.style.visibility = 'hidden';
            }
        },
        handleVideoLoaded(e){
            this.videoDuration = this.convertTime(this.video.duration);
            this.videoOverlay.setAttribute('data-state', 'hover');
        },
        handlePlaying() {
            this.isPlaying = true;
        },
        handlePause() {
            this.isPlaying = false;
        },
        handleSeek(e) {
            console.log(e.type)
        },
        handleProgress(e) {
            if(e.type == 'timeupdate') {
                this.videoDuration = this.convertTime(this.video.duration);
                this.videoCurrentTime = this.convertTime(this.video.currentTime);
                let percentage = (this.video.currentTime * 100) / this.video.duration;
                this.progressBar.style.width = `${percentage}%`;
            } else {
                if(this.video.buffered.length > 0) {
                    let i = 0, newBuffer = 0;
                    /*while(i < this.video.buffered.length) {
                        newBuffer += this.video.buffered.end(i) - this.video.buffered.start(i)
                        i++;
                    }*/
                    newBuffer = this.video.buffered.end(this.video.buffered.length-1) - this.video.buffered.start(0);
                    let percentage = (newBuffer * 100) / this.video.duration;
                    this.bufferBar.style.width = `${percentage}%`;
                }
            }
        },
        handleProgressBarClick(e) {
            let bar = this.$el.querySelector('.progress-duration-bar');
            let {x, width} = bar.getBoundingClientRect();
            this.video.currentTime = (e.clientX - x) / width * this.video.duration;
        },
        handledEnded(){
            this.videoOverlay.setAttribute('data-state', 'hover');
            //hide subtitles
            this.subtitlesTracks.map(item => item.mode = 'hidden');
        },
        toggleMute() {
            this.video.muted = !this.video.muted;
            this.isMuted = this.video.muted; 
        },
        toggleSubtitles() {
            if(this.subtitlesTracks.length == 0) return;
            this.subtitlesState = this.subtitlesState == 0 ? 1 : 0;
            this.subtitlesTracks.map((item, index) => {
                if(index == 0) item.mode = this.subtitlesState == 0 ? 'showing' : 'hidden';
                else item.mode = 'hidden';
            });
        },
        toggleFullscreen() {
            if(!document.webkitIsFullScreen) this.$el.webkitRequestFullscreen();
            else document.exitFullscreen();
        },
        fullscreenHandler() {
            this.isFullscreen = document.webkitIsFullScreen;
        },
        keydownHandler(e) {
            //console.log(e.code);
            //disable keyHandler when typing
            if(e.srcElement !== document.querySelector('body')) return;
            switch(e.code) { 
                case 'Space': case 'KeyK':
                    if(this.video.paused) this.video.play();
                    else this.video.pause();
                    break;
                case 'KeyR':
                    if(this.video.currentTime >= 10) this.video.currentTime -= 10;
                    else this.video.currentTime = 0;
                    break;
                case 'ArrowLeft':
                    if(this.video.currentTime >= 0.1) this.video.currentTime -= 0.1;
                    this.video.pause();
                    break;
                case 'ArrowRight':
                    if(this.video.currentTime < this.video.duration) this.video.currentTime += 0.1;
                    this.video.pause();
                    break;
                case "KeyM":
                    this.toggleMute();
                    break;
                case "KeyC":
                    this.toggleSubtitles();
                    break;
                case "KeyF":
                    this.toggleFullscreen();
                    break;
            }
            e.preventDefault();
        }
    }
}
</script>
<template>
    <div class="video-player">
        <video controlsList="nodownload"
            @loadeddata="handleVideoLoaded"
            @timeupdate="handleProgress"
            @progress="handleProgress"
            @playing="handlePlaying"
            @pause="handlePause"
            @seeking="handleSeek"
            @seeked="handleSeek"
            @ended="handledEnded"
        >
            <slot/>
        </video>
        <div class="video-overlay" @mousemove="handleMouseVideoOverlay" @mouseleave="handleMouseVideoOverlay">
            <div class="video-controller-top">
                <Button title="Share">
                    <icon-share class="icon"/>
                </Button>
                <Button title="Subtitles Off (c)" @click="toggleSubtitles" v-show="subtitlesState == 0">
                    <icon-subtitles-on class="icon"/>
                </Button>
                <Button title="Subtitles On (c)" @click="toggleSubtitles" v-show="subtitlesState == 1">
                    <icon-subtitles-off class="icon"/>
                </Button>
                <Button title="Fullscreen (f)" @click="toggleFullscreen" v-show="!isFullscreen">
                    <icon-fullscreen class="icon"/>
                </Button>
                <Button title="Exit Fullscreen (f)" @click="toggleFullscreen" v-show="isFullscreen">
                    <icon-fullscreen-exit class="icon"/>
                </Button>
            </div>
            <div class="video-controller-bottom">
                <span class="video-thumb-preview"></span>
                <span class="video-seek-label">{{videoSeek}}</span>
                <div class="table-row">
                    <Button title="Play (k)" @click.native="video.play()" v-show="!isPlaying">
                        <icon-play-arrow class="icon"/>
                    </Button>
                    <Button title="Pause (k)" @click.native="video.pause()" v-show="isPlaying">
                        <icon-pause class="icon"/>
                    </Button>
                    <Button title="Rewind (r)" @click.native="video.currentTime -= 10">
                        <icon-replay-10 class="icon"/>
                    </Button>
                    <span class="progress-bar" @click="handleProgressBarClick" @mousemove="handlePreviewThumb" @mouseout="handlePreviewThumb">
                        <span class="progress-duration-bar">
                            <span class="progress-buffer-bar"></span>
                            <span class="progress-elapse-bar"></span>
                        </span>
                    </span>
                    <span class="video-time">
                        <span>{{videoCurrentTime}} / {{videoDuration}}</span>
                    </span>
                    <Button title="Mute (m)" @click="toggleMute" v-show="!isMuted">
                        <icon-volume-up class="icon"/>
                    </Button>
                    <Button title="Unmute (m)" @click="toggleMute" v-show="isMuted">
                        <icon-volume-off class="icon"/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

*, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

video::-webkit-media-controls {
    display: none !important;
}

.video-player {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    background-color: #000;
    //width: 600px;
    //height: 400px;
    video {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .video-overlay {
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        opacity: 0;
        transition-duration: 0.5s;
        &[data-state='hover'] {
            opacity: 1;
        }
    }
    .video-thumb-preview {
        display:block;
        position: absolute;
        bottom: 60px;
        visibility: hidden;
    }
    .video-seek-label{
        display:block;
        position: absolute;
        color: rgba(255, 255, 255, 0.815);
        background-color:rgba(0, 0, 0, 0.5);
        font-size: 0.8em;
        padding: 0.2em 0.5em;
        bottom: 50px;
        user-select: none;
        visibility: hidden;
    }
    .video-time {
        color: rgba(255, 255, 255, 0.815);
        display: inline-block;
        vertical-align: middle;
        font-size: 0.8em;
        padding: 0.5em;
        user-select: none;
    }
    .video-controller-top,
    .video-controller-bottom {
        width: 100%;
        display: table;
        border-spacing: 4px 0;
        white-space: nowrap;
    }
    .video-controller-top {
        text-align: right;
        padding: 14px 20px 0;
    }
    .video-controller-bottom {
        text-align: left;
        position: absolute;
        bottom: 0;
        padding: 0 20px 14px;
    }
}

.table-row {
    display: table-row;
}

.progress-bar {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    cursor: pointer;
    &:hover > .progress-duration-bar {
        height: 4px;
    }
}
.progress-duration-bar {
    display: block;
    background-color: rgba(114, 113, 113, 0.733);
    width: 100%;
    height: 2px;
    .progress-buffer-bar {
        display: block;
        float: left;
        background-color: rgba(255, 255, 255, 0.2);
        width: 0%;
        height: inherit;
    }
    .progress-elapse-bar {
        display: block;
        background-color: rgba(139, 84, 228, 0.842);
        width: 0%;
        height: inherit;
    }
}

/* WebVTT cues */
::cue { 
	font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.4);
}

button {
    display: table-cell;
    //display: block;
}

.icon {
    fill: rgba(255, 255, 255, 0.815) !important;
    height: 30px !important;
    width: 30px !important;
    //display: table-cell;
}
</style>
