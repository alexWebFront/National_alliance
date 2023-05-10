<template>
  <div class="march14-preview">
    <div class="march14-preview__top">
      <p>Зал В.М. Тарновский</p>
      <span>10:00–12:00</span>
    </div>
    <div class="march14-preview__middle">
      <h2>ТОРЖЕСТВЕННОЕ ОТКРЫТИЕ</h2>
    </div>
    <div class="march14-preview__bottom">
      <p>Президиум: Камкин Е.Г., Пирадов М.А., Соломатина Т.В.,
        Лукьянов С.А., Потекаев Н.Н., Каприн А.Д., Мантурова
        Н.Е., Насонов Е.Л., Жукова О.В., Кунгуров Н.В., Королькова Т.Н.
        <span>Приветственные обращения</span>
        <span>Пленарное заседание</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.march14-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__top {
    font-size: 64px;
    line-height: 87px;
    color: #FFFFFF;
    position: relative;
    width: 100%;
    margin-bottom: 48px;

    p {
      font-family: 'Noto-regular', sans-serif;
      letter-spacing: 0.02em;
      text-align: center;
    }

    span {
      font-family: 'Noto-semibold', sans-serif;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 8px 32px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  &__middle {
    margin-bottom: 48px;
    h2 {
      font-family: 'Noto-semibold', sans-serif;
      font-size: 96px;
      line-height: 131px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: #FFFFFF;
    }
  }

  &__bottom {
    font-family: 'Noto-light', sans-serif;
    font-size: 48px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #c9a5b6;

    span {
      display: block;
      color: #FFFFFF;
    }
  }
}
</style>
