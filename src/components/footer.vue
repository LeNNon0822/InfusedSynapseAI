<template>
  <div class="Footer-Container">
    <footer class="footer">
      <div class="footerTitle">INFUSED SYNAPSE AI</div>
      <div class="columnContainer">
        <div class="column column1">
          <div class="columnTitle"></div>
          <div class="rowItem rowLink"><div class="rowText">BLOGS</div></div>
          <div class="rowItem rowLink"><div class="rowText">CAREERS</div></div>
          <div class="rowItem rowLink"><div class="rowText">CONTACT US</div></div>
        </div>
        <div class="column column2">
          <div class="columnTitle"></div>
          <div class="rowItem">
            <div class="rowIcon">
              <img
                loading="lazy"
                decoding="sync"
                fetchpriority="high"
                class="iconImg"
                src="@/assets/icon/component/ADDRESS.png"
                alt=""
              />
            </div>
            <div class="rowText">Address</div>
            <div class="rowTextContent">xx Provience xx City xx Street xx Building</div>
          </div>
          <div class="rowItem">
            <div class="rowIcon">
              <img
                loading="lazy"
                decoding="sync"
                fetchpriority="high"
                class="iconImg"
                src="@/assets/icon/component/TEL.png"
                alt=""
              />
            </div>
            <div class="rowText">TEL</div>
            <div class="rowTextContent">xxxx-xxxxxxxxx</div>
          </div>
          <div class="rowItem">
            <div class="rowIcon">
              <img
                loading="lazy"
                decoding="sync"
                fetchpriority="high"
                class="iconImg"
                src="@/assets/icon/component/email.png"
                alt=""
              />
            </div>
            <div class="rowText">EMAIL</div>
            <div class="rowTextContent">xxxxxxxxxx@mail.com</div>
          </div>
        </div>
        <div class="footerIcon"></div>
      </div>
    </footer>
    <div class="bottomFooterContainer">Copyright © Future Network of Intelligence Institute</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Footer-Container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  background: linear-gradient(to bottom, #ffffff, #e1e6fa);
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 15% 10%; */
  /* padding-top: 12.5%; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: end;
  flex-direction: column;
}
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  /* border-top-left-radius: 1.25vmax;
  border-top-right-radius: 1.25vmax; */
  /* border: 0.25vmax solid #53608F; */
  border-bottom: none;
  background-color: #53608f;
  padding: 5% 10% 0;
}

.footerTitle {
  font-size: 2.5vmax;
  font-family: 'alibaba-puhui-bold';
  color: #ffffff;
}

.bottomFooterContainer {
  position: relative;
  display: flex;
  width: 100%;
  height: 10dvh;
  background-color: black;
  color: #ffffff;
  font-family: 'alibaba-puhui-medium';
  justify-content: center;
  align-items: center;
}
.columnContainer {
  display: flex;
  width: auto;
  /* height: fit-content; */
  /* padding: 0 0 0 5%; */
  padding: 5%;
  padding-right: 0;
  border-radius: 1.25vmax;
  background-color: #071c36;
  margin: 2.5% 0;
}
.column {
  margin: 0 2.5%;
}
.rowItem {
  position: relative; 
  display: flex;
  font-size: 1vmax;
  font-family: 'alibaba-puhui-regular';
  line-height: calc(2.5 * 1vmax);
  width: 10vmax;
  margin: 1.5vmax 0;
  align-items: center;
}
.rowLink {
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: #53608f;
}
.rowText {
  color: rgb(255, 255, 255);
  mix-blend-mode: overlay;
  z-index: 1;
  margin-left: 0%;
  text-align: center;
}
.rowLink::after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #152e85;
  z-index: 0;
  transform-origin: center left;
  clip-path: inset(0% calc(100% - 0.5vmax) 0% 0%);
  transition: all 0.5s ease-in-out;
}
.rowLink:hover::after {
  clip-path: inset(0 0 0 0);
}
.rowIcon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2vmax;
  /* height: 2vmax; */
  aspect-ratio: 1;
  /* margin-right: 15%; */
  overflow: hidden;
}
.icon Img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: drop-shadow(-5vmax 0 #ffffff);
  transform: translateX(5vmax);
}
.rowIcon + .rowText {
  width: 5vmax;
  text-align: left;
  margin: 0 2vmax;
  color: #53608f;
  mix-blend-mode: normal;
}
.rowTextContent {
  font-family: 'alibaba-puhui-regular';
  color: #d9e1ff;
}
.column2 {
  margin: 0 5%;
}
.column2 .rowItem {
  width: fit-content;
}

.footerIcon {
  position: relative;
  width: 15vmax;
  aspect-ratio: 1;
  background-size: cover;
  background-image: url('@/assets/icon/logo/logo_withCircle.png');
}
</style>
