<template>
  <div :class="['Component5-Container']" :style="styleVar">
    <div class="slideContainer">
      <div class="innerContainer">
        <div class="decorationPart">
          <div class="circleDecoration leftTop">
            <div class="circleLeft"></div>
            <div class="circleRight"></div>
          </div>
          <div class="circleDecoration rightTop">
            <div class="circleLeft"></div>
            <div class="circleRight"></div>
          </div>
          <div class="circleDecoration leftBottom">
            <div class="circleLeft"></div>
            <div class="circleRight"></div>
          </div>
        </div>
        <div class="textPart">
          <div class="footerTitle">
            {{ $t('contact.title') }}
            <div class="triCircleDecoration">
              <div class="circleLeft"></div>
              <div class="circleMid"></div>
              <div class="circleRight"></div>
            </div>
            <div class="tinyNav">
              <nav class="Navigation-Container">
                <ul class="navItemContainer">
                  <li class="navItem">
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      :underline="false"
                      >{{ $t('navigator.blogs') }}</a
                    >
                  </li>
                  <li class="navItem">
                    <a
                      href="/careers"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      :underline="false"
                      >{{ $t('navigator.careers') }}</a
                    >
                  </li>
                  <li class="navItem">
                    <a
                      @click="moveToBottom"
                      rel="nofollow noopener noreferrer"
                      :underline="false"
                      >{{ $t('navigator.contactUs') }}</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="footerInfoContainer">
            <div class="addrContainer footerBlockContainer">
              <div class="containerWM"></div>
              <div class="addrTitle footerBlockTitle">
                {{ $t('contact.address') }}
              </div>
              <div class="addrContent footerBlockContent">
                {{ $t('contact.addressContent') }}
              </div>
            </div>
            <div class="seperator"></div>
            <div class="telContainer footerBlockContainer">
              <div class="containerWM"></div>
              <div class="telTitle footerBlockTitle">
                {{ $t('contact.tel') }}
              </div>
              <div class="telContent footerBlockContent">
                {{ $t('contact.telNum') }}
              </div>
            </div>
            <div class="seperator"></div>
            <div class="emailContainer footerBlockContainer">
              <div class="containerWM"></div>
              <div class="emailTitle footerBlockTitle">{{ $t('contact.email') }}</div>
              <div class="emailContent footerBlockContent">{{ $t('contact.emailAddr') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomFooterContainer">Copyright © Future Network of Intelligence Institute</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
import { ref } from 'vue'

const moveToBottom = () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'smooth' })
}

const props = defineProps({
  bgImg: {
    type: String
  },
  langCss: {
    type: String
  }
})
let styleVar = computed(() => {
  return { background: props.bgImg }
})
</script>

<style scoped>
.Component5-Container {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 0dvh;
  overflow: hidden;
}

.slideContainer {
  display: flex;
  width: 100%;
  height: 40vmax;
  padding: 7.5% 10%;
  box-sizing: border-box;
}

.innerContainer {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1.25vmax;
  background: #e1e6fa;
}

.circleDecoration {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5%;
}
.leftTop {
  align-items: start;
  justify-content: start;
}
.rightTop {
  align-items: flex-start;
  justify-content: flex-end;
}
.leftBottom {
  align-items: flex-end;
  justify-content: flex-start;
}
.rightBottom {
  align-items: flex-end;
  justify-content: flex-end;
}
.triCircleDecoration {
  display: flex;
  position: relative;
  height: 100%;
  width: auto;
  box-sizing: border-box;
  padding: 1.5%;
}
.circleLeft {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 50%);
  mix-blend-mode: hard-light;
  transform: translateX(25%);
}
.circleMid {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 62.5%);
  mix-blend-mode: hard-light;
  transform: translateX(0%);
}
.circleRight {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 75%);
  mix-blend-mode: hard-light;
  transform: translateX(-25%);
}

.textPart {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 11% 7.5% 7.5% 7.5%;
  width: 100%;
}

.footerTitle {
  display: flex;
  color: #53608f;
  font-size: 4vmax;
  text-transform: uppercase;
  font-family: 'Alibaba-puhui-heavy';
}
.footerInfoContainer {
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.8vmax;
  font-family: 'libreBaskerville', 'SiYuanSongBold';
}

.footerBlockContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3vmax 3vmax 2vmax;
  width: 100%;
  overflow: hidden;
}

.footerBlockTitle {
  font-size: 0.9vmax;
  color: #53608f;
  font-family: 'SiYuanSongHeavy';
  z-index: 10;
}

.footerBlockContent {
  color: #3d51c4;
  font-family: 'SiYuanSongMedium';
  margin-top: 0.5vmax;
  line-height: 1.5;
  z-index: 10;
}
.seperator {
  position: relative;
  display: flex;
  width: 0.45vmax;
  border-radius: 0.5vmax;
  height: 50%;
  transform: translateY(100%);
  box-sizing: border-box;
  background-color: #ffffff7f;
}

.containerWM {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: translate(-3vmax, 8vmax);

  filter: drop-shadow(0 -11vmax #ffffff2f) saturate(180%);
}
.addrContainer .containerWM {
  background-image: url('@/assets/icon/component/ADDRESS_tiny.png');
}
.telContainer .containerWM {
  background-image: url('@/assets/icon/component/TEL_tiny.png');
}
.emailContainer .containerWM {
  background-image: url('@/assets/icon/component/email_tiny.png');
}
.mainSide {
  width: 44%;
}
.subSide {
  box-sizing: border-box;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* word-wrap: break-word; */
  display: flex;
}
.leftContainer .titleContainer {
  margin-top: 4.5vmax;
}
.rightContainer .titleContainer {
  margin-top: 4.5vmax;
}
.showContent {
  transform: translateY(55%);
}

.thicken {
  font-family: 'alibaba-puhui-medium';
}

.iconContainer {
  display: flex;
  box-sizing: border-box;
  width: 2vmax;
  aspect-ratio: 1;
  margin-right: 0.25vmax;
  padding: 0.2vmax;
  overflow: hidden;
}

.iconImg {
  position: relative;
  object-fit: cover;
  box-sizing: border-box;
  width: 1.2vmax;
  height: 1.2vmax;
  vertical-align: -12.5%;
  filter: drop-shadow(0 -15vmax #ffffff);
  transform: translateY(15vmax);
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

.tinyNav {
  position: relative;
  display: flex;
  width: 50%;
  transform: translateX(-7.5vmax);
  align-items: center;
  justify-content: center;
}

.zh .tinyNav {
  transform: translateX(4vmax) !important;
}

.Navigation-Container {
  display: flex;
  position: relative;
  width: 30%;
}
.navItemContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24vmax;
  height: 100%;
  /* margin: 0 7.5%; */
  box-sizing: border-box;
  font-family: 'alibaba-puhui-bold';
  text-transform: uppercase;
}
.navItem {
  display: flex;
  width: 8vmax;
  margin: 0 0.75vmax;
  height: 100%;
  font-size: 1vmax;
  cursor: pointer;
}
.navItem > a {
  display: flex;
  text-decoration: none;
  color: hsl(231, 53%, 50%);
  align-items: center;
  transition: color 0.25s linear;
}
.navItem > a:hover {
  color: hsl(231, 53%, 80%);
}
</style>
