<template>
<div class="scheme">
  <img src="../assets/images/scheme.webp" alt="">
  <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="scheme__arrow" to="/">
    <img  src="../assets/icons/arrow-back.svg" alt="">
  </router-link>
</div>
</template>

<script>
export default {
  name: "Scheme"
}
</script>

<style lang="scss" scoped>
.scheme{
  width: 100vw;
  height: 100vh;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  &__arrow{
    position: absolute;
    width: 200px !important;
    height: 200px !important;
    top: 150px;
    left: 150px;
    background: #71103D;
    border-radius: 48px;
  }
}
</style>
