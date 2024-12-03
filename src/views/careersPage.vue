<template>
  <div class="CareersPage-Container">
    <navigation />
    <div class="coverImg">
      <div class="coverText">Careers</div>
    </div>
    <div class="contentContainer">
      <div class="breadcrumb">
        <a
          class="breadcrumbItem"
          href="/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          :underline="false"
          >Homepage</a
        >
        <div class="breadcrumbItem">Careers</div>
      </div>
      <div class="contentTitle">Careers</div>
      <div class="jobsContainer">
        <div class="jobPositionContainer">
          <div class="jobPosition">
            <div class="jobTitleContainer">
              <div class="jobTitle">JobTitle01</div>
              <!-- <div class="filler"></div> -->
              <div class="expandArrowContainer" @click="toggleJob">
                <div class="expandArrow"></div>
              </div>
            </div>
            <div class="jobContentContainer">
              <div class="jobInfo">Job Info line01 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line02 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line03 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line04 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line05 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line06 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line07 placeholder -- placeholder</div>
            </div>
          </div>
        </div>
        <div class="jobPositionContainer">
          <div class="jobPosition">
            <div class="jobTitleContainer">
              <div class="jobTitle">JobTitle02</div>
              <!-- <div class="filler"></div> -->
              <div class="expandArrowContainer" @click="toggleJob">
                <div class="expandArrow"></div>
              </div>
            </div>
            <div class="jobContentContainer">
              <div class="jobInfo">Job Info line01 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line02 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line03 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line04 placeholder -- placeholder</div>
            </div>
          </div>
        </div>
        <div class="jobPositionContainer">
          <div class="jobPosition">
            <div class="jobTitleContainer">
              <div class="jobTitle">JobTitle03</div>
              <!-- <div class="filler"></div> -->
              <div class="expandArrowContainer" @click="toggleJob">
                <div class="expandArrow"></div>
              </div>
            </div>
            <div class="jobContentContainer">
              <div class="jobInfo">Job Info line01 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line02 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line03 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line04 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line05 placeholder -- placeholder</div>
            </div>
          </div>
        </div>
        <div class="jobPositionContainer">
          <div class="jobPosition">
            <div class="jobTitleContainer">
              <div class="jobTitle">JobTitle04</div>
              <!-- <div class="filler"></div> -->
              <div class="expandArrowContainer" @click="toggleJob">
                <div class="expandArrow"></div>
              </div>
            </div>
            <div class="jobContentContainer">
              <div class="jobInfo">Job Info line01 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line02 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line03 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line04 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line05 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line06 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line07 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line08 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line09 placeholder -- placeholder</div>
              <div class="jobInfo">Job Info line10 placeholder -- placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script setup lang="ts">
import navigation from '@/components/navigation.vue'
import Footer from '@/components/footer.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const toggleJob = (e: MouseEvent) => {
  const jobPosition = (
    (e.target as HTMLElement).closest('.jobPositionContainer') as HTMLElement
  ).classList.toggle('toggleJob')
}
</script>

<style scoped>
.CareersPage-Container {
  position: relative;
  width: 100%;
}
.coverImg {
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 1920/720;
  background-image: linear-gradient(to bottom, #00000011, hsla(227, 0%, 0%, 0.733)),
    url('@/assets/BGImg/blog.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 8vmax;
  font-family: 'alibaba-puhui-bold';
  justify-content: center;
  padding-top: 17.5%;
  color: white;
  text-transform: uppercase;
}

.coverImg::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#00000000, #0000005f);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.coverText {
  z-index: 10;
}

.contentContainer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  /* min-height: 200dvh; */
  padding: 2.5% 10%;
  background-image: url('@/assets/BGImg/subPageBGv2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.breadcrumb {
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;
}

.breadcrumbItem {
  font-family: 'alibaba-puhui-bold';
  vertical-align: text-bottom;
  font-size: 0.9vmax;
  line-height: 1.5;
  color: hsl(231, 53%, 25%);
}

div[class='breadcrumbItem'] {
  color: hsl(231, 53%, 50%);
}

a[class='breadcrumbItem'],
a[class='breadcrumbItem']:link,
a[class='breadcrumbItem']:visited,
a[class='breadcrumbItem']:active,
a[class='breadcrumbItem']:focus {
  text-decoration: none !important;
}
a[class='breadcrumbItem']:hover {
  color: hsl(231, 53%, 75%);
  text-decoration: underline 0.1vmax !important;
}
.breadcrumbItem:not(:last-child)::after {
  content: url('src/assets/icon/component/rightBracket.svg');
  font-family: 'crimson';
  font-weight: bolder;
  margin: 0 0.5vmax;
  font-size: 0.9vmax;
  vertical-align: text-bottom;
}

.contentTitle {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 5% 0 2.5%;
  font-family: 'libreBaskerville';
  font-size: 2.5vmax;
  text-transform: uppercase;
  color: hsl(231, 53%, 10%);
}

.jobsContainer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  /* padding: 0 20% 0 0; */
}

.jobPositionContainer {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1vmax;
  margin: 1.5vmax 0;
  background: linear-gradient(hsla(210, 100%, 100%, 0.8) 60%, hsla(210, 100%, 97%, 0.8) 100%);
  backdrop-filter: blur(10px) saturate(180%);
  transition: all ease 0.5s;
  box-shadow: inset 0 0vmax 0.1vmax 0.1vmax rgba(0, 0, 0, 0.1);
}

.jobPositionContainer.toggleJob {
  box-shadow:
    inset 0 0vmax 0.1vmax 0.1vmax rgba(0, 0, 0, 0.1),
    0px 0.5vmax 1.25vmax 0.75vmax hsla(210, 100%, 50%, 0.05);
}

.jobPosition {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2.5vmax 5vmax;

  /* z-index: 10; */
  transition: all ease 0.5s;
  border-radius: 1vmax;
}

/* .jobPositionContainer.toggleJob .jobPosition {
  padding: 3.5vmax 5vmax;
} */

.jobTitleContainer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
}
.filler {
  flex: 1;
}

.expandArrowContainer {
  position: relative;
  box-sizing: border-box;
  /* width: 100%; */
  height: 2vmax;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  cursor: pointer;
}

.expandArrow {
  position: relative;
  height: 1vmax;
  aspect-ratio: 1;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('@/assets/icon/component/expandArrow.svg');
  transition: all ease 0.5s;
}

.jobPositionContainer.toggleJob .expandArrow {
  transform: rotate(180deg);
}

.jobTitle {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Hiragino Sans GB';
  font-weight: 600;
  font-size: 1vmax;
  line-height: 2;

  text-transform: uppercase;
}
.jobPositionContainer.toggleJob .jobContentContainer {
  max-height: 100vmax;
}

.jobContentContainer {
  width: 100%;
  height: 100%;
  max-height: 0;
  transition: max-height ease 0.5s;
  overflow: hidden;
}
.jobInfo {
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  font-family: 'Hiragino Sans GB';
  font-size: 0.8vmax;
  line-height: 1.5;
  margin: 1vmax 0 0.5vmax;
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
