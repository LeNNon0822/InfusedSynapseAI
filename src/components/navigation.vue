<template>
  <div class="Navigation-Select-Container">
    <header class="Navigation-BG-Container">
      <nav class="Navigation-Container">
        <ul class="navItemContainer">
          <li class="navItem"><a href="#">Blogs</a></li>
          <li class="navItem"><a href="#">Careers</a></li>
          <li class="navItem">
            <a @click="moveToFooter">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div class="logoContainer backgroundCover" @click="backToHomepage">
        <img
          loading="lazy"
          decoding="sync"
          fetchpriority="high"
          class="logo"
          src="@/assets/icon/logo/logo_withWord.png"
          alt=""
        />
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const moveToFooter = () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'smooth' })
}
const backToHomepage = () => {
  router.push('/')
}
</script>

<style scoped>
.Navigation-Select-Container {
  align-items: center;
  position: sticky;
  width: 100%;
  height: 12.5dvh;
  padding-top: 2.5dvh;
  top: 0dvh;
  margin-bottom: -17.5dvh;
  z-index: 100;
  transition: all 1.5s ease-out;
}
.Navigation-Select-Container:hover .Navigation-BG-Container {
  /* opacity: 1 !important; */
  /* transform: translateY(0%) !important; */
  transform: translateY(0) !important;
}
.Navigation-BG-Container {
  transform: translateY(0%);
  display: flex;
  position: relative;
  width: 80%;
  height: 4vmax;
  background: linear-gradient(
    90deg,
    #ffffff55 10%,
    rgba(207, 217, 255, 0.7) 30%,
    rgb(164, 185, 255) 50%,
    rgba(207, 217, 255, 0.7) 70%,
    #ffffff55 90%
  );
  backdrop-filter: blur(10px) saturate(180%);
  /* margin: 2.5% 10%; */
  margin: 0 10%;
  box-sizing: border-box;
  border-radius: 1vmax;
  padding: 0.75vmax 0%;
  z-index: 100;
  overflow: hidden;
  /* transform: translateY(25%); */
  /* opacity: 0; */
  transform-origin: center center;
  transition:
    opacity 0.5s ease-in-out,
    transform 1s ease-in-out;
}
.Navigation-Container {
  display: flex;
  position: relative;
  width: 30%;
}
.navItemContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 7.5%;
  box-sizing: border-box;
  font-family: 'alibaba-puhui-medium';
  text-transform: uppercase;
}
.navItem {
  display: flex;
  width: fit-content;
  margin: 0 0.75vmax;
  height: 100%;
  font-size: 1vmax;
}
.navItem > a {
  display: flex;
  text-decoration: none;
  /* width: 7vmax; */
  color: hsl(231, 53%, 50%);
  align-items: center;

  /* text-shadow: 0px 1px 3px #153f9800; */
  /* justify-content: center; */
  transition: color 0.25s ease-in-out;
}
.navItem > a:hover {
  color: hsl(231, 53%, 80%);
}
.logoContainer {
  display: flex;
  width: 40%;
  justify-content: center;
  cursor: pointer;
  /* padding: 0.25vmax; */
  /* margin: 1%; */
}

.logo {
  aspect-ratio: 6845/994;
  box-sizing: border-box;
  height: 100%;
}
</style>
