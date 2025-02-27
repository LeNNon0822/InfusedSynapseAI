<template>
  <div class="CareersPage-Container">
    <navigation />
    <div class="coverImg">
      <div class="coverText">{{ $t('career') }}</div>
    </div>
    <div class="contentContainer">
      <div class="textContentContainer">
        <div class="breadcrumb">
          <a
            class="breadcrumbItem"
            href="/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            :underline="false"
            >{{ $t('homepage') }}</a
          >
          <div class="breadcrumbItem">{{ $t('career') }}</div>
        </div>
        <div class="groupPhoto"></div>
        <div class="jobsContainer">
          <div class="jobPositionContainer" v-for="job in jobDict">
            <div class="jobPosition">
              <div class="jobTitleContainer">
                <div class="jobSymbol">
                  <div class="circleLeft"></div>
                  <div class="circleRight"></div>
                </div>
                <div class="jobTitle">{{ translateFn(job.jobTitle) }}</div>
                <div class="expandArrowContainer" @click="toggleJob">
                  <div class="expandArrow"></div>
                </div>
              </div>
              <div class="jobContentContainer" v-for="block in job.blocks">
                <div class="jobBlockTitle">{{ translateFn(block.blockTitle) }}</div>
                <div class="jobContent" v-for="line in block.blockContent">
                  <div class="jobInfo">{{ translateFn(line) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pageFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import navigation from '@/components/navigation.vue'
import pageFooter from '@/components/footer.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const translateFn = (infoStr: string) => {
  let address = 'job.'
  return t(address + infoStr)
}

//工作职位的结构以便v-for循环调用

const jobDict = [
  {
    jobTitle: 'jobTitle1',
    blocks: [
      {
        blockTitle: 'blockTitle1_1',
        blockContent: [
          'blockContent1_1_1',
          'blockContent1_1_2',
          'blockContent1_1_3',
          'blockContent1_1_4',
          'blockContent1_1_5',
          'blockContent1_1_6'
        ]
      },
      {
        blockTitle: 'blockTitle1_2',
        blockContent: [
          'blockContent1_2_1',
          'blockContent1_2_2',
          'blockContent1_2_3',
          'blockContent1_2_4',
          'blockContent1_2_5',
          'blockContent1_2_6',
          'blockContent1_2_7',
          'blockContent1_2_8',
          'blockContent1_2_9',
          'blockContent1_2_10'
        ]
      }
    ]
  },
  {
    jobTitle: 'jobTitle2',
    blocks: [
      {
        blockTitle: 'blockTitle2_1',
        blockContent: ['blockContent2_1_1', 'blockContent2_1_2', 'blockContent2_1_3']
      },
      {
        blockTitle: 'blockTitle2_2',
        blockContent: [
          'blockContent2_2_1',
          'blockContent2_2_2',
          'blockContent2_2_3',
          'blockContent2_2_4',
          'blockContent2_2_5'
        ]
      }
    ]
  },
  {
    jobTitle: 'jobTitle3',
    blocks: [
      {
        blockTitle: 'blockTitle3_1',
        blockContent: ['blockContent3_1_1', 'blockContent3_1_2', 'blockContent3_1_3']
      },
      {
        blockTitle: 'blockTitle3_2',
        blockContent: ['blockContent3_2_1', 'blockContent3_2_2', 'blockContent3_2_3']
      },
      {
        blockTitle: 'blockTitle3_3',
        blockContent: [
          'blockContent3_3_1',
          'blockContent3_3_2',
          'blockContent3_3_3',
          'blockContent3_3_4',
          'blockContent3_3_5'
        ]
      }
    ]
  }
]

const toggleJob = (e: MouseEvent) => {
  const jobPosition = (
    (e.target as HTMLElement).closest('.jobPositionContainer') as HTMLElement
  ).classList.toggle('toggleJob')
}
</script>

<style scoped>
.CareersPage-Container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
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
  font-family: 'Alibaba-puhui-heavy';
}

.contentContainer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  /* min-height: 200dvh; */

  background-image: url('@/assets/BGImg/subPageBGv2.jpg');
  background-repeat: no-repeat;
  /* background-position: top; */
  background-size: cover;
}

.textContentContainer {
  position: relative;
  padding: 2.5% 10%;
  width: 100%;
  box-sizing: border-box;
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
  content: url('@/assets/icon/component/rightBracket.svg');
  font-family: 'crimson';
  font-weight: bolder;
  height: 0.9vmax;
  margin: 0 0.5vmax;
  font-size: 0.9vmax;
  vertical-align: middle;
}

.groupPhoto {
  position: relative;
  display: flex;
  height: 35vmax;
  width: 100%;
  margin: 5% 0% 2.5%;
  background-size: cover;
  background-position: center 50%;
  background-image: url('@/assets/BGImg/groupPhoto.jpeg');
  border-radius: 1.25vmax;
  box-shadow: 0px 0.5vmax 1vmax 0.1vmax rgba(0, 0, 0, 0.25);
}

.contentTitle {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 5% 0 2.5%;
  font-family: 'libreBaskerville', 'SiYuanSongBold';
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
  /* transition: all ease 0.5s; */
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
  padding: 2.5vmax 5vmax 2.5vmax 5vmax;
  /* transition: all ease 0.5s; */
  border-radius: 1vmax;
}

.jobTitleContainer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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

.jobSymbol {
  display: flex;
  position: relative;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  width: 7.5vmax;
  box-sizing: border-box;
}
.circleLeft {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 50%);
  mix-blend-mode: hard-light;
}

.circleRight {
  position: relative;
  display: flex;
  height: 2vmax;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: hsl(231, 53%, 75%);
  mix-blend-mode: hard-light;
  transform: translateX(-50%);
}

.jobTitle {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Alibaba-puhui-bold';
  font-size: 1.2vmax;
  line-height: 2;
  text-transform: capitalize;
  color: hsl(231, 53%, 50%);
}
.jobPositionContainer.toggleJob .jobContentContainer {
  max-height: 100vmax;
  margin: 1vmax 0 2vmax;
}

.jobContentContainer {
  width: 100%;
  height: 100%;
  max-height: 0;
  overflow: hidden;
  margin: 0vmax;
}

.jobBlockTitle {
  font-size: 0.9vmax;
  font-family: 'Alibaba-puhui-medium';
  margin: 0vmax 0 0.5vmax;
  display: flex;
  box-sizing: border-box;
  line-height: 2;
}

.jobInfo {
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  /* font-family: 'Alibaba-puhui-regular'; */
  font-size: 0.8vmax;
  line-height: 2;
  /* margin: 1vmax 0 0.5vmax; */
}
</style>
