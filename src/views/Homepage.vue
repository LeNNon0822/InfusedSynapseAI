<template>
  <!-- 主页 -->
  <div class="Homepage-Container">
    <navigation />
    <cover />
    <component1 />
    <component2 />
    <component3 />
    <component4/>
    <pageFooter bgImg="radial-gradient(#ffffff, #e1e6fa 80%)" />
    <backToTop />
  </div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import navigation from '@/components/navigation.vue'
import cover from '@/components/cover.vue'
import component1 from '@/components/component1.vue'
import component2 from '@/components/component2.vue'
import component3 from '@/components/component3.vue'
import component4 from '@/components/component4.vue'
import backToTop from '@/utils/backToTop.vue'
import pageFooter from '@/components/footer.vue'
import { onUnmounted } from 'vue'
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style scoped>
.Homepage-Container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
}
.spaceOccupied {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
}
</style>
