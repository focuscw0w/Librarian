<template>
  <div
    class="search-bar d-flex justify-content-xl-between container pt-32 mt-32"
  >
    <div class="filter-buttons d-flex gap-3">
      <button class="bg-2 size-15 text-h-emp gap-2">
        Triedenie
        <BIconArrowDownUp class="filter-buttons__svg" />
      </button>
      <button class="bg-2 size-15 text-h-emp gap-2">
        Žáner
        <BIconFunnel class="filter-buttons__svg" />
      </button>
      <button v-if="!aboutAuthor" class="bg-2 size-15 text-h-emp gap-2">
        Autor
        <BIconPerson class="filter-buttons__svg" />
      </button>
    </div>
    <div class="d-flex align-items-center">
      <BIconSearch alt="search icon" class="search-icon ms-3" />
      <input
        class="search-input size-15"
        type="text"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
import { BIconSearch } from "bootstrap-icons-vue";
import { BIconPerson } from "bootstrap-icons-vue";
import { BIconArrowDownUp } from "bootstrap-icons-vue";
import { BIconFunnel } from "bootstrap-icons-vue";
export default {
  props: ["aboutAuthor", "placeholder"],
  components: {
    BIconSearch,
    BIconPerson,
    BIconArrowDownUp,
    BIconFunnel,
  },
};
</script>
