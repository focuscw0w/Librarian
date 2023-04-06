<template>
  <nav class="secondary-nav">
    <ul class="mb-0 ps-0">
      <li class="info" @click="emitId('info')">
        <a :class="{ active: activeInfo }">Informácie o knižnici</a>
      </li>
      <li class="gallery" @click="emitId('gallery')">
        <a :class="{ active: activeGallery }">Galéria (27)</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ["showInfo", "showGallery"],
  data() {
    return {
      activeInfo: true,
      activeGallery: false,
    };
  },
  props: {
    library: null,
  },
  methods: {
    emitId(selector) {
      this.$emit(
        selector === "info" ? "showInfo" : "showGallery",
        selector === "info" ? "news" : "gallery"
      );
      this.activeInfo = selector === "info";
      this.activeGallery = selector === "gallery";
    },
  },
};
</script>
