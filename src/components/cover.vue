<template>
  <div class="Cover-Container">
    <div class="leftCorner corner"></div>
    <div class="rightCorner corner"></div>
    <div class="sloganContainer">
      <div class="slogan">
        <span class="sloganText">Building Universal </span>
      </div>
      <div class="slogan">
        <span class="sloganText">Purpose R</span>
        <span class="gearContainer">
          <img
            loading="lazy"
            decoding="sync"
            fetchpriority="high"
            class="gear"
            src="@/assets/icon/component/gear.png"
            alt=""
        /></span>
        <span class="sloganText">b</span
        ><span class="gearContainer">
          <img
            loading="lazy"
            decoding="sync"
            fetchpriority="high"
            class="gear secondGear"
            src="@/assets/icon/component/gear.png"
            alt="" /></span
        ><span>ti</span>
        <span class="gearContainer">
          <img
            loading="lazy"
            decoding="sync"
            fetchpriority="high"
            class="robotHand robotHandTopFinger"
            src="@/assets/icon/component/robotHandTopFinger.png"
            alt=""
          />
          <img
            loading="lazy"
            decoding="sync"
            fetchpriority="high"
            class="robotHand robotHandBottomFinger"
            src="@/assets/icon/component/robotHandBottomFinger.png"
            alt=""
          />
          <img
            loading="lazy"
            decoding="sync"
            fetchpriority="high"
            class="robotHand"
            src="@/assets/icon/component/robotHandCenter.png"
            alt=""
          />
        </span>
      </div>
      <div class="slogan">
        <span class="sloganText">Intelligence</span>
      </div>
    </div>
    <div class="sloganContainer">
      <div class="subSlogan slogan">for autonomous decision-making and learning</div>
    </div>

    <arrow class="arrowLink" :themeColor="'white'">Learn More</arrow>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import arrow from '@/utils/circleArrow.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
      markers: true,
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
  const gearTL = gsap.to('.gear', {
    rotate: '360deg',
    duration: 1,
    stagger: {
      repeat: -1,
      each: 0.45
    },

    ease: 'none'
  })
  const robotHandTopTL = gsap
    .timeline()
    .to('.robotHandTopFinger', {
      yPercent: 20,
      duration: 0.25,
      ease: 'sine.in',
      delay: 1.5
    })
    .to('.robotHandTopFinger', {
      yPercent: 0,
      duration: 0.125,
      ease: 'sine.in'
    })
    .to('.robotHandTopFinger', {
      yPercent: 20,
      duration: 0.1,
      ease: 'sine.in'
    })
    .to('.robotHandTopFinger', {
      yPercent: 0,
      duration: 0.075,
      ease: 'sine.in'
    })
    .to('.robotHandTopFinger', {
      yPercent: 20,
      duration: 0.1,
      ease: 'sine.in'
    })
    .to('.robotHandTopFinger', {
      yPercent: 0,
      duration: 0.075,
      ease: 'sine.in'
    })
  const robotHandBottomTL = gsap
    .timeline()
    .to('.robotHandBottomFinger', {
      yPercent: -20,
      duration: 0.25,
      ease: 'sine.in',
      delay: 1.5
    })
    .to('.robotHandBottomFinger', {
      yPercent: 0,
      duration: 0.1,
      ease: 'sine.in'
    })
    .to('.robotHandBottomFinger', {
      yPercent: -15,
      duration: 0.075,
      ease: 'sine.in'
    })
    .to('.robotHandBottomFinger', {
      yPercent: 0,
      duration: 0.125,
      ease: 'sine.in'
    })
    .to('.robotHandBottomFinger', {
      yPercent: -15,
      duration: 0.075,
      ease: 'sine.in'
    })
    .to('.robotHandBottomFinger', {
      yPercent: 0,
      duration: 0.125,
      ease: 'sine.in'
    })
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
  padding: 15% 10%;
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
}
.slogan {
  display: flex;
  width: 100%;
  height: fit-content;
  position: relative;
  font-family: 'alibaba-puhui-heavy';
  text-transform: uppercase;
  font-size: 7.5vmax;
  color: white;
  line-height: 1;
  text-shadow: 0 0 1rem #07363277;
}
.sloganText {
  vertical-align: middle;
}
.subSlogan {
  width: 70%;
  height: fit-content;
  position: relative;
  font-family: 'alibaba-puhui-light';
  font-size: 1vmax;
  line-height: 1.5;
  color: hsl(228, 50%, 95%);
  padding: 0 0.5%;
  margin: 0.25% 0 0%;
  text-shadow: none;
}
.arrowLink {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  font-family: 'alibaba-puhui-bold';
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
