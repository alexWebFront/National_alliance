<template>
  <div class="navigation">
    <div class="navigation__left">
      <router-link ondrag="return false" ondragdrop="return false" ondragstart="return false" class="arrow" to="/">
        <img src="../assets/icons/arrow-back.svg" alt="">
      </router-link>
      <div class="navigation__menu">
        <div @click="selectDate(date)"
             :class="['navigation__item',{'navigation__item-active':currentDate.id === date.id}]"
             v-for="date in dates">{{ date.text }}
        </div>
      </div>
    </div>
    <div class="navigation__right">{{formatDate(dateRight)}}</div>
  </div>
</template>

<script>
export default {
  props: {
    currentDate: {
      type: Object,
    },
  },
  data() {
    return {
      dates: [
        {text: "14 марта", id: 14},
        {text: "15 марта", id: 15},
        {text: "16 марта", id: 16},
      ],
      // currentDate: {text: "14 марта", id: 14},
      dateRight: new Date(),
    }
  },
  methods: {
    selectDate(date) {
      // this.currentDate = date;
      this.$emit('getDate', date)
    },
    formatDate: d => d.toLocaleString('ru-RU').replace(',', '').slice(10, -3),
  },
  mounted() {
    setInterval(()=>{
      this.dateRight = new Date()
    },1000)
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__left {
    display: flex;
    gap: 150px;
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 22px 20px;
    //width: 1166px;
    height: 194px;
    background: rgba(213, 139, 170, 0.2);
    border-radius: 120px;
  }

  &__item {
    font-family: 'Noto-semibold', sans-serif;
    font-size: 60px;
    line-height: 110px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    min-width: 362px;
    height: 150px;
    padding: 20px 40px;
  }

  &__item-active {
    background: #B6466C;
    border-radius: 120.577px;
  }

  &__right {
    font-family: 'Noto-semibold', sans-serif;
    font-size: 130px;
    line-height: 177px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
  }
}
</style>
