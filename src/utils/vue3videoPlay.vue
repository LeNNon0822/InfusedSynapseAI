<template>
  <div class="videoPlayContainer">
    <vue3VideoPlay v-bind="options" />
  </div>
</template>

<script setup lang="ts">
import 'vue3-video-play/dist/style.css'
import { videoPlay } from 'vue3-video-play'
import { reactive, ref } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  videoUrl: String
})
const videoSrc = new URL(`${props.videoUrl}`, import.meta.url).href
const options = reactive({
  width: '768px', //播放器宽度
  height: '432px', //播放器高度
  color: '#EB3D25', //主题色
  title: '', //视频名称
  src: videoSrc, //视频源
  muted: false, //静音
  webFullScreen: false, //网页全屏
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
  autoPlay: false, //自动播放
  loop: true, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: false, //是否显示控制
  controlBtns: [
    'audioTrack',
    'quality',
    'speedRate',
    'volume',
    'setting',
    'pip',
    'pageFullScreen',
    'fullScreen'
  ] //显示所有按钮,
})
</script>

<style scoped>
.videoPlayContainer {
  display: flex;
  width: auto;
  height: auto;
}
</style>
