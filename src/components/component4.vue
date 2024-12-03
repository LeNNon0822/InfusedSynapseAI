<template>
  <div class="Component4-Container">
    <div class="slideContainer">
      <div class="leftSideContainer mainSide">
        <div class="leftContainer selected" @mouseover="slideToLeft">
          <div class="overflowBoundaryContainer">
            <div class="textContainer showContent">
              <div class="titleContainer">Our Vision</div>
              <div class="contentContainer">
                To create general-purpose artificial intelligence rooted in real-world
              </div>
              <div class="contentContainer">understanding and interaction.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="midSideContainer subSide">
        <div class="midContainer" @mouseover="slideToMid">
          <div class="overflowBoundaryContainer">
            <div class="textContainer">
              <div class="titleContainer">Our Strategic</div>
              <div class="titleContainer">Funding Allies</div>
              <div class="contentContainer">
                Driven by a shared vision, our mission is strengthened by the invaluable
              </div>
              <div class="contentContainer">support of our dedicated funding allies.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightSideContainer subSide">
        <div class="rightContainer" @mouseover="slideToRight">
          <div class="overflowBoundaryContainer">
            <div class="textContainer">
              <div class="titleContainer">Contact Us</div>
              <div class="contentContainer">
                <img
                  loading="lazy"
                  decoding="sync"
                  fetchpriority="high"
                  class="iconImg"
                  src="@/assets/icon/component/ADDRESS.png"
                  alt=""
                />
                <span class="thicken">Address:</span>
                xx Provience xx City xx Street xx Building
              </div>
              <div class="contentContainer">
                <img
                  loading="lazy"
                  decoding="sync"
                  fetchpriority="high"
                  class="iconImg"
                  src="@/assets/icon/component/TEL.png"
                  alt=""
                />
                <span class="thicken">Tel:</span> xxxx-xxxxxxxxx
              </div>
              <div class="contentContainer">
                <img
                  loading="lazy"
                  decoding="sync"
                  fetchpriority="high"
                  class="iconImg"
                  src="@/assets/icon/component/email.png"
                  alt=""
                />
                <span class="thicken">E-Mail:</span> xxxxxxxxxx@mail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script setup lang="ts">
import arrow from '@/utils/circleArrow.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '@/components/footer.vue'

let blockSlide: gsap.core.Tween,
  leftContainerVeil: gsap.core.Tween,
  midContainerVeil: gsap.core.Tween,
  rightContainerVeil: gsap.core.Tween

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const bootTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component4-Container',
      start: 'top top',
      end: '+=300%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      scrub: true
    }
  })
  blockSlide = gsap.to('.Component4-Container', {
    '--mainWidth': '67.5%',
    duration: 0.1,
    ease: 'sine.inOut'
  })
  leftContainerVeil = gsap.to('.leftContainer', {
    '--veilOpacity': 1,
    duration: 0.5,
    ease: 'sine.inOut'
  })

  midContainerVeil = gsap
    .to('.midContainer', {
      '--veilOpacity': 1,
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .pause()

  rightContainerVeil = gsap
    .to('.rightContainer', {
      '--veilOpacity': 1,
      duration: 0.5,
      ease: 'sine.inOut'
    })
    .pause()
})

const slideToLeft = () => {
  blockSlide.play()
  const leftTextContainer = document.querySelector('.leftContainer .textContainer')
  const midTextContainer = document.querySelector('.midContainer .textContainer')
  const rightTextContainer = document.querySelector('.rightContainer .textContainer')
  const leftSideContainer = document.querySelector('.leftSideContainer')
  const midSideContainer = document.querySelector('.midSideContainer')
  const rightSideContainer = document.querySelector('.rightSideContainer')

  leftTextContainer?.classList.add('showContent')
  midTextContainer?.classList.remove('showContent')
  rightTextContainer?.classList.remove('showContent')

  leftSideContainer?.classList.add('mainSide')
  leftSideContainer?.classList.remove('subSide')
  midSideContainer?.classList.add('subSide')
  midSideContainer?.classList.remove('mainSide')
  rightSideContainer?.classList.add('subSide')
  rightSideContainer?.classList.remove('mainSide')

  leftContainerVeil.play()
  midContainerVeil.reverse()
  rightContainerVeil.reverse()
}

const slideToMid = () => {
  blockSlide.reverse()
  const leftTextContainer = document.querySelector('.leftContainer .textContainer')
  const midTextContainer = document.querySelector('.midContainer .textContainer')
  const rightTextContainer = document.querySelector('.rightContainer .textContainer')
  const leftSideContainer = document.querySelector('.leftSideContainer')
  const midSideContainer = document.querySelector('.midSideContainer')
  const rightSideContainer = document.querySelector('.rightSideContainer')

  leftTextContainer?.classList.remove('showContent')
  midTextContainer?.classList.add('showContent')
  rightTextContainer?.classList.remove('showContent')

  leftSideContainer?.classList.add('subSide')
  leftSideContainer?.classList.remove('mainSide')
  midSideContainer?.classList.add('mainSide')
  midSideContainer?.classList.remove('subSide')
  rightSideContainer?.classList.add('subSide')
  rightSideContainer?.classList.remove('mainSide')

  leftContainerVeil.reverse()
  midContainerVeil.play()
  rightContainerVeil.reverse()
}
const slideToRight = () => {
  blockSlide.reverse()
  const leftTextContainer = document.querySelector('.leftContainer .textContainer')
  const midTextContainer = document.querySelector('.midContainer .textContainer')
  const rightTextContainer = document.querySelector('.rightContainer .textContainer')
  const leftSideContainer = document.querySelector('.leftSideContainer')
  const midSideContainer = document.querySelector('.midSideContainer')
  const rightSideContainer = document.querySelector('.rightSideContainer')

  leftTextContainer?.classList.remove('showContent')
  midTextContainer?.classList.remove('showContent')
  rightTextContainer?.classList.add('showContent')

  leftSideContainer?.classList.add('subSide')
  leftSideContainer?.classList.remove('mainSide')
  midSideContainer?.classList.add('subSide')
  midSideContainer?.classList.remove('mainSide')
  rightSideContainer?.classList.add('mainSide')
  rightSideContainer?.classList.remove('subSide')

  leftContainerVeil.reverse()
  midContainerVeil.reverse()
  rightContainerVeil.play()
}
</script>

<style scoped>
.Component4-Container {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  margin-top: 0dvh;
  background: radial-gradient(#ffffff, #e1e6fa 80%);
  overflow: hidden;
}

.slideContainer {
  display: flex;
  width: 100%;
  height: 100%;
  /* flex-direction: column; */
}

.mainSide {
  width: 44%;
}
.subSide {
  width: 28%;
}

.leftSideContainer {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 4.5% 1vmax 4% 5vmax;
  transition: width 0.5s ease-in-out;
}
.leftContainer {
  --veilOpacity: 0;
  background-image: linear-gradient(hsla(231, 100%, 75%, 0), hsla(231, 100%, 75%, 0.373)),
    url('@/assets/BGImg/seaside.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.25vmax;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 7.5% 2vmax;
  transition: all 0.5s ease-in-out;
}
.leftContainer::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1.25vmax;
  top: 0;
  left: 0;
  background-image: linear-gradient(hsla(0, 0%, 0%, 0) 50%, #0000005f);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: var(--veilOpacity);
}

.overflowBoundaryContainer {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.midSideContainer {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 4.5% 1vmax 4% 1vmax;
  transition: width 0.5s ease-in-out;
}
.midContainer {
  --veilOpacity: 0;
  background-image: linear-gradient(hsla(328, 100%, 54%, 0), hsla(328, 100%, 54%, 0.373)),
    url('@/assets/BGImg/collaboration.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.25vmax;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 7.5% 2vmax;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.midContainer::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1.25vmax;
  top: 0;
  left: 0;
  background-image: linear-gradient(#00000000 50%, #0000005f);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: var(--veilOpacity);
}
.rightSideContainer {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 4.5% 5vmax 4% 1vmax;
  transition: width 0.5s ease-in-out;
}
.rightContainer {
  --veilOpacity: 0;
  background-image: linear-gradient(hsla(167, 100%, 54%, 0), hsla(167, 100%, 54%, 0.397)),
    url('@/assets/BGImg/tel.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.25vmax;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 7.5% 2vmax;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.rightContainer::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1.25vmax;
  top: 0;
  left: 0;
  background-image: linear-gradient(#00000000 50%, #0000005f);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: var(--veilOpacity);
}
.textContainer {
  display: flex;
  flex-direction: column;
  font-family: 'alibaba-puhui-regular';
  font-size: 1vmax;
  color: white;
  position: relative;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transform: translateY(75%);
  transition: transform 0.5s ease-in-out;
}

.titleContainer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: 'alibaba-puhui-heavy';
  font-size: 3vmax;
  box-sizing: border-box;
}
.contentContainer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;

  /* display: flex; */
}
.leftContainer .titleContainer {
  margin-top: 4.5vmax;
}
.rightContainer .titleContainer {
  margin-top: 4.5vmax;
}
.showContent {
  transform: translateY(60%);
}

.thicken {
  font-family: 'alibaba-puhui-bold';
}

.iconImg {
  object-fit: cover;
  width: 1vmax;
  aspect-ratio: 1;
  margin-right: 0.5vmax;
  vertical-align: -12.5%;
  filter: drop-shadow(0 -5vmax #ffffff);
  transform: translateY(5vmax);
}

.bottomFooterContainer {
  position: relative;
  display: flex;
  width: 100%;
  height: 7dvh;
  font-size: 0.75vmax;
  background-color: black;
  color: #ffffff;
  font-family: 'alibaba-puhui-light';
  justify-content: center;
  align-items: center;
  font-weight: 1000;
  letter-spacing: 0.05vmax;
}
</style>
