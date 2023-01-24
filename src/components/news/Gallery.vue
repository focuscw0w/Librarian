<template>
   <section class="gallery ">
    <!--namiesto vložených obrázkov, spraviť boxy a tým nastaviť background-->
      <div class="grid-container">
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
        <div class="grid-container__wrapper">
          <img class="wrapper__img" :src="require('@/assets/images/book.png')" alt="book image" />
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
</style>