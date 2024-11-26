<template>
  <div class="Component4-Container">
    <div class="component4BGRectContainer">
      <div class="component4BGRect rect1"></div>
      <div class="component4BGRect rect2"></div>
    </div>
    <div class="component4TextPart">
      <div class="slogan4Container visible">
        <div class="component4Number"><span>0</span><span>4</span></div>
      </div>
      <div class="slogan4Container">
        <div class="component4Title component4Slogan component4TitleMT">Universal Robotics</div>
      </div>
      <div class="slogan4Container">
        <div class="component4Title component4Slogan component4TitleMB">Core (ABrain)</div>
      </div>
      <div class="slogan4Container">
        <div class="component4Content component4Slogan">
          ABrain is a transformative robotics core, engineered with a universal compatibility layer
          that seamlessly adapts to various hardware and tasks. This robust foundation enhances
          cognitive functions, enabling robots to learn, reason, and respond intelligently across
          diverse environments.
        </div>
      </div>
      <div class="slogan4Container">
        <div class="component4Content component4Slogan">
          Contact admin@abrain.com to explore how our innovative robotics solutions can bring
          adaptive, intelligent automation to your operations.
        </div>
      </div>
      <arrow class="arrowLink04" :themeColor="'#53608F'">Learn More</arrow>
    </div>
    <div class="component4ImagePart">
      <div class="component4Img"></div>
      <div class="sectionSelector">
        <!-- <div class="indicatorListContainer">
          <div class="indicator currIndicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
        </div> -->
        <div class="seperator"></div>
        <div class="buttonContainer">
          <div class="leftArrowContainer">
            <img
              loading="lazy"
              decoding="sync"
              fetchpriority="high"
              class="leftArrow arrow"
              src="@/assets/icon/component/arrowBtn.png"
              alt=""
            />
          </div>
          <div class="rightArrowContainer">
            <img
              loading="lazy"
              decoding="sync"
              fetchpriority="high"
              class="rightArrow arrow"
              src="@/assets/icon/component/arrowBtn.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arrow from '@/utils/circleArrow.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootImgTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component3-Container',
      start: 'top top',
      end: '+=400%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      scrub: 0.5
    }
  })
  bootImgTL
    .set('.component3Number', {
      yPercent: 500
    })
    .set('.component3ImagePart', {
      yPercent: 500
    })
    .set('.arrowLink03', { yPercent: 500 })
  bootImgTL
    .to('.component3BGRect', { scale: 0.5, duration: 1, ease: 'back.in' })
    .to('.rect1', {
      delay: 2,
      scale: 1,
      clipPath: 'polygon(25% 100%, 0 100%, 0 0, 100% 0, 100% 25%, 25% 25%)',
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .to(
      '.rect2',
      {
        scale: 1,
        clipPath: 'polygon(0 100%, 0 75%, 75% 75%, 75% 0, 100% 0, 100% 100%)',
        duration: 0.5,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to('.rect1', {
      scale: 1.5,
      clipPath: 'polygon(25% 50%, 0 50%, 0 0, 100% 0, 100% 25%, 25% 25%)',
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .to(
      '.rect2',
      {
        scale: 1.5,
        clipPath: 'polygon(0 100%, 0 75%, 75% 75%, 75% 50%, 100% 50%, 100% 100%)',
        duration: 0.5,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to('.rect1', {
      top: '10%',
      left: '10%',
      duration: 1,
      ease: 'sine.inOut'
    })
    .to(
      '.rect2',
      {
        right: '10%',
        bottom: '10%',
        duration: 1,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to('.component3Number', {
      yPercent: 0,
      duration: 1,
      ease: 'sine.inOut'
    })
    .to('.rect1', {
      clipPath: ' polygon(25% 100%, 0 100%, 0 0, 75% 0, 75% 25%, 25% 25%)',
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .to(
      '.rect2',
      {
        clipPath: 'polygon(25% 100%, 25% 75%, 75% 75%, 75% 0%, 100% 0%, 100% 100%)',
        duration: 0.5,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to('.component3Title', {
      autoAlpha: 1,
      duration: 1.5,
      ease: 'sine.inOut'
    })

    .to('.component3Number', {
      xPercent: -400,
      duration: 2.5,
      ease: 'back.in'
    })
    .to(
      '.component3Title',
      {
        x: '-21.5vmax',
        duration: 2.75,
        ease: 'back.in'
      },
      '>-=0.75'
    )
    .to(
      '.rect1',
      {
        top: '-20%',
        left: '-20%',
        duration: 1,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to(
      '.rect2',
      {
        right: '-20%',
        bottom: '-20%',
        duration: 1,
        ease: 'sine.inOut'
      },
      '<'
    )
    .to('.Component3-Container', {
      background: 'radial-gradient(#ffffff, #e1e6fa 80%)',
      duration: 2.5,
      ease: 'sine.in'
    })
    .to(
      '.component3Content',
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: 'sine.in'
      },
      '<+=1.5'
    )
    .to('.arrowLink03', {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'circ.out'
    })
    .to('.arrowLink03', {
      pointerEvents: 'auto',
      duration: 0.01,
      ease: 'none'
    })

    .to(
      '.component3ImagePart',
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 2.5,
        ease: 'sine.out'
      },
      '<'
    )

    .to('.component3Img', {
      delay: 10,
      // yPercent: 500,
      duration: 5,
      ease: 'back.inOut'
    })
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
.component4BGRectContainer {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.component4BGRect {
  position: absolute;
  box-sizing: border-box;
  width: 10vmax;
  height: 10vmax;
  transform-origin: center center;
  transform: scale(0);
  background-color: #53608f;
}
.rect1 {
  top: calc(50% - 5vmax);
  left: calc(50% - 5vmax);
  clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 100% 100%);
}
.rect2 {
  bottom: calc(50% - 5vmax);
  right: calc(50% - 5vmax);
  clip-path: polygon(0 100%, 0 0, 0 0, 0 0, 100% 0, 100% 100%);
}
.component4TextPart {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 5vmax 5%;
}
.slogan4Container {
  overflow: hidden;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}

.visible {
  overflow: visible;
}
.component4Number {
  display: flex;
  position: relative;
  border-radius: 50%;
  height: 10vmax;
  aspect-ratio: 1;
  background-color: #53608f;
  justify-content: center;
  align-items: center;
  font-size: 5vmax;
  color: #ffffff;
  text-shadow: 0 0 1rem #53608f77;
  font-family: 'alibaba-puhui-bold';
  line-height: calc(5vmax * 1.5);
  /* margin-bottom: -5%; */
  z-index: 1;
  /* visibility: hidden;
  opacity: 0; */
}
.component4Title {
  visibility: hidden;
  opacity: 0;
  font-family: 'alibaba-puhui-heavy';
  font-size: 5vmax;
  line-height: 1;

  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  z-index: 5;
}
.component4TitleMT {
  margin-top: 1vmax;
}
.component4TitleMB {
  margin-bottom: 1vmax;
}
.component4Content {
  font-family: 'alibaba-puhui-regular';
  width: 50%;
  font-size: 1.25vmax;
  line-height: 1.5;
  color: #3d51c4;
  transform: translateX(-50%);
  /* padding: 0% 5% 0% 0.5%; */
  position: relative;
  /* transform: translateX(-65%); */
  z-index: 1;
  margin: 0.75% 0;
  visibility: hidden;
  opacity: 0;
}
.component4ImagePart {
  --imageCoverPer: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  padding: 5%;
  right: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
}
.component4Img {
  position: relative;
  width: 100%;
  height: 85%;
  object-fit: cover;
  border-radius: 1.25vmax;
  background-size: cover;
  background-position: 50%;
  background-image: url('@/assets/BGImg/nightHumanGreen.jpg');
  transform-origin: center center;
}

.arrowLink04 {
  margin-left: -1%;
  position: relative;
  pointer-events: none;
  font-family: 'alibaba-puhui-bold';
}
.sectionSelector {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  margin: 2.5% 0;
  border-radius: 1.25vmax;

  backdrop-filter: saturate(180%) blur(3px);
  overflow: hidden;
}

.seperator {
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-self: center;
  align-self: center;
  width: 55%;
  height: 0.5vmax;
  border-radius: 5vmax;
  margin: 0 5%;
  background-color: #3d51c47f;
}

.indicatorListContainer {
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 57.5%;
  height: 1vmax;
  margin-left: 7.5%;
  background-color: #3d51c47f;
  border-radius: 1vmax;
  /* padding: 0 3.5%; */
}
.indicator {
  position: relative;
  display: flex;
  height: 0.25vmax;
  width: 24%;
  margin: 3.5%;
  border-radius: 1vmax;
  background-color: #ffffff77;
}
.currIndicator {
  background-color: #ffffffc7;
}
.buttonContainer {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 30%;
  padding: 0 1.25%;
  height: 100%;
  margin-right: 5%;
}
.leftArrowContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  transform: rotate(180deg);
  overflow: hidden;

  padding: 0.5vmax;
}
.rightArrowContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding: 0.5vmax;
}
.arrow {
  --arrowColor: hsl(227, 27%, 44%);
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  transform: translateY(-10vmax);
  filter: drop-shadow(0 10vmax 0 var(--arrowColor));
  /* transition: all 0.5s ease-in-out; */
}
.leftArrowContainer:hover .arrow,
.rightArrowContainer:hover .arrow {
  --arrowColor: hsl(227, 27%, 64%);
}
.leftArrow {
}
.rightArrow {
}
</style>
