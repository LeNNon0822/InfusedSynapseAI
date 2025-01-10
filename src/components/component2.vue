<template>
  <div :class="['Component2-Container', langCss]">
    <div class="component2ImagePart"><div class="component2Img"></div></div>
    <div class="component2TextPart">
      <div class="numberContainer">
        <div class="component2Number"><span>0</span><span>2</span></div>
      </div>
      <div class="sloganContainer">
        <div class="component2Title component2Slogan">{{ $t('insight.title') }}</div>
      </div>

      <div class="component2Content">
        {{ $t('insight.content') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arrow from '@/utils/circleArrow.vue'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootTL = gsap.timeline({
    // repeat: -1
    scrollTrigger: {
      trigger: '.Component2-Container',
      start: 'top top',
      end: '+=400%',
      // end: '+=40%',
      // end: 'bottom bottom',
      toggleActions: 'play complete reverse reset',
      pin: true,
      // markers: {
      //   startColor: 'pink',
      //   endColor: 'cyan'
      // },
      scrub: 0.5
    }
  })
  bootTL
    .set('.Component2-Container .component2ImagePart', {
      xPercent: -100
    })
    .set('.Component2-Container .component2Slogan', {
      yPercent: -100
    })
  // .set('.arrowLink02', {
  //   autoAlpha: 0
  // })
  bootTL
    .from('.Component2-Container .component2Number', {
      scale: 50,
      ease: 'sine.in',
      duration: 2
    })
    .from('.Component2-Container .component2Number', {
      textShadow: 'none',
      color: 'white',
      backgroundColor: 'white',
      ease: 'sine.in',
      duration: 0.5
    })
    .to('.Component2-Container .component2Number', {
      '--rippleWidth': '700%',
      '--innerCircleColor': 'transparent',
      '--outerCircleColor': 'transparent',
      '--rippleStripWidth': '1vmax',
      ease: 'sine.in',
      duration: 0.5,
      repeat: 2
    })
    .to('.Component2-Container .component2Number', {
      color: 'white',
      '--rippleWidth': '0%',
      ease: 'sine.in',
      duration: 0.5
    })
    .to('.Component2-Container .component2ImagePart', {
      xPercent: 0,
      duration: 1,
      autoAlpha: 1,
      ease: 'sine.in'
    })
    .to('.Component2-Container .component2TextPart > *:not(.numberContainer)', {
      autoAlpha: 1,
      duration: 1,
      ease: 'sine.in'
    })
    .to(
      '.Component2-Container .component2Slogan',
      { yPercent: 0, duration: 0.75, ease: 'sine.out', stagger: 0.1 },
      '<'
    )
    // .to('.arrowLink02', { autoAlpha: 1, duration: 0.75, ease: 'sine.in' }, '>+=1')
    // .to('.arrowLink02', {
    //   pointerEvents: 'auto',
    //   duration: 0.01,
    //   ease: 'none'
    // })
    .to('.Component2-Container .component2Number', {
      color: '#53608F',
      ease: 'sine.in',
      duration: 0.5,
      delay: 5
    })
    .to(
      '.Component2-Container .component2Number',
      {
        scale: 50,
        ease: 'sine.in',
        duration: 2
      },
      '<'
    )
    .to('.Component2-Container .component2Number', {
      color: 'white',
      backgroundColor: 'white',
      textShadow: 'none',
      ease: 'sine.in',
      duration: 2.5
    })
    .to('.Component2-Container .component2Number', {
      opacity: 1,
      ease: 'sine.in',
      duration: 2.5
    })
})
</script>

<style scoped>
.Component2-Container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  margin-top: 0dvh;
  background: linear-gradient(#ffffff, #e1e6fa);
  overflow: hidden;
}
.component2TextPart > *:not(.numberContainer) {
  opacity: 0;
  visibility: visible;
}
.component2TextPart {
  position: relative;
  box-sizing: border-box;
  width: 25%;
  padding: 5vmax 0.5%;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
.component2Number {
  --rippleWidth: 70%;
  --innerCircleColor: 'white';
  --outerCircleColor: '#53608F';
  --rippleStripWidth: 3vmax;
  display: flex;
  position: relative;
  border-radius: 50%;
  height: 10vmax;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  font-size: 5vmax;
  background-color: #53608f;
  color: #53608f;
  text-shadow: 0 0 1rem #53608f77;
  font-family: 'alibaba-puhui-bold';
  line-height: calc(5vmax * 1.5);
  z-index: 10;
  transform-origin: center center;
  transform-style: preserve-3d;
}
.component2Number::after {
  content: '';
  position: absolute;
  width: calc(var(--rippleWidth) + var(--rippleStripWidth));
  aspect-ratio: 1;
  background-color: var(--outerCircleColor);
  border-radius: 50%;
  transform: translateZ(-1px);
}
.component2Number::before {
  content: '';
  position: absolute;
  width: var(--rippleWidth);
  aspect-ratio: 1;
  background-color: var(--innerCircleColor);
  border-radius: 50%;
  transform: translateZ(-0.5px);
}

.component2Title {
  font-family: 'alibaba-puhui-heavy';
  font-size: 4.5vmax;
  line-height: 1;
  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  z-index: 5;
  text-transform: uppercase;
  margin: 1vmax 0;
}

.zh .component2Content {
  margin-top: 7.5%;
  font-size: 1.2vmax;
  line-height: 2;
}

.component2Content {
  font-family: 'SiYuanSongMedium';
  font-size: 1.1vmax;
  line-height: 1.5;
  color: #3d51c4;
  padding: 0% 20% 0% 0%;
  position: relative;
  /* text-align: right; */
}
.component2ImagePart {
  --imageCoverPer: 100%;
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 65%;
  padding: 5%;
  visibility: hidden;
  opacity: 0;
}
.component2Img {
  position: relative;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  border-radius: 1.25vmax;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/BGImg/armWithRobot.jpg');
  transform-origin: center 100%;
}

.sloganContainer {
  overflow: hidden;
}
</style>
