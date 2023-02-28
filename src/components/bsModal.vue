<template>
  <div>
    <div ref="trigger">
      <slot name="trigger"></slot>
    </div>
    <div ref="target">
      <slot name="target"></slot>
    </div>
  </div>
</template>

<script>

import {Modal} from 'bootstrap'

export default {
  mounted() {
    var trigger = this.$refs.trigger
    var target = this.$refs.target
    trigger.addEventListener('click', () => {
      var theModal = new Modal(target, {})
      theModal.show()
    })
  }
}
</script>

<style scoped>

</style>