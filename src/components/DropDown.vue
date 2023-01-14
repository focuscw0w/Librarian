<template>
  <div class="dropdown">
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <div v-for="item in dropDownItems" :key="item">
            <a href="#" class="dropdown-item"> {{ item.content }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dropDownItems"],
};
</script>
