<template>
  <div class="program">
    <div class="program__container">
      <navigation @getDate="getDate" :currentDate="currentDateId"/>
      <halls :currentDateId="currentDateId"/>
    </div>
    <div class="image-apollo">
      <img src="../assets/images/apollo-opacity.png" alt="" class="apollo-opacity">
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Halls from "@/components/Halls";


export default {
  components: {
    Navigation, Halls,
  },
  data() {
    return {
      currentDateId: {text: "14 марта", id: 14},
    }
  },
  methods: {
    getDate (currentDate){
      this.currentDateId = currentDate
    }
  }
}
</script>

<style lang="scss" scoped>

.program {
  width: 3840px;
  height: 2160px;
  background: #71103D;
  position: relative;
  z-index: 10;

  &__container {
    padding: 150px 150px 20px 150px;
  }
}

</style>
