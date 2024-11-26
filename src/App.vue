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
  font-family: 'alibaba-puhui-regular';
  src: url('@/assets/font/Alibaba-PuHuiTi-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'alibaba-puhui-medium';
  src: url('@/assets/font/Alibaba-PuHuiTi-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'alibaba-puhui-light';
  src: url('@/assets/font/Alibaba-PuHuiTi-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'alibaba-puhui-heavy';
  src: url('@/assets/font/Alibaba-PuHuiTi-Heavy.ttf') format('truetype');
}
@font-face {
  font-family: 'alibaba-puhui-bold';
  src: url('@/assets/font/Alibaba-PuHuiTi-Bold.ttf') format('truetype');
}
* {
  /* word setting */
  font-family: 'alibaba-puhui-regular';

  word-break: normal;
  word-wrap: break-word;
  /* color */
  --mainColor: #9aafad;
  --supportColor: #e4eaea;
  /* Scroll Smoother */
  /* scroll-behavior: smooth; */
}
</style>
