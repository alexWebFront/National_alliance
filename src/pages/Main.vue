<template>
  <div class="page">
    <div class="page__container">
      <div class="page__logo">
        <img src="../assets/images/logo.png" alt="" class="logo">
      </div>
      <div class="page__buttons">
        <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="link" to="/program">Программа</router-link>
        <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="link" to="/scheme">Схема</router-link>
        <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="link" to="/catalog">Каталог</router-link>
      </div>
    </div>
    <div class="image-apollo">
      <img src="../assets/images/apollo.png" alt="" class="apollo">
    </div>
  </div>
</template>

<script>


export default {
  name: "Main",
  components: {}

}
</script>

<style lang="scss" scoped>
.page {
  width: 3840px;
  height: 2160px;
  background-image: url(../assets/images/bg.png);
  position: relative;

  &__logo {
    width: 2045px;
    height: 954px;

    .logo {
      margin-top: 150px;
      margin-left: 1452px;
    }
  }

  &__buttons {
    position: absolute;
    top: 1266px;
    left: 1452px;
    display: flex;
    gap: 96px;
    z-index: 200;

    .link {
      width: 618px;
      height: 206px;
      font-family: "Noto-semibold", sans-serif;
      background: linear-gradient(180deg, #D58BAA 0%, #B6466C 100%);
      border-radius: 48px;
      font-size: 60px;
      line-height: 110px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none !important;
    }

  }



}

</style>
