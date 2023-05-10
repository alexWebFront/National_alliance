<template>
  <div class="popup" v-if="show" @click="closePopup">
    <div class="popup__content" @click.stop>
      <div class="popup__info" v-html="currentPopup.textHtml"></div>
      <img @click="closePopup" class="popup__close" src="../../assets/icons/close.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    currentPopup:{
      type: Object
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:show', false)
    }
  },
}
</script>

<style lang="scss">
.popup__info::-webkit-scrollbar {
  display: none;
}


.popup {
  top: 249px;
  right: 670px;
  left: 670px;
  bottom: 250px;
  position: fixed;
  display: flex;

  &__info{
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  &__content {
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 48px;
    min-width: 2500px;
    min-height: 1661px;
    border: 2px solid white;
    font-size: 150px;
    color: black;
    padding: 96px;

  }
  &__close{
    position: absolute;
    top: 64px;
    right: 64px;
    pointer-events: auto !important;
  }
}
</style>
