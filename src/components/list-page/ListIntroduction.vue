<template>
  <div class="list-introduction grey-10">
    <div class="container">
      <div class="list-introduction__content">
        <h4 class="list-introduction__content-heading mb-1">{{ heading }}</h4>
        <p class="size-15 text-md-emp">
          Magický rozprávač na výprave do hraničných oblastí sveta temnoty a
          chaosu. Geralt naďalej pátra po zlopovestnom tajomnom Riencovi, ktorý
          Ciri vytrvalo prenasleduje
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading"],
};
</script>
