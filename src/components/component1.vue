<template>
  <!-- 主页封面下第一个满屏页面编号为01 -->
  <div :class="['Component-Container', langCss]">
    <div class="componentTextPart">
      
      <div class="sloganContainer">
        <div class="componentNumber"><span>0</span><span>1</span></div>
      </div>
      <div class="sloganContainer">
        <div class="componentTitle componentSlogan">{{ $t('mission.title') }}</div>
      </div>
      <div class="sloganContainer">
        <div class="componentContent componentSlogan componentContentStep componentContentStep1">
          {{ $t('mission.contentLine1') }}
        </div>
      </div>
      <div class="sloganContainer">
        <div class="componentContent componentSlogan componentContentStep componentContentStep1">
          {{ $t('mission.contentLine2') }}
        </div>
      </div>

      <div class="sloganContainer">
        <div class="componentContent componentSlogan componentContentStressed">
          <div>
            <span class="stressedText">{{ $t('mission.target1') }}</span
            ><span>{{ $t('mission.comma') }}</span>
          </div>
          <div>
            <span class="stressedText">{{ $t('mission.target2') }}</span>
            <span class="and stressedText">{{ $t('mission.and') }}</span>
          </div>

          <div class="stressedText">{{ $t('mission.target3') }}</div>
        </div>
      </div>

      <!-- <arrow class="arrowLink01" :themeColor="'#53608F'">Learn More</arrow> -->
    </div>

    <div class="componentImagePart">
      <div class="componentImg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arrow from '@/utils/circleArrow.vue'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// 获取当前页面的语言类型，默认为中文，从而控制不同语言下的css
const langCss = ref(window.localStorage.getItem('lang') || 'zh')

onMounted(() => {
  // 页面动画图片物体时间线 
  const bootImgTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component-Container',
      start: 'top top',
      end: '+=400%',
      toggleActions: 'play complete reverse reset',
      pin: true,
      // markers: {
      //   startColor: 'yellow',
      //   endColor: 'orange'
      // },
      scrub: 0.5
    }
  })
  // 页面动画图片物体初始设置
  bootImgTL.set('.componentImg', {
    xPercent: 50
  })
   // 页面动画图片物体分步设置
  bootImgTL
    .to('.componentImg', {
      xPercent: 0,
      duration: 1,
      autoAlpha: 1,
      ease: 'sine.in'
    })
    .to('.componentImagePart', {
      '--imageCoverPer': '0%',
      duration: 1,
      ease: 'sine.inOut',
      delay: 10
    })
    .to('.componentImg', {
      scaleY: 0,
      duration: 1,
      ease: 'sine.out',
      delay: 2.5
    })
// 页面动画文字物体时间线 
  const bootTextTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component-Container',
      start: 'top-=30% top',
      toggleActions: 'play complete resume reset',
      scrub: 0.5
    }
  })
  // 页面动画文字物体分步设置
  bootTextTL
    .to('.componentNumber', {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'sine.in'
    })
    .from('.componentContentStep', {
      autoAlpha: 0,
      yPercent: -100,
      duration: 0.5,
      ease: 'sine.in',
      stagger: 0.1
    })

    .from('.componentContentStressed > div', {
      autoAlpha: 0,
      yPercent: -100,

      duration: 0.5,
      ease: 'sine.in',
      stagger: 0.1
    })
    .to('.stressedText', {
      color: ' hsl(231, 75%, 75%)',
      duration: 0.5,
      ease: 'sine.in',
      stagger: 0.1
    })
    .to('.stressedText', {
      color: ' hsl(231, 75%, 25%)',
      duration: 0.5,
      ease: 'sine.in',
      stagger: 0.1
    })
  // .to('.arrowLink01', {
  //   autoAlpha: 1,
  //   duration: 0.5,
  //   ease: 'sine.in'
  // })
  // // 优先消除能选中状态
  // .to('.arrowLink01', {
  //   pointerEvents: 'auto',
  //   duration: 0.01,
  //   ease: 'none'
  // })

  // 页面结束动画时间线
  const quitTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.Component-Container',
      start: 'top+=30% top',
      end: '+=70%',
      // scrub: 0.5,
      // markers: true,
      toggleActions: 'play complete reverse reset'
    }
  })
  // 页面结束动画分布动画
  quitTL
    // // 优先消除能选中状态
    // .to('.Component-Container .arrowLink01', {
    //   pointerEvents: 'none',
    //   duration: 0.01,
    //   ease: 'none'
    // })
    // .to('.Component-Container .arrowLink01', {
    //   autoAlpha: 0,
    //   duration: 0.5,
    //   ease: 'sine.out'
    // })
    .to(
      '.Component-Container .componentSlogan',
      {
        autoAlpha: 0,
        yPercent: 100,
        duration: 0.5,
        ease: 'sine.out',
        stagger: 0.1
      },
      '>+=1'
    )
    .to('.Component-Container .componentNumber', {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'sine.out'
    })
})
</script>

<style scoped>
.Component-Container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  /* height: fit-content; */
  height: 100dvh;
  margin-top: 0dvh;
  background: linear-gradient(#e1e6fa, #ffffff);
  overflow: hidden;
}
.componentTextPart {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  margin: 5vmax 5%;
  margin-right: 0%;
  /* padding: 7.5% 0% 10% 5%; */
}
.componentNumber {
  display: flex;
  position: relative;
  border-radius: 50%;
  height: 10vmax;
  aspect-ratio: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 5vmax;
  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  font-family: 'alibaba-puhui-bold';
  line-height: 1.5;
  /* margin-bottom: -5%; */
  z-index: 1;
  visibility: hidden;
  opacity: 0;
}
.componentTitle {
  font-family: 'alibaba-puhui-heavy';
  text-transform: uppercase;
  font-size: 4.5vmax;
  line-height: 1;
  color: #53608f;
  text-shadow: 0 0 1rem #ffffff77;
  z-index: 5;
  margin: 1vmax 0 5%;
}

.zh .componentContent {
  font-size: 1.2vmax;
  line-height: 2;
}
.componentContent {
  font-family: 'SiYuanSongMedium';
  font-size: 1.1vmax;
  line-height: 1.5;
  color: hsl(231, 53%, 50%);
  padding: 0% 5% 0% 0.5%;
  position: relative;
}

.stressedText {
  font-family: 'libreBaskerville', 'SiYuanSongBold';
  font-size: 3vmax;
  line-height: 1.25;
  text-transform: uppercase;
  color: hsl(231, 100%, 25%);
}
.stressedText:not(.and):hover {
  color: hsl(231, 75%, 75%) !important;
}
.componentContentStressed {
  margin-top: 1.5%;
}
.componentImagePart {
  --imageCoverPer: 100%;
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 60%;
  padding: 5%;
}
.componentImg {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.25vmax;
  visibility: hidden;
  opacity: 0;
  background-size: cover;
  background-image: url('@/assets/BGImg/robotHand.jpg');
  transform-origin: top center;
}
.componentImg::after {
  content: '';
  position: absolute;
  /* top: 5%; */
  height: 100%;
  width: 100%;
  border-radius: 1.25vmax;
  background-color: hsl(227, 27%, 44%);
  clip-path: inset(var(--imageCoverPer) 0% 0% 0%);
}
/* .arrowLink01 {
  position: relative;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  font-family: 'alibaba-puhui-bold';
} */
.sloganContainer {
  overflow: hidden;
}
</style>
