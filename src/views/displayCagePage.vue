<template>
  <div class="articleTitleContainer contentContainer">
    <div class="articleTitle">
      <div>{{ $t('displayCage.title') }}</div>
    </div>
    <div class="articleTitle subTitle">
      <div>{{ $t('displayCage.subtitle') }}</div>
    </div>

    <div class="arthorNameLine">
      <div class="arthorNameContainer">
        <span class="arthorName">{{ $t('authorList.author01') }}</span
        ><span class="sup"> *, 1</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">{{ $t('authorList.author02') }}</span>
        <span class="sup"> *, 1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">{{ $t('authorList.author03') }}</span>
        <span class="sup">*, 1, 2, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName"> {{ $t('authorList.author04') }}</span
        ><span class="sup"> 2, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">{{ $t('authorList.author05') }}</span
        ><span class="sup"> 1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName"> {{ $t('authorList.author06') }}</span
        ><span class="sup"> 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName"> {{ $t('authorList.author07') }}</span
        ><span class="sup"> 1, 3, 4</span><span class="arthorName">. </span>
      </div>
    </div>
    <div class="expression">
      <span class="sup"> * </span><span class="expressionText">{{ $t('Equal Contribution') }}</span>
    </div>
    <div class="university">
      <div class="universityContainer">
        <span class="sup"> 1 </span
        ><span class="universityName">{{ $t('universityName.universityName1') }}, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 2 </span
        ><span class="universityName">{{ $t('universityName.universityName2') }}, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 3 </span
        ><span class="universityName">{{ $t('universityName.universityName3') }}, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 4 </span
        ><span class="universityName">{{ $t('universityName.universityName4') }}, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 5 </span
        ><span class="universityName">{{ $t('universityName.universityName5') }}, </span>
      </div>
    </div>
    <div class="buttonGroup">
      <button class="button">
        <div class="pdfIcon"></div>
        {{ $t('buttonGroup.pdfButton') }}
      </button>
      <button class="button">
        <div class="gitHubIcon"></div>
        {{ $t('buttonGroup.gitHubButton') }}
      </button>
      <button class="button">
        <div class="huggingFaceIcon"></div>
        {{ $t('buttonGroup.huggingFaceButton') }}
      </button>
    </div>
  </div>
  <div class="videoDisplayContainer contentContainer">
    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="../assets/mp4/test.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="../assets/mp4/test1.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="../assets/mp4/test2.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentMainTitle">Experiments</div>
    <div class="contentSubTitle">Direct Evaluations on Multiple Robot Platforms</div>
    <div class="content">
      We train OpenVLA by fine-tuning a pretrained Prismatic-7B VLM. Our model consists of three key
      elements: (1) a fused visual encoder, consisting of a SigLIP and a DinoV2 backbone, that maps
      image inputs to a number of ''image patch embeddings'', (2) a projector that takes the output
      embeddings of the visual encoder and maps them into the input space of a large language model,
      and (3) a Llama 2 7B language model backbone that predicts tokenized output actions. These
      tokens get decoded into continuous output actions that can be directly executed on the robot.
    </div>
    <div class="codeSpace">
      <pre>
        <!-- prettier-ignore -->
        <code>
@article{ kim24openvla, 
  title={OpenVLA: An Open-Source Vision-Language-Action Model},
  author={ {Moo Jin} Kim and Karl Pertsch and Siddharth Karamcheti and Ted Xiao and Ashwin Balakrishna and Suraj Nair and Rafael Rafailov and Ethan Foster and Grace Lam and Pannag Sanketi and Quan Vuong and Thomas Kollar and Benjamin Burchfiel and Russ Tedrake and Dorsa Sadigh and Sergey Levine and Percy Liang and Chelsea Finn}, 
  journal = {arXiv preprint arXiv:2406.09246}, year={2024}, 
}
        </code>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contentContainer {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
  padding: 5vmax 0;
}
.contentContainer:nth-child(even) {
  background-color: #f0f0f0;
}
.contentContainer:nth-child(odd) {
  background-color: #ffffff;
}
.articleTitleContainer {
  padding-top: 5vmax;
}
.articleTitle {
  display: flex;
  box-sizing: border-box;
  font-family: 'Alibaba-puhui-bold';
  font-size: 5vmax;
  color: #363636;
  justify-content: center;
  line-height: 1;
}
.subTitle {
  font-size: 4.5vmax;
}
.arthorNameLine {
  display: flex;
  width: 100%;
  font-family: 'Alibaba-puhui-regular';
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 20%;
  margin: 2.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.5vmax;
  justify-content: center;
}
.arthorNameContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 50%;
}
.expression {
  display: flex;
  margin: 1vmax 0 0;
  justify-content: center;
}
.expressionText {
  font-size: 1vmax;
  font-family: 'Alibaba-puhui-regular';
}
.university {
  display: flex;
  width: 100%;
  font-family: 'Alibaba-puhui-regular';
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 25%;
  margin: 1.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.2vmax;
  justify-content: center;
}
.universityContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 1vmax;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  margin: 1.5vmax 0 2.5vmax;
}
.button {
  display: flex;
  height: 2vmax;
  justify-content: center;
  align-items: center;
  border-radius: 1.5vmax;
  border: #363636 solid 0px;
  background-color: #363636;
  color: #ffffff;
  padding: 1.5vmax;
  margin: 0.5vmax;
  font-size: 1vmax;
}
.pdfIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url('@/assets/icon/component/pdf.png');
  background-size: contain;
  margin-right: 0.5vmax;
}
.gitHubIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url('@/assets/icon/component/github.png');
  background-size: contain;
  margin-right: 0.5vmax;
}
.huggingFaceIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url('@/assets/icon/component/huggingface.png');
  background-size: contain;
  margin-right: 0.5vmax;
}
.videoDisplayContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
}
.videoDisplayContainer video {
  height: 15vmax;
  aspect-ratio: 16/9;
  margin: 0 0.5vmax;
}

.articleMainBodyContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 5vmax 25%;
}
.contentMainTitle {
  font-family: 'Alibaba-puhui-bold';
  font-size: 2vmax;
  color: #363636;
  margin: 0 0 1vmax;
}
.contentSubTitle {
  font-family: 'Alibaba-puhui-bold';
  font-size: 1.25vmax;
  color: #363636;
  margin: 0 0 1.5vmax;
}
.content {
  font-family: 'Alibaba-puhui-regular';
  font-size: 1vmax;
  color: #363636;
  line-height: 1.5;
  margin: 0 0 1vmax;
}
.codeSpace {
  display: flex;
  /* justify-content: center; */
  overflow-x: scroll;
}
pre {
  display: flex;
  box-sizing: border-box;
  background-color: #d6d6d6;
  width: auto;
  padding: 1vmax 0;
}
code {
  font-family: NSimSun;
  font-size: 0.8vmax;
  color: #363636;
  line-height: 1.5;
  padding: 0.5vmax 3vmax;
}
</style>
