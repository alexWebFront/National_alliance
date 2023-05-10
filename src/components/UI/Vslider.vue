<template>
  <div>
    <Swiper class="swiper"
            :navigation="{
               prevEl: prev,
               nextEl: next,
            }"
            :modules="modules"
            :space-between="20"
            :pagination="{clickable:true}">
      <swiper-slide v-for="image in swiperData">
        <img class="swiper__img" :src="image.img" alt="">
      </swiper-slide>
    </Swiper>
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next">
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Pagination, Navigation} from "swiper"
import { Controller } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css'
import 'swiper/css/pagination'


export default {
  setup() {
    const prev = ref(null);
    const next = ref(null);
    const swiperData = ref([
      {img: require('@/assets/images/1.webp')},
      {img: require('@/assets/images/2.webp')},
      {img: require('@/assets/images/3.webp')},
      {img: require('@/assets/images/4.webp')},
      {img: require('@/assets/images/5.webp')},
      {img: require('@/assets/images/6.webp')},
      {img: require('@/assets/images/7.webp')},
      {img: require('@/assets/images/8.webp')},
      {img: require('@/assets/images/9.webp')},
      {img: require('@/assets/images/10.webp')},
      {img: require('@/assets/images/11.webp')},
      {img: require('@/assets/images/12.webp')},
      {img: require('@/assets/images/13.webp')},
      {img: require('@/assets/images/14.webp')},
      {img: require('@/assets/images/15.webp')},
      {img: require('@/assets/images/16.webp')},
      {img: require('@/assets/images/17.webp')},
      {img: require('@/assets/images/18.webp')},
      {img: require('@/assets/images/19.webp')},
      {img: require('@/assets/images/20.webp')},
      {img: require('@/assets/images/21.webp')},
      {img: require('@/assets/images/22.webp')},
      {img: require('@/assets/images/23.webp')},
      {img: require('@/assets/images/24.webp')},
      {img: require('@/assets/images/25.webp')},
    ]);
    return {modules: [Pagination, Navigation], swiperData, prev, next}
  },
  name: "v-slider",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.swiper{
  width: 100vw;
  height: 100vh;
  img{
    width: 100%;
    height: 100%;
  }
}
::v-deep(.swiper-button-next){
  background: url(../../assets/icons/swiper-next.svg) no-repeat;
  pointer-events: all;
  width: 300px;
  height: 300px;
  right: -145px;
  top: 930px;
  &:after{
    content: '';
  }
}
::v-deep(.swiper-button-prev){
  background: url(../../assets/icons/swiper-prev.svg) no-repeat;
  pointer-events: all;
  width: 300px;
  height: 300px;
  left: 0;
  top: 930px;
  &:after{
    content: '';
  }
}

</style>
