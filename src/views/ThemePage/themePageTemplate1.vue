<template>
  <div class="ThemePage-Container">
    <navigation />
    <div class="coverImg">Title</div>
    <div class="themeContentContainer">
      <div class="themeContent">
        <div class="themeContentTitle">SUBTitle2</div>
        <!-- <div class="titleContentDivider"></div> -->
        <div class="themeContentText">
          TextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFiller
        </div>
        <div class="themeContentText">
          TextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFiller
        </div>
      </div>
      <div class="themeContent">
        <div class="themeContentTitle">SUBTitle2</div>
        <!-- <div class="titleContentDivider"></div> -->
        <div class="themeContentText">
          TextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFiller
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
  font-family: 'alibaba-puhui-bold';
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
  padding: 0% 15% 10%;
}
.themeContentTitle {
  font-size: 5vmax;
  font-family: 'alibaba-puhui-bold';
  /* line-height: calc(1.25 * 7.5vmax); */
  color: #3d51c4;
  border-left: solid 0.75vmax #3d51c4;
  padding-left: 1.5vmax;
  /* padding-bottom: 1.5vmax; */
}
.themeContentTitle::before {
  content: '';
}
.titleContentDivider {
  width: 100%;
  height: 0.25vmax;
  background-color: #3d51c477;
  margin-bottom: 5%;
}
/* .titleContentDivider::before {
  content: '';
  position: absolute;

  width: 5vmax;
  height: 5vmax;
  background-color: #3d51c4;
} */
.themeContentText {
  font-size: 1vmax;
  font-family: 'alibaba-puhui-regular';
  line-height: calc(1.5 * 1vmax);
  text-indent: 2em;
  padding: 5% 7.5%;
  /* color: #3d51c4; */
}
</style>
