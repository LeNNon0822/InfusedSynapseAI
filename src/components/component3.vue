<template>
  <div class="Component3-Container">
    <div class="component3BGRectContainer">
      <div class="component3BGRect rect1"></div>
      <div class="component3BGRect rect2"></div>
    </div>
    <div class="component3TextPart">
      <div class="slogan3Container visible">
        <div class="component3Number">
          <div class="digitContainer">
            <div class="digit1st">0</div>
            <div class="digit2nd"><span>3</span><span>4</span><span>5</span></div>
          </div>
        </div>
      </div>
      <div class="sloganContentContainer">
        <div class="slogan3Content content03">
          <div class="slogan3Container">
            <div class="component3Title component3Slogan component3TitleMT">Universal Robotics</div>
          </div>
          <div class="slogan3Container">
            <div class="component3Title component3Slogan component3TitleMB">Core (ABrain)</div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              ABrain is a transformative robotics core, engineered with a universal compatibility
              layer that seamlessly adapts to various hardware and tasks. This robust foundation
              enhances cognitive functions, enabling robots to learn, reason, and respond
              intelligently across diverse environments.
            </div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              Contact admin@abrain.com to explore how our innovative robotics solutions can bring
              adaptive, intelligent automation to your operations.
            </div>
          </div>
          <arrow class="arrowLink03" :themeColor="'#53608F'">Learn More</arrow>
        </div>
        <div class="slogan3Content content04">
          <div class="slogan3Container">
            <div class="component3Title component3Slogan component3TitleMT">ABrain Adaptive</div>
          </div>
          <div class="slogan3Container">
            <div class="component3Title component3Slogan component3TitleMB">Robotics Platform</div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              Ready to pioneer next-level AI solutions for robotics? Our ABrain-powered mobile
              platform lets you develop adaptive applications effortlessly, with robust manipulation
              capabilities and easy integration—making advanced robotics as straightforward as a
              software deployment.
            </div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              Contact admin@abrain.com to explore how our innovative robotics solutions can bring
              adaptive, intelligent automation to your operations.
            </div>
          </div>
          <arrow class="arrowLink03" :themeColor="'#53608F'">Learn More</arrow>
        </div>
      </div>
    </div>
    <div class="component3ImagePart">
      <div class="componentImageContainer">
        <div class="component3Img slot1 beforeSlot"></div>
        <div class="component3Img slot2 currentSlot"></div>
        <div class="component3Img slot3 afterSlot"></div>
      </div>
      <div class="sectionSelector">
        <div class="seperator"></div>
        <div class="buttonContainer">
          <div class="leftArrowContainer" @click="leftClick">
            <img
              loading="lazy"
              decoding="sync"
              fetchpriority="high"
              class="leftArrow arrow"
              src="@/assets/icon/component/arrowBtn.png"
              alt=""
            />
          </div>
          <div class="rightArrowContainer" @click="rightClick">
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

const leftClick = () => {
  //获取dom
  const currentSlot = document.querySelector('.currentSlot')
  const beforeSlot = document.querySelector('.beforeSlot')
  const afterSlot = document.querySelector('.afterSlot')
  //删除class标签
  currentSlot?.classList.remove('currentSlot')
  beforeSlot?.classList.remove('beforeSlot')
  afterSlot?.classList.remove('afterSlot')
  //新增标签
  currentSlot?.classList.add('beforeSlot')
  beforeSlot?.classList.add('afterSlot')
  afterSlot?.classList.add('currentSlot')
}
const rightClick = () => {
  //获取dom
  const currentSlot = document.querySelector('.currentSlot')
  const beforeSlot = document.querySelector('.beforeSlot')
  const afterSlot = document.querySelector('.afterSlot')
  //删除class标签
  currentSlot?.classList.remove('currentSlot')
  beforeSlot?.classList.remove('beforeSlot')
  afterSlot?.classList.remove('afterSlot')
  //新增标签
  currentSlot?.classList.add('afterSlot')
  beforeSlot?.classList.add('currentSlot')
  afterSlot?.classList.add('beforeSlot')
}

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootImgTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component3-Container',
      start: 'top top',
      end: '+=400%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      scrub: true
    }
  })
  bootImgTL
    .set('.component3Number', {
      yPercent: 500
    })
    .set('.component3ImagePart', {
      yPercent: 500
    })
    .set('.arrowLink03', { yPercent: 500, autoAlpha: 0 })
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
      duration: 1.5,
      ease: 'sine.in'
    })
    .to(
      '.component3Content',
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: 'sine.in'
      },
      '<'
    )
    .to('.arrowLink03', {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'circ.in'
    })
    .to('.arrowLink03', {
      pointerEvents: 'auto',
      duration: 0.01,
      ease: 'none'
    })

    .to('.component3ImagePart', {
      autoAlpha: 1,
      yPercent: 0,
      duration: 5,
      ease: 'sine.out'
    })

    .to('.component3Img', {
      delay: 10,
      // yPercent: 500,
      duration: 5,
      ease: 'back.inOut'
    })
})
</script>

<style scoped>
.Component3-Container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  margin-top: 0dvh;
  background: radial-gradient(#e1e6fa, #ffffff 80%);

  overflow: hidden;
}
.component3BGRectContainer {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.component3BGRect {
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
.component3TextPart {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 5vmax 5%;
}

.slogan3Content {
  position: absolute;
}
.content03 {
  visibility: hidden;
}
.slogan3Container {
  overflow: hidden;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}

.visible {
  overflow: visible;
}
.component3Number {
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
  line-height: 1.5;
  /* overflow: hidden; */
  /* margin-bottom: -5%; */
  z-index: 1;
  /* visibility: hidden;
  opacity: 0; */
}
.digitContainer {
  position: relative;
  /* width: 7.5vmax; */
  height: 7.5vmax;
  /* aspect-ratio: 1; */
  display: flex;
  /* transform: translateY(7.5vmax); */
  overflow: hidden;
  justify-content: center;
}
.digit1st {
  position: relative;
  display: flex;
  height: 7.5vmax;
  align-items: flex-start;
}
.digit2nd {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 22.5vmax;
  line-height: 1.5;
  transform: translateY(0vmax);
  transition: transform 1s ease-in-out;
}
.component3Title {
  visibility: hidden;
  opacity: 0;
  font-family: 'alibaba-puhui-heavy';
  font-size: 5vmax;
  line-height: 1;
  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  z-index: 5;
}
.component3TitleMT {
  margin-top: 1vmax;
}
.component3TitleMB {
  margin-bottom: 1vmax;
}
.component3Content {
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
.component3ImagePart {
  --imageCoverPer: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  padding: 5%;
  right: 0;
  /* overflow: hidden; */
  visibility: hidden;
  opacity: 0;
  transform: translateY(1.25%);
}

.componentImageContainer {
  position: relative;
  display: flex;
  height: 85%;
  width: 100%;
  perspective: 500px;
  perspective-origin: 50% 50%;
}

.component3Img {
  --index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.25vmax;
  background-size: cover;
  background-position: 50%;
  transform-origin: center center;
  margin: 0 1.5%;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  filter: blur(10px) saturate(1.8) contrast(0.25) brightness(1.1);
}

.slot1 {
  background-image: url('@/assets/BGImg/nightHumanBlue.jpg');
}
.slot2 {
  background-image: url('@/assets/BGImg/nightHumanGreen.jpg');
}
.slot3 {
  background-image: url('@/assets/BGImg/nightHuman.jpg');
}

.beforeSlot {
  z-index: 2;
  transform-origin: center center -600px;
  transform: translateX(-80%) rotateY(-120deg) translateZ(-800px);
}
.currentSlot {
  z-index: 3;
  transform-origin: center center center;
  filter: none;
}
.afterSlot {
  z-index: 2;
  transform-origin: center center -600px;
  transform: translateX(80%) rotateY(120deg) translateZ(-800px);
}

.arrowLink03 {
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
  width: 45%;
  height: 0.5vmax;
  border-radius: 5vmax;
  margin: 0 5%;
  margin-left: 10%;
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
