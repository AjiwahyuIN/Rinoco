<script>


// Import Swiper Vue.js components
  import { defineComponent, ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import "../style/component/HeroMint.css"


  // Import Swiper styles
  import 'swiper/css';

  export default defineComponent({
    name: 'Slider',
    data(){
        return{
            showModal: false,
            tabState: 1,
            isActive:true,
            showLayout1: true,
            showLayout2: true
        }
    },
    mounted() {
    AOS.init()
    },
    methods: {
        toggleLayout() {
            if (this.isMobile()) {
                this.showLayout1 = !this.showLayout1;
                this.showLayout2 = !this.showLayout2;
                console.log('Fungsi iki aktif ing tampilan mobile!');
            } else {
                console.log('Iki ora aktif ing tampilan mobile.');
            }
        },
        toggleText() {
        this.display = !this.display;
        },
        toggleModal(){
            this.showModal = !this.showModal
            if(this.showModal == false){
                this.showLayout2 = this.isMobile() ? false : true
                this.showLayout1 = true
            }
        },
        switchTab(state){
            this.tabState = state
        },
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
    created: function () {
        if(this.isMobile()){
            this.showLayout2 = false;
        }
    },
    setup() {
        const isMobile = () => {
            return window.innerWidth <= 768;
        }
        const swiperInstance = ref(null);
        const onSwiper = (swiper) => {
            swiperInstance.value = swiper;
            // console.log(swiper);
            if (!isMobile()) {
                let target = document.querySelector('.swiper-slide-prev').previousElementSibling
                let target2 = document.querySelector('.swiper-slide-next').nextElementSibling
                target.classList.add('hide')
                target2.classList.add('hide')
                target.previousElementSibling.classList.add('out')
                target2.previousElementSibling.classList.add('out')
            }
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        const swiperNextSlide = () => {
            swiperInstance.value.slideNext();
            if (!isMobile()) {
                document.querySelectorAll('.swiper-slide').forEach((e)=>{
                    e.classList.remove('hide','out')
                })
                setTimeout(()=>{
                    let target = document.querySelector('.swiper-slide-prev').previousElementSibling
                    let target2 = document.querySelector('.swiper-slide-next').nextElementSibling
                    target.classList.add('hide')
                    target2.classList.add('hide')
                    target.previousElementSibling.classList.add('out')
                    target2.nextElementSibling.classList.add('out')
                },1)
            }
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev();
            if (!isMobile()) {
                document.querySelectorAll('.swiper-slide').forEach((e)=>{
                    e.classList.remove('hide','out')
                })
                setTimeout(()=>{
                    let target = document.querySelector('.swiper-slide-prev').previousElementSibling
                    let target2 = document.querySelector('.swiper-slide-next').nextElementSibling
                    target.classList.add('hide')
                    target2.classList.add('hide')
                    target.previousElementSibling.classList.add('out')
                    target2.nextElementSibling.classList.add('out')
                },1)
            }
        };
        return {
            onSwiper,
            onSlideChange,
            swiperPrevSlide,
            swiperNextSlide,
            isMobile,
            swiperInstance
        };
    },
  });

</script>


<template id="HeroMint">
    <section class="sec-hero-mint">
        <div class="container c-mint">
            <div class="hero-mint">
                <img src="../assets/images/The Rinodex.svg" alt="">

                <div class="slider-wrapper">
                    <swiper
                        :slides-per-view="5"
                        :centered-slides="true"
                        :space-between="24"
                        ref="Slider"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        :loop="true"
                        :draggable="false"
                        :allowTouchMove="false"
                        :breakpoints="{ 320:{ slidesPerView:1 }, 1024:{ slidesPerView:5, } }"
                    >
                        
                        <swiper-slide> 
                            <div class="card-slider">
                                <img src="../assets/images/Frame 1321315714.png" alt="">
                                <div class="card-slider-content">
                                    <h4>Riley Hunter</h4>
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
                                <img src="../assets/images/Frame 1321315713.png" alt="">
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
                                <img src="../assets/images/Frame 1321315713k.png" alt="">
                                <div class="card-slider-content">
                                    <h4>Jasper Frost</h4>
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
                                <img src="../assets/images/Frame 1321315714.png" alt="">
                                <div class="card-slider-content">
                                    <h4>Riley Hunter</h4>
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
                                <img src="../assets/images/Frame 1321315714.png" alt="">
                                <div class="card-slider-content">
                                    <h4>Riley Hunter</h4>
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
                                <img src="../assets/images/Frame 1321315714.png" alt="">
                                <div class="card-slider-content">
                                    <h4>Riley Hunter</h4>
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
                        <div class="slider-nav-btn slider-nav-btn-prev" @click="swiperPrevSlide" type="button" > <img src="../assets/images/Iconly/Bold/Arrow - Right.svg" alt=""> </div>
                        <div class="slider-nav-btn slider-nav-btn-next" @click="swiperNextSlide" type="button" > <img src="../assets/images/Iconly/Bold/Arrow - Right.svg" alt=""> </div>
                        <!-- <div type="button" @click="swiperPrevSlide" class="slider-prev"><img src="../assets/images/Button.svg" alt=""></div>
                        <div type="button" @click="swiperNextSlide" class="slider-next"><img src="../assets/images/Button.svg" alt=""></div> -->
                    </div>
                </div>
                <button class="button-yellow">Adopt a Rinoco</button>
            </div>
            <div class="mint-load">
                <div class="mint-load-header">
                    <h4>total Rinoco's adopted</h4>
                    <div class="mint-load-txt">
                        <h5>790</h5>
                        <span>/1500</span>
                    </div>
                </div>
                <div class="mint-progress">
                    <div class="mint-progress-value">

                    </div>
                </div>
            </div>
            <div class="modal" v-if="showModal">
                <div class="modal-content">
                    
                    <div class="modal-tab" v-if="showLayout2" >
                        <div id="tabs" class="modal-tab-btn">
                            <button :class="tabState == 1 ? 'current' : ''" data-tab="tab-1" v-on:click="switchTab(1)">About</button>
                            <button :class="tabState == 2 ? 'current' : ''" data-tab="tab-2" v-on:click="switchTab(2)">Base Stats</button>
                            <button :class="tabState == 3 ? 'current' : ''" data-tab="tab-3" v-on:click="switchTab(3)">Moves</button>
                        </div>
                        <div class="modal-tab-content">
                            <div :class="tabState == 1 ? 'tab-content current' : 'tab-content'"  id="tab-1">
                                <div class="about-tab">
                                    <h4>description</h4>
                                    <div class="about-tab-txt-wrapper">
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-left">
                                                <h5>SPECIES:</h5>
                                                <span>Seed</span>
                                            </div>
                                            <div class="about-tab-txt-left">
                                                <h5>ABILITIES:</h5>
                                                <span>Overgrow, Chlorophyl</span>
                                            </div>
                                        </div>
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-right">
                                                <h5>HEIGHT:</h5>
                                                <span>0.70 cm</span>
                                            </div>
                                            <div class="about-tab-txt-right">
                                                <h5>WEIGHT:</h5>
                                                <span>15.2 lbs (6.9 kg)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-tab">
                                    <h4>Breeding</h4>
                                    <div class="about-tab-txt-wrapper">
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-left">
                                                <h5>MALE:</h5>
                                                <span>875%</span>
                                            </div>
                                            <div class="about-tab-txt-left">
                                                <h5>FEMALE:</h5>
                                                <span>12.5%</span>
                                            </div>
                                        </div>
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-right">
                                                <h5>EGG GROUPS:</h5>
                                                <span>Monster</span>
                                            </div>
                                            <div class="about-tab-txt-right">
                                                <h5>EGG CYCLE:</h5>
                                                <span>Grass</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="tabState == 2 ? 'tab-content current' : 'tab-content'" id="tab-2">
                                <div class="base-tab">
                                    <h4>POWER</h4>
                                    <div class="base-content">
                                        <div class="base-content-wrapper">
                                            <span>HP</span>
                                            <div class="base-progress">
                                                <div class="red-value value-1"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>ATTACK</span>
                                            <div class="base-progress">
                                                <div class="green-value value-2"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>DEFENSE</span>
                                            <div class="base-progress">
                                                <div class="red-value value-3"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SP. ATK</span>
                                            <div class="base-progress">
                                                <div class="green-value value-4"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SP. DEF</span>
                                            <div class="base-progress">
                                                <div class="green-value value-5"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SPEED</span>
                                            <div class="base-progress">
                                                <div class="red-value value-6"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>TOTAL</span>
                                            <div class="base-progress">
                                                <div class="green-value value-7"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="base-tab">
                                    <h4>TYPE DEFENSES</h4>
                                    <span>The effectiveness of each type of Aria Windrider</span>
                                </div>
                            </div>
                            <div :class="tabState == 3 ? 'tab-content current' : 'tab-content'" id="tab-3">
                                <div class="moves-tab">
                                    <div class="moves-heading">
                                        <h4>DAMAGE</h4>
                                        <div class="moves-banner">
                                            Normal moves
                                        </div>
                                    </div>
                                    <div class="moves-content">
                                        <div class="moves-content-txt">
                                            <span>BASE DAMAGE</span>
                                            <h3>9000</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>DPS</span>
                                            <h3>4736.8</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>EPS</span>
                                            <h3>-13.2</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="moves-tab">
                                    <div class="moves-heading">
                                        <h4>pvp damage</h4>
                                    </div>
                                    <div class="moves-content">
                                        <div class="moves-content-txt">
                                            <span>BASE DAMAGE</span>
                                            <h3>0</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>DPS</span>
                                            <h3>0</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>EPS</span>
                                            <h3>0</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" v-if="!showLayout1" class="button-yellow btn-back-mobile" @click="toggleLayout">Back</a>
                    </div>
                    <div class="modal-img-wrapper" v-if="showLayout1">
                        <div class="close-button" v-on:click="toggleModal()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                        <div class="modal-img-content">
                            <img src="../assets/images/Frame 1321315713.png" alt="">
                            <h2>Aria Windrider</h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</span>
                        </div>
                        <div class="modal-btn-wrapper">
                            <a href="#" class="button-yellow">Choose this character</a>
                            <a href="#" class="button-yellow btn-details-mobile" @click="toggleLayout">Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- <Footer/> -->
</template>


