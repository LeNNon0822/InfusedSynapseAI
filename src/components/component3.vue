<template>
  <!-- 主页封面下第三个个满屏页面，其编号为03到05 -->
  <div :class="['Component3-Container', langCss]">
    <div class="component3BGRectContainer">
      <div class="component3BGRect rect1"></div>
      <div class="component3BGRect rect2"></div>
    </div>
    <div class="component3TextPart">
      <div class="slogan3Container visible">
        <div class="spaceOccupied shrinkSpace"></div>
        <div class="component3Number">
          <div class="digitContainer">
            <!-- 动态可切换编号 -->
            <div class="digit1st">0</div>
            <div class="digit2nd digitTop"><span>3</span><span>4</span><span>5</span></div>
          </div>
        </div>
        <div class="spaceOccupied"></div>
      </div>
      <div class="sloganContentContainer">
        <div class="slogan3Content content03">
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMT">
              {{ $t('urc.titleLine1') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMB">
              {{ $t('urc.titleLine2') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('urc.content1') }}
            </div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('urc.content2') }}<span class="thicken">admin@abrain.com</span>
              {{ $t('urc.content3') }}
            </div>
          </div>
          <!-- <arrow class="arrowLink03" :themeColor="'#53608F'"> {{ $t('learnMore') }}</arrow> -->
        </div>
        <div class="slogan3Content content04">
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMT">
              {{ $t('aa.titleLine1') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMB">
              {{ $t('aa.titleLine2') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('aa.content1') }}
            </div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('aa.content2') }}
            </div>
          </div>
          <div class="spaceOccupied"></div>
          <!-- <arrow class="arrowLink03" :themeColor="'#53608F'">{{ $t('learnMore') }}</arrow> -->
        </div>
        <div class="slogan3Content content05">
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMT">
              {{ $t('arp.titleLine1') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan">{{ $t('arp.titleLine2') }}</div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="titleSpaceOccupied shrinkSpace"></div>
            <div class="component3Title component3Slogan component3TitleMB">
              {{ $t('arp.titleLine3') }}
            </div>
            <div class="titleSpaceOccupied"></div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('arp.content1') }}
            </div>
          </div>
          <div class="slogan3Container">
            <div class="component3Content component3Slogan">
              {{ $t('arp.content2') }}<span class="thicken">admin@abrain.com</span
              >{{ $t('arp.content3') }}
            </div>
          </div>
          <!-- <arrow class="arrowLink03" :themeColor="'#53608F'">Learn More</arrow> -->
        </div>
      </div>
    </div>
    <div class="component3ImagePart">
      <div class="componentImageContainer">
        <div class="component3Img slot1 currentSlot"><div class="image1-1 slotImage"></div></div>
        <div class="component3Img slot2 afterSlot"><div class="image2-1 slotImage"></div></div>
        <div class="component3Img slot3 beforeSlot">
          <div class="image3-1 slotImage"></div>
          <div class="image3-2 slotImage"></div>
        </div>
      </div>
      <div class="sectionSelector">
        <div class="seperator"></div>
        <div class="buttonContainer">
          <div class="leftArrowContainer" @click="leftClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 65 100 70" class="leftArrow arrow">
              <path
                d="M 66 65 H 134 Q 148 67 150 81 V 119 Q 148 133 134 135 H 66 Q 52 133 50 119 V 81 Q 52 67 66 65 V 70 Q 57 72 55 81 V 119 Q 57 128 66 130 H 134 Q 143 128 145 119 V 81 Q 143 72 134 70 H 66 Z M 104 90 L 125 100 L 104 110 L 104 103 L 75 103 L 75 97 H 104 Z"
              />
            </svg>
          </div>
          <div class="rightArrowContainer" @click="rightClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 65 100 70" class="rightArrow arrow">
              <path
                d="M 66 65 H 134 Q 148 67 150 81 V 119 Q 148 133 134 135 H 66 Q 52 133 50 119 V 81 Q 52 67 66 65 V 70 Q 57 72 55 81 V 119 Q 57 128 66 130 H 134 Q 143 128 145 119 V 81 Q 143 72 134 70 H 66 Z M 104 90 L 125 100 L 104 110 L 104 103 L 75 103 L 75 97 H 104 Z"
              />
            </svg>
          </div>
        </div>
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
      // yPercent: 500
      autoAlpha: 0
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
      autoAlpha: 1,
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
      xPercent: 0,
      duration: 2.5,
      ease: 'back.in'
    })
    .to(
      '.component3Title',
      {
        x: '0vmax',
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
      duration: 15,
      ease: 'sine.out'
    })
    .to(
      '.spaceOccupied.shrinkSpace',
      {
        flex: 0,
        duration: 2.5,
        ease: 'back.in'
      },
      '<+=1.5'
    )
    .to(
      '.titleSpaceOccupied.shrinkSpace',
      {
        flex: 0,
        duration: 2.5,
        ease: 'back.in',
        stagger: 0.5
      },
      '<+=0.5'
    )
    .to('.component3Content', {
      autoAlpha: 1,
      duration: 1.5,
      ease: 'sine.in'
    })
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

  slotChange03 = gsap.to('.content03', {
    autoAlpha: 1,
    duration: 1,
    ease: 'sine.in'
  })
  slotChange04 = gsap.to('.content04', {
    autoAlpha: 1,
    duration: 1,
    ease: 'sine.in'
  })
  slotChange05 = gsap.to('.content05', {
    autoAlpha: 1,
    duration: 1,
    ease: 'sine.in'
  })
  slotChange04.pause()
  slotChange05.pause()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
const leftClick = () => {
  //获取dom
  const currentSlot = document.querySelector('.currentSlot')
  const beforeSlot = document.querySelector('.beforeSlot')
  const afterSlot = document.querySelector('.afterSlot')
  const secondDigit = document.querySelector('.digit2nd')
  //隐藏
  if (slotIndex.value == 3) {
    // content3?.classList.add('.hiddenContent')
    // content5?.classList.remove('.removeContent')

    slotChange03.reverse()
    slotChange05.play()
    secondDigit?.classList.add('digitBtm')
    secondDigit?.classList.remove('digitTop')
    slotIndex.value = 5
  } else if (slotIndex.value == 4) {
    // content4?.classList.add('.hiddenContent')
    // content3?.classList.remove('.removeContent')
    slotChange04.reverse()
    slotChange03.play()
    secondDigit?.classList.add('digitTop')
    secondDigit?.classList.remove('digitMid')
    slotIndex.value = 3
  } else {
    // content5?.classList.add('.hiddenContent')
    // content4?.classList.remove('.removeContent')
    slotChange05.reverse()
    slotChange04.play()
    secondDigit?.classList.add('digitMid')
    secondDigit?.classList.remove('digitBtm')
    slotIndex.value = 4
  }

  //删除class标签
  currentSlot?.classList.remove('currentSlot')
  beforeSlot?.classList.remove('beforeSlot')
  afterSlot?.classList.remove('afterSlot')

  //新增标签
  currentSlot?.classList.add('beforeSlot')
  beforeSlot?.classList.add('afterSlot')
  afterSlot?.classList.add('currentSlot')

  // console.log(slotIndex.value)
}
const rightClick = () => {
  //获取dom
  const currentSlot = document.querySelector('.currentSlot')
  const beforeSlot = document.querySelector('.beforeSlot')
  const afterSlot = document.querySelector('.afterSlot')
  const secondDigit = document.querySelector('.digit2nd')
  //隐藏
  if (slotIndex.value == 3) {
    // content3?.classList.add('.hiddenContent')
    // content5?.classList.remove('.removeContent')

    slotChange03.reverse()
    slotChange04.play()
    secondDigit?.classList.add('digitMid')
    secondDigit?.classList.remove('digitTop')
    slotIndex.value = 4
  } else if (slotIndex.value == 4) {
    // content4?.classList.add('.hiddenContent')
    // content3?.classList.remove('.removeContent')
    slotChange04.reverse()
    slotChange05.play()
    secondDigit?.classList.add('digitBtm')
    secondDigit?.classList.remove('digitMid')
    slotIndex.value = 5
  } else {
    // content5?.classList.add('.hiddenContent')
    // content4?.classList.remove('.removeContent')
    slotChange05.reverse()
    slotChange03.play()
    secondDigit?.classList.add('digitTop')
    secondDigit?.classList.remove('digitBtm')
    slotIndex.value = 3
  }

  //删除class标签
  currentSlot?.classList.remove('currentSlot')
  beforeSlot?.classList.remove('beforeSlot')
  afterSlot?.classList.remove('afterSlot')
  //新增标签
  currentSlot?.classList.add('afterSlot')
  beforeSlot?.classList.add('currentSlot')
  afterSlot?.classList.add('beforeSlot')
}
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
  width: 90%;
  margin: 5vmax 5% 5vmax 5%;
  z-index: 2000;
}
.sloganContentContainer {
  z-index: 10;
}
.slogan3Content {
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 75%;
}
.slogan3Container {
  overflow: hidden;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.75vmax;
  /* justify-content: center; */
}
.titleSpaceOccupied {
  flex: 1;
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
  font-family: 'Inter-bold';
  line-height: 1.5;
  z-index: 1;
}
.spaceOccupied {
  flex: 1;
}
.digitContainer {
  position: relative;
  height: 7.5vmax;
  display: flex;
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

.digitTop {
  transform: translateY(0vmax);
}
.digitMid {
  transform: translateY(-7.5vmax);
}
.digitBtm {
  transform: translateY(-15vmax);
}

.thicken {
  font-family: 'CrimsonItalic';
}

.zh .component3Title {
  font-family: 'Alibaba-puhui-heavy';
}

.component3Title {
  visibility: hidden;
  opacity: 0;
  font-family: 'Inter-heavy';
  font-size: 4.5vmax;
  line-height: 1;
  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  z-index: 5;
}
.component3TitleMT {
  margin-top: 1vmax;
}
.component3TitleMB {
  margin-bottom: 2.5%;
}

.zh .component3Content {
  line-height: 2;
  font-size: 1.2vmax;
  font-family: 'Alibaba-puhui-regular';
}

.component3Content {
  font-family: 'Inter-regular';
  width: 50%;
  font-size: 1.1vmax;
  line-height: 1.5;
  color: #3d51c4;
  position: relative;
  z-index: 1;
  margin: 0.25% 0;
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
  z-index: 2000;
  visibility: hidden;
  opacity: 0;
}

.componentImageContainer {
  position: relative;
  display: flex;
  height: 85%;
  width: 100%;
  perspective: 500px;
  perspective-origin: 50% 50%;
  /* transform: translateY(-1vmax); */
}

.component3Img {
  --index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

  margin: 0 1.5%;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  filter: blur(10px) saturate(1.8) contrast(0.25) brightness(1.1) opacity(0.25);
}

.slotImage {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  transform-origin: center center;
  border-radius: 1.25vmax;
}
.slot3 .slotImage {
  height: 50%;
  transform: translateY(-1vmax);
}

.image1-1 {
  background-image: url('@/assets/BGImg/robot.jpg');
}

.image2-1 {
  width: 110%;
  transform: translateX(-5%);
  background-image: url('@/assets/BGImg/dogAndRobotDog.jpg');
}

.image3-1 {
  margin-bottom: 2vmax;
  background-image: url('@/assets/BGImg/adjustRobot.jpg');
}
.image3-2 {
  margin-top: 2vmax;
  background-image: url('@/assets/BGImg/adjustRobot2.jpg');
}

.beforeSlot {
  z-index: 2;
  transform-origin: center center -450px;
  transform: translateX(-80%) rotateY(-120deg) translateZ(-600px);
}
.currentSlot {
  z-index: 3;
  transform-origin: center center center;
  filter: none;
}
.afterSlot {
  z-index: 2;
  transform-origin: center center -450px;
  transform: translateX(80%) rotateY(120deg) translateZ(-600px);
}

.arrowLink03 {
  margin-left: -1%;
  position: relative;
  pointer-events: none;
  font-family: 'Inter-bold';
}
.sectionSelector {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  margin: 2.5% 0;
  border-radius: 1.25vmax;
  transform: translateY(1.5vmax);
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
  fill: hsl(227, 27%, 44%);
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  transition: all 0.1s ease-in;
}
.leftArrowContainer:hover .arrow,
.rightArrowContainer:hover .arrow {
  fill: hsl(227, 27%, 64%);
}
.leftArrow {
}
.rightArrow {
}
</style>
