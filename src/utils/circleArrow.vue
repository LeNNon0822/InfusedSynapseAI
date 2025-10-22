<template>
  <div class="arrowLink">
    <div class="circleSVGContainer">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <circle
          cx="50%"
          cy="50%"
          r="30%"
          fill="none"
          stroke-width="5%"
          :stroke="themeColor"
          stroke-dasharray="300,300"
          stroke-dashoffset="0"
          class="svgCircle"
        />
      </svg>
      <img
        src="@/assets/icon/component/leftArrow.png"
        loading="lazy"
        decoding="auto"
        fetchpriority="high"
        alt=""
        class="leftArrow"
        :style="{ filter: 'drop-shadow(-5vmax 0px ' + themeColor + ')' }"
      />
      <div class="leftArrow"></div>
    </div>
    <div class="linkText" :style="{ color: themeColor }"><slot></slot></div>
    <div class="textBG"></div>
  </div>
</template>

<script setup lang="ts">
// 父传子 传递主题颜色
const props = defineProps({
  themeColor: {
    type: String,
    default: 'white'
  }
})
// const themeColor = ref('black')
</script>

<style scoped>
.arrowLink {
  display: flex;
  position: relative;
  box-sizing: border-box;
  height: 5vmax;
  width: 15vmax;
  margin-left: -0.5%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  pointer-events: auto;

  /* z-index: 1000; */
}
.circleSVGContainer {
  position: relative;
  display: flex;
  width: 5vmax;
  height: fit-content;
  /* aspect-ratio: 1; */
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}
.svgCircle {
  transition: all 0.5s ease-in-out;
  stroke-dashoffset: 300;
}

.leftArrow {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: all 0.375s 0.125s ease-in-out;
  opacity: 1;

  transform: translateX(5vmax);
  filter: drop-shadow(-5vmax 0px #ffffff);
}
.arrowLink:hover .svgCircle {
  stroke-dashoffset: 0;
}
.circleSVGContainer .svgArrow {
  opacity: 1;
}
.arrowLink:hover .linkText {
  transform: translateX(-7.5%) translateY(2.5%);
}

.linkText {
  display: flex;
  height: 100%;
  width: 10vmax;
  justify-content: center;
  align-items: center;
  font-family: 'Inter-bold';
  font-size: 1.2vmax;
  transition: all 0.5s ease-in-out;
  transform: translateX(-20%) translateY(2.5%);
  /* background-color: #ffffff33; */
  /* padding: 15%; */
  /* margin: 5% 0; */
  color: white;
  margin-top: -1.25%;
  /* border-bottom: solid 0.25vmax currentColor; */
}
.linkText::after {
  content: '';
  position: absolute;
  /* bottom: 25%; */
  width: 80%;
  height: 0.25vmax;
  transform: scaleX(0) translateY(450%);
  transform-origin: left center;
  transition: transform 0.5s 0.25s ease-in-out;
  background: currentColor;
}
.arrowLink:hover .linkText::after {
  transform: scaleX(1) translateY(450%);
}
</style>
