<template>
  <nav class="secondary-nav">
    <ul>
      <li class="info" @click="emitId(this.$el.querySelector('.info'))"><a :class="{active: activeInfo}">Informácie o knižnici</a></li>
      <li class="gallery" @click="emitId(this.$el.querySelector('.gallery'))"><a :class="{active: activeGallery}">Galéria (27)</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ['showContent'],
  data() {
    return {
      activeInfo: true,
      activeGallery: false
    }
  },
  methods: {
    emitId(selector) {
      // REFACTOR IT WITH ACTIVE CLASS
      if (selector.classList == 'info'){
        this.$emit('showContent', 'news')
        this.activeInfo = true
        this.activeGallery = false
      } 
      else { 
        this.$emit('showContent', 'gallery') 
        this.activeGallery = true
        this.activeInfo = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
