<template>
  <div class="halls">

    <template v-if="currentDateId.id === 14">
      <div class="halls__names">
        <div class="halls__name">В.М.Тарновский</div>
        <div class="halls__name">П.В.Никольский</div>
        <div class="halls__name">А.Г.Полотебнов</div>
        <div class="halls__name">Г.И.Мещерский</div>
        <div class="halls__name">О.К.Шапошников</div>
        <div class="halls__title">Залы</div>
      </div>
    </template>
    <template v-if="currentDateId.id !== 14">
      <div class="halls__names">
        <div class="halls__name">П.В.Никольский</div>
        <div class="halls__name">А.Г.Полотебнов</div>
        <div class="halls__name">Г.И.Мещерский </div>
        <div class="halls__name">О.К.Шапошников</div>
        <div class="halls__name">М.П.Демьянович</div>
        <div class="halls__title">Залы</div>
      </div>
    </template>

    <div class="halls__container">
      <template v-if="currentDateId.id === 14">
        <march14/>
      </template>
      <template v-if="currentDateId.id === 15">
        <march15/>
      </template>
      <template v-if="currentDateId.id === 16">
        <march16/>
      </template>
    </div>
  </div>
</template>

<script>
import March14 from "@/components/March14";
import March15 from "@/components/March15";
import March16 from "@/components/March16";

export default {
  props: {
    currentDateId: {
      type: Object
    }
  },
  components: {
    March14, March15, March16
  },
}
</script>

<style lang="scss" scoped>

.halls__container::-webkit-scrollbar {
  display: none;
}

.halls {
  &__container {
    width: 100%;
    height: 1734px;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 10;
    position: relative;
    padding-bottom: 380px;
  }

  &__names {
    position: relative;
    border: 3px solid #B6466C;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 46px 0px;
    margin-bottom: 84px;
    margin-top: 141px;
  }

  &__name {
    font-family: 'Noto-semibold', sans-serif;
    width: 684.96px;
    font-size: 64px;
    line-height: 87px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #FFFFFF;
  }

  &__title {
    position: absolute;
    top: -60px;
    left: 1647px;
    padding: 24px 48px;
    width: 229px;
    height: 113px;
    background: #B6466C;
    border-radius: 48px;

    font-family: 'Noto-semibold', sans-serif;
    font-size: 48px;
    line-height: 65px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }

}


</style>
