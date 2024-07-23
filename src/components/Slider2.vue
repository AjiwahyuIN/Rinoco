<template>
  <div class="swiper-container">
    <swiper
      :modules="[Navigation]"
      navigation
      ref="mySwiper"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        {{ slide }}
      </swiper-slide>
    </swiper>

    <!-- Custom Navigation -->
    <div class="custom-navigation">
      <button @click="prevSlide" class="custom-prev">Previous</button>
      <button @click="nextSlide" class="custom-next">Next</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
    };
  },
  methods: {
    prevSlide() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    nextSlide() {
      this.$refs.mySwiper.swiper.slideNext();
    },
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.custom-navigation {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.custom-prev,
.custom-next {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.custom-prev:hover,
.custom-next:hover {
  background-color: #0056b3;
}
</style>
