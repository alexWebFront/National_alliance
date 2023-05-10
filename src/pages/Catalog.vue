<template>
  <div class="catalog">
    <vslider/>
    <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="arrow-catalog" to="/">
      <img src="../assets/icons/arrow-back.svg" alt="">
    </router-link>
  </div>
</template>

<script>
import Vslider from "@/components/UI/Vslider";
document.oncontextmenu = function (e) {
  return false
};

export default {
  components: {
    Vslider
  }
}
</script>

<style lang="scss">
.catalog {
  width: 3840px;
  height: 2160px;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}

.arrow-catalog {
  position: absolute;
  top: 1880px;
  left: 25px;
  background: #71103D;
  border-radius: 48px;
  z-index: 300;
}

</style>
