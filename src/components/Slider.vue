<template>
    <div class="slider-wrapper">
        <swiper
            :slides-per-view="3"
            :centered-slides="true"
            :space-between="50"
            ref="Slider"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :loop="true"
            :modules="[Navigation]"
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
            <div class="slider-nav">
                <button @click="swiperPrevSlide" type="button" > Prev Slide </button>
                <button @click="swiperNextSlide" type="button" > Next Slide </button>
                <!-- <div type="button" @click="swiperPrevSlide" class="slider-prev"><img src="../assets/images/Button.svg" alt=""></div>
                <div type="button" @click="swiperNextSlide" class="slider-next"><img src="../assets/images/Button.svg" alt=""></div> -->
            </div>
        </swiper>
    </div>

</template>

<script>
  // Import Swiper Vue.js components
  import { defineComponent, ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';


  // Import Swiper styles
  import 'swiper/css';

  export default defineComponent({
    name: 'Slider',
    methods: {
        Navigation() {
            return Navigation
        },
        next() {
            this.swiperInstance.slideNext();
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
        const swiperInstance = ref(null);
        const onSwiper = (swiper) => {
            swiperInstance.value = swiper;
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const swiperNextSlide = () => {
            swiperInstance.value.slideNext();
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev();
        };
        return {
            onSwiper,
            onSlideChange,
            swiperPrevSlide,
            swiperNextSlide,
            swiperInstance
        };
    },
  });
</script>

<style scoped>
/* .card-slider-contents {
    display: none !important;
} */
.slider-wrapper {
    width: 100%;
}
.slider-nav {
    position: relative;
    z-index: 2;
}
.swiper-slide-active .card-slider .card-slider-contents{
    max-height: 100%;
}
.card-slider {
    margin-top: 180px;
    border-radius: 64px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(10px);
    padding: 65px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: relative;
}
.card-slider img {
    max-width: 120px;
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
    max-height: 0px;
    overflow: hidden;
    transition: all 200ms ease;
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
