<template>
  <!-- 主页封面 -->
  <div :class="['Cover-Container', langCss]">
    <div class="leftCorner corner"></div>
    <div class="rightCorner corner"></div>
    <div class="sloganContainer">
      <div class="slogan">
        <span class="sloganText">{{ $t('slogan.sloganLine1') }}</span>
      </div>
      <div class="slogan">
        <span class="sloganText">{{ $t('slogan.sloganLine2') }}</span>
      </div>
    </div>
    <div class="subSloganContainer">
      <div class="subSlogan">{{ $t('subSlogan') }}</div>
    </div>

    <!-- <arrow class="arrowLink" :themeColor="'white'">Learn More</arrow> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import arrow from '../utils/circleArrow.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Cover-Container',
      start: 'top-=30% top',
      toggleActions: 'play pause resume reset'
    }
  })
  bootTL
    .from('.slogan', {
      autoAlpha: 0,
      yPercent: -100,
      duration: 0.5,
      ease: 'sine.in',
      stagger: 0.1
    })
    .to('.arrowLink', {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'sine.in'
    })
    .to('.arrowLink', {
      pointerEvents: 'auto',
      duration: 0.01,
      ease: 'none'
    })

  const quitTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Cover-Container',
      start: 'top+=40% top',
      end: '+=30%',
      // scrub: 0.5,
      // markers: true,
      toggleActions: 'play complete reverse reset'
    }
  })

  quitTL
    .to('.arrowLink', {
      pointerEvents: 'none',
      duration: 0.01,
      ease: 'none'
    })
    .to('.arrowLink', {
      autoAlpha: 0,
      duration: 0.5,
      ease: 'sine.out'
    })
    .to('.slogan', {
      autoAlpha: 0,
      yPercent: 100,
      duration: 0.5,
      ease: 'sine.out',
      stagger: 0.1
    })

  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Cover-Container',
      start: 'top+=40% top',
      end: '+=60%',
      scrub: 0.5
    }
  })

  scrollTL.to('.Navigation-BG-Container', {
    y: '-10vmax',
    duration: 0.25,
    ease: 'sine.inOut'
  })
  // const gearTL = gsap.to('.gear', {
  //   rotate: '360deg',
  //   duration: 1,
  //   stagger: {
  //     repeat: -1,
  //     each: 0.45
  //   },

  //   ease: 'none'
  // })
  // const robotHandTopTL = gsap
  //   .timeline()
  //   .to('.robotHandTopFinger', {
  //     yPercent: 20,
  //     duration: 0.25,
  //     ease: 'sine.in',
  //     delay: 1.5
  //   })
  //   .to('.robotHandTopFinger', {
  //     yPercent: 0,
  //     duration: 0.125,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandTopFinger', {
  //     yPercent: 20,
  //     duration: 0.1,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandTopFinger', {
  //     yPercent: 0,
  //     duration: 0.075,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandTopFinger', {
  //     yPercent: 20,
  //     duration: 0.1,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandTopFinger', {
  //     yPercent: 0,
  //     duration: 0.075,
  //     ease: 'sine.in'
  //   })
  // const robotHandBottomTL = gsap
  //   .timeline()
  //   .to('.robotHandBottomFinger', {
  //     yPercent: -20,
  //     duration: 0.25,
  //     ease: 'sine.in',
  //     delay: 1.5
  //   })
  //   .to('.robotHandBottomFinger', {
  //     yPercent: 0,
  //     duration: 0.1,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandBottomFinger', {
  //     yPercent: -15,
  //     duration: 0.075,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandBottomFinger', {
  //     yPercent: 0,
  //     duration: 0.125,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandBottomFinger', {
  //     yPercent: -15,
  //     duration: 0.075,
  //     ease: 'sine.in'
  //   })
  //   .to('.robotHandBottomFinger', {
  //     yPercent: 0,
  //     duration: 0.125,
  //     ease: 'sine.in'
  //   })
})
</script>

<style scoped>
img {
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.Cover-Container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 110dvh;
  background: linear-gradient(to bottom, hsla(227, 100%, 80%, 0.067), hsla(227, 80%, 20%, 0.733)),
    url('@/assets/BGImg/roboticArm.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 12.5% 10%;
  padding-top: min(10vmax, 10%);
  backdrop-filter: blur(10px);
}
.corner {
  box-sizing: border-box;
  position: absolute;
  width: 12.5%;
  aspect-ratio: 1;
  background-color: hsla(47, 50%, 50%, 0.733);
  mix-blend-mode: exclusion;
  /* border-radius: 3vmax; */
}
.leftCorner {
  top: 5vmax;
  left: 5%;
  -webkit-clip-path: polygon(25% 100%, 0 100%, 0 0, 100% 0, 100% 25%, 25% 25%);
  clip-path: polygon(25% 100%, 0 100%, 0 0, 100% 0, 100% 25%, 25% 25%);
}
.rightCorner {
  /* top: 85%;
  left: 95%; */
  top: 37.5vmax;
  left: 80%;
  -webkit-clip-path: polygon(0 100%, 0 75%, 75% 75%, 75% 0, 100% 0, 100% 100%);
  clip-path: polygon(0 100%, 0 75%, 75% 75%, 75% 0, 100% 0, 100% 100%);
}
.sloganContainer {
  overflow: hidden;
  height: 70%;
  display: flex;
  margin-top: 5%;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
}
.subSloganContainer {
  overflow: hidden;
}
.zh .sloganContainer {
  width: 60%;
  height: 60%;
  margin-top: 7.5%;
}
.zh .slogan {
  line-height: 1.25;
  font-size: 8.5vmax;
  width: 100%;
  font-family: 'Alibaba-puhui-heavy';
}
.slogan {
  display: flex;
  width: 70%;
  height: fit-content;
  position: relative;
  font-family: 'Inter-heavy';
  text-transform: uppercase;
  font-size: 6vmax;
  color: white;
  line-height: 1;
  text-shadow: 0 0 1rem #07363277;
}

.sloganText {
  vertical-align: middle;
}
.subSlogan {
  width: 100%;
  height: fit-content;
  position: relative;
  font-family: 'LibreBaskerville';
  font-size: 1vmax;
  line-height: 1.5;
  color: hsl(231, 53%, 25%);
  padding: 0 0.5%;
  margin: 0.25% 0 0%;
  text-transform: uppercase;
  /* text-shadow: none; */
  text-shadow: 0vmax 0.2vmax 0.1vmax hsla(231, 53%, 75%, 1);
}
.zh .subSlogan {
  font-size: 1.2vmax;
  letter-spacing: 3vmax;
  font-family: 'SiYuanSongBold';
}
.en .subSlogan {
  letter-spacing: 0.5vmax;
}
.arrowLink {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  font-family: 'Inter-bold';
}

.gearContainer {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 7.5vmax;
  height: 7.5vmax;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: 0 -1vmax;
  /* width: 100%;
  height: 100%; */
}

.gear,
.robotHand {
  position: absolute;
  width: 5vmax;
  aspect-ratio: 1;
}

.robotHand {
  --rotationDegree: 0deg;
  --translateY: 0%;
}
.robotHandBottomFinger {
  transform-origin: center bottom;
  transform: rotate(calc(-1 * var(--rotationDegree))) translateY(calc(-1 * var(--translateY)));
}
.robotHandTopFinger {
  transform-origin: center top;
  transform: rotate(var(--rotationDegree)) translateY(var(--translateY));
}
</style>
