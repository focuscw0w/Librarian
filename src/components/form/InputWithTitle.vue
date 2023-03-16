<template>
  <div>
    <label class="mb-2 text-h-emp" :for="inputId">{{title}}</label>
    <input type="text" class="form-control" :id="inputId" :value="value" @input="$emit('update', $event.target.value)">
  </div>
</template>

<script>
import VueTitle from "@/utilities/vue-title.vue";

export default {
  name: "InputWithTitle",
  components: {VueTitle},
  props: ["title", "value","inputId"],
  emits: ['update'],
  computed: {
    // id() {
    //   return 'input' + Math.random();
    // }
  }
}
</script>

<style scoped>

</style>