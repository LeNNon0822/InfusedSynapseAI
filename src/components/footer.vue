<template>
  <!-- 通用页脚 -->
  <div :class="['Component4-Container', langCss]" :style="styleVar">
    <div class="footerContainer">
      <div class="infoContainer">
        <!-- 装饰区（四角） -->
        <div class="decorationPart">
          <div class="leftTop">
            <div class="decorationDoubleCircle">
              <div class="leftCircle"></div>
              <div class="rightCircle"></div>
            </div>
          </div>
          <div class="leftBot">
            <div class="decorationDoubleCircle">
              <div class="leftCircle"></div>
              <div class="rightCircle"></div>
            </div>
          </div>
          <div class="rightTop">
            <div class="decorationDoubleCircle">
              <div class="leftCircle"></div>
              <div class="rightCircle"></div>
            </div>
          </div>
        </div>
        <!-- 第一行标题文字部分 -->
        <div class="textPart">
          <div class="titleContainer">
            <div class="titleText">{{ $t('contact.title') }}</div>
            <div class="triCircle">
              <div class="leftCircle"></div>
              <div class="midCircle"></div>
              <div class="rightCircle"></div>
            </div>
          </div>
          <!-- 三等分栏 -->
          <div class="contactTriContainer">
            <div class="addrContainer">
              <div class="addrBgImg"></div>
              <div class="contactTitle">{{ $t('contact.address') }}</div>
              <div class="contactContent">{{ $t('contact.addressContent') }}</div>
            </div>
            <div class="seperator"></div>
            <div class="telContainer">
              <div class="telBgImg"></div>
              <div class="contactTitle">{{ $t('contact.tel') }}</div>
              <div class="contactContent">{{ $t('contact.telNum') }}</div>
            </div>
            <div class="seperator"></div>
            <div class="emailContainer">
              <div class="emailBgImg"></div>
              <div class="contactTitle">{{ $t('contact.email') }}</div>
              <div class="contactContent">{{ $t('contact.emailAddr') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页底黑条 -->
    <div class="bottomFooterContainer">Copyright © Future Network of Intelligence Institute</div>
  </div>
</template>

<script setup lang="ts">
import arrow from '../utils/circleArrow.vue'
import gsap from 'gsap'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
import { computed, onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ref } from 'vue'
// 根据不同页面背景要求，进行具体背景的参数（父传子）
const props = defineProps({
  bgImg: {
    type: String
  }
})
let styleVar = computed(() => {
  // console.log(props.bgImg)
  return { background: props.bgImg }
})

let blockSlide: gsap.core.Tween,
  leftContainerVeil: gsap.core.Tween,
  midContainerVeil: gsap.core.Tween,
  rightContainerVeil: gsap.core.Tween
</script>

<style scoped>
.Component4-Container {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;

  margin-top: 0dvh;
  overflow: hidden;
}

.footerContainer {
  position: relative;
  display: flex;
  box-sizing: border-box;
  background-color: #53608f;
  width: 100%;
  height: 35vmax;
  align-items: center;
  justify-content: center;
}
.infoContainer {
  position: relative;
  width: 80%;
  height: 70%;
  border-radius: 1.25vmax;
  box-sizing: border-box;
  background-color: rgb(225, 230, 250);
}
.decorationPart {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.decorationDoubleCircle {
  display: flex;
  position: relative;

  height: auto;
  width: 7.5vmax;
  padding: 2vmax;
  justify-content: center;
  box-sizing: border-box;
}
.leftTop {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
}
.rightTop {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
}
.leftBot {
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  bottom: 0;
  align-items: flex-end;
  justify-content: flex-start;
}
.leftCircle {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 50%);
  mix-blend-mode: hard-light;
}
.midCircle {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 62.5%);
  mix-blend-mode: hard-light;
  transform: translate(-25%);
}
.rightCircle {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(230, 53%, 75%);
  mix-blend-mode: hard-light;
  transform: translate(-50%);
}

.textPart {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.titleContainer {
  position: relative;
  width: 100%;
  padding: 0 10%;
  padding-top: 6.5vmax;
  display: flex;
  align-items: center;
}
.zh .titleText {
  font-family: 'Alibaba-puhui-heavy';
}

.titleText {
  font-family: 'Inter-heavy';
  font-size: 3.5vmax;
  color: #53608f;
}
.triCircle {
  display: flex;
  position: relative;

  height: auto;
  width: 7.5vmax;
  padding: 2vmax;
  justify-content: center;
  box-sizing: border-box;
  margin-left: 2.5vmax;
}
.contactTriContainer {
  position: relative;
  width: 100%;
  height: 30%;
  padding: 0 10%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
}
.addrContainer,
.telContainer,
.emailContainer {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.zh .contactTitle {
  font-family: 'Alibaba-puhui-bold';
}

.zh .contactContent {
  font-family: 'Alibaba-puhui-regular';
}

.contactTitle {
  color: #53608f;
  font-size: 1.1vmax;
  line-height: 1.5;
  margin-bottom: 0.5vmax;
  z-index: 10;
  font-family: 'libreBaskerville', 'Inter-bold';
}
.contactContent {
  font-size: 0.8vmax;
  line-height: 1.5;
  font-family: 'Inter-regular';
  color: #3d51c4;
  z-index: 10;
}
.seperator {
  position: relative;
  height: 50%;
  width: 0.25vmax;
  box-sizing: border-box;
  border-radius: 0.25vmax;
  margin: 0 2vmax;

  background-color: #ffffff7f;
}
.addrBgImg {
  position: absolute;
  width: 5vmax;
  align-self: center;
  opacity: 0.25;
  filter: drop-shadow(0 10vmax #ffffff);
  transform: translateY(-10vmax);
  overflow: hidden;
  aspect-ratio: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/icon/component/ADDRESS.png');
}
.telBgImg {
  position: absolute;
  width: 5vmax;
  align-self: center;
  opacity: 0.25;
  filter: drop-shadow(0 10vmax #ffffff);
  transform: translateY(-10vmax);
  overflow: hidden;
  aspect-ratio: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/icon/component/TEL.png');
}
.emailBgImg {
  position: absolute;
  width: 5vmax;
  align-self: center;
  opacity: 0.25;
  filter: drop-shadow(0 10vmax #ffffff);
  transform: translateY(-10vmax);
  overflow: hidden;
  aspect-ratio: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/icon/component/email.png');
}
.bottomFooterContainer {
  position: relative;
  display: flex;
  width: 100%;
  height: 7dvh;
  font-size: 0.75vmax;
  background-color: black;
  color: #ffffff;
  font-family: 'Inter-light';
  justify-content: center;
  align-items: center;
  font-weight: 1000;
  letter-spacing: 0.05vmax;
}
</style>
