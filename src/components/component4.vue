<template>
  <div :class="['Component4-Container', langCss]">
    <div class="component4TextPart">
      <div class="visionBlock">
        <div class="blockTitle">{{ $t('vision.title') }}</div>
        <div class="blockContent">{{ $t('vision.content') }}</div>
      </div>
      <div class="stragegyBlock">
        <div class="blockTitle">{{ $t('stragegy.title1') }}{{ $t('stragegy.title2') }}</div>
        <div class="blockContent">{{ $t('stragegy.content') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component4-Container',
      start: 'top top',
      end: '+=400%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      scrub: true
    }
  })
  bootTL
    .to('.visionBlock', {
      autoAlpha: 1,
      // y: '-15vmax',
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.visionBlock', {
      autoAlpha: 0,
      // y: '-15vmax',
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.stragegyBlock', {
      autoAlpha: 1,
      duration: 1,
      delay: 1,
      ease: 'sine.inOut'
    })
    .to('.stragegyBlock', {
      autoAlpha: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.visionBlock', {
      y: '-9.5vmax',
      x: '-10vmax',
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .to('.stragegyBlock', {
      y: '5.5vmax',
      x: '10vmax',
      duration: 1,
      delay: 0.5,
      ease: 'sine.inOut'
    })
    .to('.visionBlock', {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to(
      '.stragegyBlock',
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'sine.inOut'
      },
      '<'
    )
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style scoped>
.Component4-Container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  margin-top: 0dvh;
  background: radial-gradient(#ffffff, #e1e6fa 80%);
  overflow: hidden;
}
.component4TextPart {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.visionBlock {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 27.1%;
  visibility: hidden;
  opacity: 0;
}
.stragegyBlock {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 27.1%;
  visibility: hidden;
  opacity: 0;
}

.blockTitle {
  position: relative;
  font-size: 1.5vmax;
  font-family: 'Alibaba-puhui-heavy';
  line-height: 1.5;
  color: #3d51c4;
}
.blockContent {
  position: relative;
  font-family: 'Alibaba-puhui-bold';
  font-size: 2vmax;
  line-height: 1.5;
  color: #53608f;
}
</style>
