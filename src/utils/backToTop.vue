<template>
  <div class="BackToTop-Container">
    <div class="backToTopButton" @click="backToTop"><div class="backToTopIcon"></div></div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  // const scrollHidingTL = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.routerViewContainer',
  //     start: 'top+=10% top+=10%',
  //     end: 'bottom bottom',
  //     toggleActions: 'play none reverse reverse'
  //     // markers: true
  //   }
  // })
  // scrollHidingTL
  //   .to('.backToTopButton', {
  //     xPercent: -200,
  //     duration: 1,
  //     ease: 'sine.inOut'
  //   })
  //   .to('.backToTopButton', {
  //     delay: 1.5,
  //     xPercent: 0,
  //     duration: 0.25,
  //     ease: 'sine.inOut'
  //   })
})
const backToTop = () => {
  console.log('Click!')
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.BackToTop-Container {
  position: fixed;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  bottom: 0%;
  right: 0%;
  z-index: 100000;
  padding-right: 2.5%;
  padding-left: 2.5%;
  padding-top: 35%;
  overflow: hidden;
  /* pointer-events: none; */
}
.backToTopButton {
  width: 70%;
  aspect-ratio: 1;
  border-radius: 25%;
  background-image: linear-gradient(rgba(164, 185, 255, 0.75), rgba(79, 110, 214, 0.75));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 1s ease-in-out;
  transform: translateX(200%);
  pointer-events: auto;
}
.backToTopIcon {
  width: 60%;
  aspect-ratio: 1;
  background-image: url('@/assets/icon/component/backToTopV2.png');
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0 -5vmax white);
  transform: translateY(5vmax);
}
.BackToTop-Container:hover .backToTopButton {
  transform: translateX(0%) !important;
}
</style>
