<template>
  <!-- 主页封面下第四个满屏页面，其编号为04 -->
  <div :class="['Component4-Container', langCss]">
    <div class="component4TextPart">
      <div class="vision">
        <div class="textTitle">{{ $t('vision.title') }}</div>
        <div class="textContent">{{ $t('vision.content') }}</div>
      </div>
      <div class="stragegy">
        <div class="textTitle">{{ $t('stragegy.title') }}</div>
        <div class="textContent">{{ $t('stragegy.content') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arrow from '../utils/circleArrow.vue'
import gsap from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
const slotIndex = ref(3)
var slotChange03: gsap.core.Tween, slotChange04: gsap.core.Tween, slotChange05: gsap.core.Tween

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootImgTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component4-Container',
      start: 'top top',
      end: '+=400%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      scrub: true
    }
  })
  bootImgTL
    .to('.vision', {
      autoAlpha: 1,
      duration: 2,
      ease: 'sine.inOut'
    })
    .to('.vision', {
      autoAlpha: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.stragegy', {
      autoAlpha: 1,
      duration: 2,
      delay: 2,
      ease: 'sine.inOut'
    })
    .to('.stragegy', {
      autoAlpha: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.vision', {
      y: '-6.5vmax',
      xPercent: -50,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.stragegy', {
      y: '6.5vmax',
      xPercent: 50,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.vision', {
      autoAlpha: 1,
      xPercent: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.stragegy', {
      autoAlpha: 1,
      xPercent: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.vision {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}
.stragegy {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}
.zh .stragegy,
.zh .vision {
  padding: 0 34%;
}
.en .stragegy,
.en .vision {
  padding: 0 25%;
}
.zh .textTitle {
  font-family: 'Alibaba-puhui-bold';
}
.zh .textContent {
  font-family: 'Alibaba-puhui-medium';
}
.textTitle {
  font-family: 'Inter-bold';
  font-size: 1vmax;
  text-transform: uppercase;
  color: #53608f;
}
.textContent {
  font-family: 'Inter-medium';
  font-size: 2vmax;
  color: #3d51c4;

  line-height: 1.5;
  justify-content: center;
}
</style>
