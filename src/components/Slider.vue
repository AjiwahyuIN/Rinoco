<template>
    <div class="slider-wrapper">
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide> 
                <div class="card-slider">
                    <img src="../assets/images/item.svg" alt="">
                    <div class="card-slider-content">
                        <h4>Aria Windrider</h4>
                    </div>
                    <div class="card-slider-contents">
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt aute irure dolor in reprehenderit in voluptate</span>
                        <div class="card-slider-button">
                            <button class="btn-details trigger" v-on:click="toggleModal()" >Details</button>
                            <button class="button-yellow">Adopt This</button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide> 
                <div class="card-slider">
                    <img src="../assets/images/item.svg" alt="">
                    <div class="card-slider-content">
                        <h4>Aria Windrider</h4>
                    </div>
                    <div class="card-slider-contents">
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt aute irure dolor in reprehenderit in voluptate</span>
                        <div class="card-slider-button">
                            <button class="btn-details trigger" v-on:click="toggleModal()" >Details</button>
                            <button class="button-yellow">Adopt This</button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide> 
                <div class="card-slider">
                    <img src="../assets/images/item.svg" alt="">
                    <div class="card-slider-content">
                        <h4>Aria Windrider</h4>
                    </div>
                    <div class="card-slider-contents">
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt aute irure dolor in reprehenderit in voluptate</span>
                        <div class="card-slider-button">
                            <button class="btn-details trigger" v-on:click="toggleModal()" >Details</button>
                            <button class="button-yellow">Adopt This</button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide> 
                <div class="card-slider">
                    <img src="../assets/images/item.svg" alt="">
                    <div class="card-slider-content">
                        <h4>Aria Windrider</h4>
                    </div>
                    <div class="card-slider-contents">
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt aute irure dolor in reprehenderit in voluptate</span>
                        <div class="card-slider-button">
                            <button class="btn-details trigger" v-on:click="toggleModal()" >Details</button>
                            <button class="button-yellow">Adopt This</button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            
            ...
        </swiper>
        <div class="slider-nav">
            <button type="button" v-on:click="swiperPrevSlide()"> Prev Slide </button>
            <button type="button" @click="swiperNextSlide"> Prev Slide </button>
            <!-- <div type="button" @click="swiperPrevSlide" class="slider-prev"><img src="../assets/images/Button.svg" alt=""></div>
            <div type="button" @click="swiperNextSlide" class="slider-next"><img src="../assets/images/Button.svg" alt=""></div> -->
        </div>
    </div>

</template>


<script>
  // Import Swiper Vue.js components
  import {defineComponent, ref} from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation  } from 'swiper/modules';
  import 'swiper/css';


  // Import Swiper styles
  import 'swiper/css';

  export default {
    methods: {
        Navigation() {
            return Navigation
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
        const swiperInstance = ref()
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      const swiperNextSlide = () => {
            swiperInstance.value.slideNext()
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev()
        };
      return {
        onSwiper,
        onSlideChange,
        swiperPrevSlide,
        swiperNextSlide,
      };
    },
  };
</script>

<style scoped>
.slider-wrapper {
    width: 100%;
}
.slider-nav {
    position: relative;
    z-index: 2;
}
.card-slider {
    margin-top: 180px;
    border-radius: 80px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(10px);
    padding: 115px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: relative;
}
.card-slider img {
    position: absolute;
    top: -110px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.card-slider-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    max-width: 340px;
}
.card-slider-content h4 {
    color: #30323D;
    text-align: center;
    font-family: "Yellow Candy";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.card-slider-contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.card-slider-contents span {
    color: rgba(48, 71, 85, 0.80);
    text-align: center;
    text-overflow: ellipsis;
    font-family: "Artegra Soft Condensed";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.card-slider-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
}
.btn-details {
    padding: 14px 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #FFF;
    box-shadow: 0px -8px 8px 0px rgba(128, 222, 234, 0.50) inset;
    color: #006277;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
    border: none;
    cursor: pointer;
}
.card-slider-button button {
    width: 100%;
}
</style>