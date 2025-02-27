<script setup lang="ts">
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

lenis.on('scroll', () => ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
</script>

<template>
  <div>
    <RouterView class="routerViewContainer" />
  </div>
</template>

<style scoped>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: unset !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>

<style>
/* background */
.backgroundCover {
  background-repeat: no-repeat;
  background-size: cover;
}
/* font */
@font-face {
  font-family: 'Alibaba-puhui-regular';
  font-display: swap;
  src: url('@/assets/font/Alibaba-PuHuiTi-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Alibaba-puhui-medium';
  font-display: swap;
  src: url('@/assets/font/Alibaba-PuHuiTi-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Alibaba-puhui-light';
  font-display: swap;
  src: url('@/assets/font/Alibaba-PuHuiTi-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Alibaba-puhui-heavy';
  font-display: swap;
  src: url('@/assets/font/Alibaba-PuHuiTi-Heavy.ttf') format('truetype');
}
@font-face {
  font-family: 'Alibaba-puhui-bold';
  font-display: swap;
  src: url('@/assets/font/Alibaba-PuHuiTi-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'LibreBaskerville';
  font-display: swap;
  src: url('@/assets/font/LibreBaskerville-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Crimson';
  font-display: swap;
  src: url('@/assets/font/CrimsonText-SemiBold-6.ttf') format('truetype');
}
@font-face {
  font-family: 'CrimsonItalic';
  font-display: swap;
  src: url('@/assets/font/CrimsonText-SemiBoldItalic-7.ttf') format('truetype');
}

@font-face {
  font-family: 'SiYuanSongExtraLight';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-ExtraLight.ttf') format('truetype');
}
@font-face {
  font-family: 'SiYuanSongLight';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'SiYuanSongRegular';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'SiYuanSongMedium';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'SiYuanSongSemiBold';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'SiYuanSongBold';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'SiYuanSongHeavy';
  font-display: swap;
  src: url('@/assets/font/SourceHanSerifCN-Heavy.ttf') format('truetype');
}
body {
  /* word setting */
  font-family: 'Alibaba-puhui-regular';
}
* {
  word-break: normal;
  word-wrap: break-word;
  /* color */
  --mainColor: #9aafad;
  --supportColor: #e4eaea;
  /* Scroll Smoother */
  /* scroll-behavior: smooth; */
}
</style>
