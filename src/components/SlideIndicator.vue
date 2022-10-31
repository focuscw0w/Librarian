<template>
  <div class="slide-marks">
    <button
      class="slide-control"
      :class="{slideControlActive: currentIndex === index}"
      v-for="(item, index) in total"
      :key="index"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["total", "currentIndex"],
};
</script>

<style lang="scss" scoped></style>
