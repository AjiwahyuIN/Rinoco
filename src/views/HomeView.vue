<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <Navbar/>
  </main>
  <main>
    <Hero/>
  </main>
  <main>
    <Banner/>
  </main>
  <main>
    <Footer/>
  </main>
</template>

<style scoped>
.c-nav {
  position: relative;
  z-index: 9;
  margin: 0 auto;
}
.sec-hero {
  /* background-image: url("../assets/images/Video.png"); */
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size:cover;
}
.c-hero {
  margin: 0 auto;
    margin-top: -100px;
    padding-top: 160px;
    /* background-image:linear-gradient(180deg, rgba(66, 132, 145, 1) 0%, rgba(112,226,247,1) 70%, rgba(255,255,255,1) 100%); */
    padding-bottom: 470px;
    position: relative;
}
</style>
