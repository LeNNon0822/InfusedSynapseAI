<template>
  <!-- 导航栏 -->
  <div :class="['Navigation-Select-Container', langCss]">
    <header class="Navigation-BG-Container">
      <nav class="Navigation-Container">
        <ul class="navItemContainer">
          <!-- BLOG区块暂时未开通 -->
          <li class="navItem">
            <a href="#" target="_blank" rel="nofollow noopener noreferrer" :underline="false">{{
              $t('navigator.blogs')
            }}</a>
          </li>
          <li class="navItem">
            <a
              @click="moveToCareers"
              target="_blank"
              rel="nofollow noopener noreferrer"
              :underline="false"
              >{{ $t('navigator.careers') }}</a
            >
          </li>
          <li class="navItem">
            <a @click="moveToBottom" rel="nofollow noopener noreferrer" :underline="false">{{
              $t('navigator.contactUs')
            }}</a>
          </li>
        </ul>
      </nav>
      <div class="logoContainer backgroundCover" @click="backToHomepage">
        <img
          loading="lazy"
          decoding="sync"
          fetchpriority="high"
          class="logo"
          src="@/assets/icon/logo/logo_withWord.png"
          alt=""
        />
      </div>
      <langSelectBtn />
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import langSelectBtn from '../utils/langSelectBtn.vue'
import { ref } from 'vue'
const langCss = ref(window.localStorage.getItem('lang') || 'zh')
const moveToCareers = () => {
  router.push('/careers')
}
const router = useRouter()
// 点击效果 -> 移动至页脚
const moveToBottom = async () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'smooth' })
}
// 点击效果 -> 移动至主页
const backToHomepage = () => {
  router.push('/')
}
</script>

<style scoped>
.Navigation-Select-Container {
  align-items: center;
  position: sticky;
  width: 100%;
  height: 12.5dvh;
  padding-top: 2.5dvh;
  top: 0dvh;
  margin-bottom: -17.5dvh;
  z-index: 100;
  transition: all 1.5s linear;
}
.Navigation-Select-Container:hover .Navigation-BG-Container {
  transform: translateY(0) !important;
}
.Navigation-BG-Container {
  transform: translateY(0%);
  display: flex;
  position: relative;
  width: 80%;
  height: 4vmax;
  background: linear-gradient(
    90deg,
    #ffffff55 10%,
    rgba(207, 217, 255, 0.7) 30%,
    rgb(164, 185, 255) 50%,
    rgba(207, 217, 255, 0.7) 70%,
    #ffffff55 90%
  );
  backdrop-filter: blur(10px) saturate(180%);
  margin: 0 10%;
  box-sizing: border-box;
  border-radius: 1vmax;
  padding: 0.75vmax 0%;
  z-index: 100;
  overflow: hidden;
  transform-origin: center center;
  transition:
    opacity 0.5s linear,
    transform 1s linear;
}
.Navigation-Container {
  display: flex;
  position: relative;
  width: 30%;
}

.zh .navItemContainer {
  font-family: 'Alibaba-puhui-heavy';
}

.navItemContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 7.5%;
  box-sizing: border-box;
  font-family: 'Inter-heavy';
  text-transform: uppercase;
}
.navItem {
  display: flex;
  width: 7vmax;
  margin: 0 0.5vmax;
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
.logoContainer {
  display: flex;
  width: 40%;
  justify-content: center;
  cursor: pointer;
}

.logo {
  aspect-ratio: 6845/994;
  box-sizing: border-box;
  height: 100%;
}
</style>
