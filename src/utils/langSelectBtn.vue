<template>
  <div class="langSelectBtn">
    <div class="langSelectBtnContainer">
      <!-- <div class="slash">/</div> -->
      <div class="selectedOption zhBtn" v-if="locale != 'zh'" @click="changeLang($event, 'zh')">
        中
      </div>

      <div class="selectedOption engBtn" v-if="locale != 'en'" @click="changeLang($event, 'en')">
        EN
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { locale } = useI18n()
const router = useRouter()
import ScrollTrigger from 'gsap/ScrollTrigger'
const changeLang = (e: Event, lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
  let el = e.target as HTMLElement
  el.classList.add('selectedItem')
  if (el.classList.contains('zhBtn')) {
    el.nextElementSibling?.classList.remove('selectedItem')
    // console.log(el.nextElementSibling)
  } else {
    el.previousElementSibling?.classList.remove('selectedItem')
    // console.log(el.previousElementSibling)
  }
  ScrollTrigger.killAll()
  router.push('/refresh')
}
</script>

<style scoped>
.langSelectBtn {
  position: relative;
  display: flex;
  width: 30%;
  height: 100%;
  color: #fff;
  cursor: pointer;
  justify-content: flex-end;
  align-items: center;
}
.langSelectBtnContainer {
  position: relative;
  box-sizing: border-box;
  height: 2.75vmax;
  aspect-ratio: 1;
  border-radius: 0.75vmax;
  border: #fff solid 0.2vmax;

  filter: drop-shadow(0 0.05vmax 0.15vmax #ccccccaa);
  margin: 0 7.5%;
}
.slash {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  transform: translateY(0vmax);
}

.zhBtn.selectedOption {
  font-family: 'Alibaba-puhui-bold';
}

.selectedOption {
  display: flex;
  position: absolute;
  height: 100%;
  aspect-ratio: 1;
  font-size: 1.2vmax;
  font-family: 'Inter-bold';
  /* font-weight: bolder; */
  color: hsl(231, 53%, 50%);
  z-index: 99;
  transition: all 0.25s ease-in-out;
  /* text-shadow: #ffffff 0.05vmax 0.1vmax 0.25vmax; */
  justify-content: center;
  align-items: center;
}
.selectedOption:hover {
  color: hsl(231, 53%, 80%);
}
.zhBtn {
  top: 0;
  left: 0vmax;
}
.engBtn {
  top: 0;
  right: 0vmax;
}
</style>
