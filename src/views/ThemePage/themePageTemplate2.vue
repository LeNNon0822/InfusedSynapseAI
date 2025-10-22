<template>
  <div class="ThemePage-Container">
    <navigation />
    <div class="coverImg">Title</div>
    <div class="themeContentContainer">
      <div class="themeContent">
        <div class="listItemContainer">
          <div class="listItemImage"></div>
          <div class="listItemContent">
            <div class="listItemTitle">ItemTitle</div>
            <div class="listItemIntroContainer">
              <div class="listItemIntro">
                BasicNewsInformationBasicNewsInformationBasicNewsInformationBasicNewsInformation
              </div>
              <div class="publishInfo">
                <div class="listItemIntro">By xxxxTEAM</div>
                <div class="listItemIntro">03 Sept, 2024</div>
              </div>
            </div>

            <div class="listItemLinkArrow" @click="routeTo('/template/1')">&#10142; Read More</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <backToTop />
    </div>
  </div>
</template>

<script setup lang="ts">
import navigation from '@/components/navigation.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '@/components/footer.vue'
import backToTop from '@/utils/backToTop.vue'
import {
  useRouter,
  type RouteLocation,
  type RouteLocationAsPathGeneric,
  type RouteLocationAsRelativeGeneric,
  type RouteLocationRaw
} from 'vue-router'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const bootTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.ThemePage-Container',
      start: 'top-=10% top',
      toggleActions: 'play pause resume reset'
    }
  })
  bootTL
    .from('.coverImg', {
      '--bracketDistanceHorizontal': '-20%',
      duration: 3.5,
      ease: 'power4.out'
    })
    .from(
      '.coverImg',
      {
        '--bracketDistanceVertical': '15%',
        duration: 2,
        ease: 'power1.out'
      },
      '>-=2.5'
    )
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.ThemePage-Container',
      start: 'top+=10% top',
      end: '+=30%',
      scrub: 0.5
      // markers: true
    }
  })

  scrollTL.to('.Navigation-BG-Container', {
    y: '-10vmax',
    duration: 0.25,
    ease: 'sine.inOut'
  })
})
const router = useRouter()
const routeTo = (addr: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) => {
  router.push(addr)
}
</script>

<style scoped>
.ThemePage-Container {
  position: relative;
  width: 100%;
}
.coverImg {
  --rightBracketTop: 57.5%;
  --leftBracketTop: 27.5%;
  --bracketDistanceVertical: 0%;
  --bracketDistanceHorizontal: 15%;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 1920/720;
  background-image: linear-gradient(to bottom, #00000011, hsla(227, 0%, 0%, 0.733)),
    url('@/assets/BGImg/blog.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  font-size: 12.5vmax;
  font-family: 'Inter-bold';
  justify-content: center;
  padding-top: 15%;
  color: white;
  text-shadow: 0 0 0.5rem #ffffff77;
}
.coverImg::after {
  display: flex;
  justify-content: center;
  align-items: center;

  content: '\251B';
  font-family: 'Courier New', Courier, monospace;
  position: absolute;
  top: calc(var(--rightBracketTop) + var(--bracketDistanceVertical));
  right: var(--bracketDistanceHorizontal);
  width: fit-content;
  height: fit-content;
}
.coverImg::before {
  display: flex;
  justify-content: center;
  align-items: center;

  content: '\250F';
  font-family: 'Courier New', Courier, monospace;
  position: absolute;
  top: calc(var(--leftBracketTop) - var(--bracketDistanceVertical));
  left: var(--bracketDistanceHorizontal);
  width: fit-content;
  height: fit-content;
}

.themeContentContainer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-top: 7.5%;
}
.themeContent {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0% 10% 10%;
}
.listItemContainer {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 2.5%;
  border-radius: 1.5vmax;
  background-image: linear-gradient(hsla(227, 40%, 50%, 1) 25%, hsla(227, 42%, 56%, 1) 90%);
}
.listItemImage {
  position: relative;
  width: 40%;
  aspect-ratio: 1695/1080;
  border-radius: 1.5vmax;
  /* height: 100%; */
  background-image: url('@/assets/BGImg/3dModel.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.listItemContent {
  position: relative;
  width: 60%;
  padding: 5% 5% 2.5%;
  color: white;
}
.listItemTitle {
  font-family: 'Inter-bold';
  font-size: 2.5vmax;
  line-height: calc(1.5 * 2.5vmax);
}

.listItemIntroContainer {
  margin: 2.5% 0 0.5%;
}
.publishInfo {
  display: flex;
  flex-direction: row;
}
.listItemIntro {
  font-family: 'Inter-regular';
  font-size: 0.75vmax;
  line-height: calc(1.5 * 0.75vmax);
  color: #ffffff77;
  margin-right: 0.5%;
  margin-bottom: 0.5%;
}
.listItemLinkArrow {
  font-family: 'Inter-regular';
  font-size: 0.9vmax;
  line-height: calc(1.5 * 0.9vmax);
  cursor: pointer;
}
</style>
