<template>
  <aside class="aside">
    <article class="bg-2">
      <h3 class="aside__heading">Základné informacie</h3>
      <div class="aside__informations">
        <div>
          <h5 class="aside__informations__heading">Typ knižnice</h5>
          <div>Verejna kniznica</div>
        </div>

        <div>
          <h5 class="aside__informations__heading">Lokalita</h5>
          <div>Samuela Nováka 1763/2, 026 01 Dolný Kubín</div>
        </div>

        <div>
          <h5 class="aside__informations__heading">Otváracie hodiny</h5>
          <div><strong class="opened">Otvorené</strong> do 16:00</div>
        </div>

        <a href="#" class="more-informations">Viac informácii</a>

        <div>
          <h5 class="aside__informations__heading">Kontakt</h5>
        </div>

        <div>
          <h5 class="aside__informations__heading">Webstránka</h5>
        </div>

        <div class="features row">
          <div class="col-6 d-flex align-items-center gap-3">
              <span class="features__icon d-flex-center">
<WifiIcon :size="16"/>
              </span>
            Wi-fi pripojenie
          </div>
          <div class="col-6  d-flex align-items-center gap-3">
              <span class="features__icon d-flex-center">

                <WheelChairIcon :size="16"/>
              </span>
            Bezbarierový prístup
          </div>

          <div class="col-6  d-flex align-items-center gap-3">
              <div class="features__icon features__icon-grey d-flex-center">
                <CoffeeIcon :size="16"/>
              </div>
            Kaviareň
          </div>
          <div class="col-6  d-flex align-items-center gap-3">
              <div class="features__icon d-flex-center">
                <PrinterIcon :size="16"/>
              </div>
            Možnosť tlače
          </div>
        </div>
      </div>
    </article>
  </aside>
</template>

<script>
import PrinterIcon from 'vue-material-design-icons/Printer.vue'
import CoffeeIcon from 'vue-material-design-icons/Coffee.vue'
import WheelChairIcon from 'vue-material-design-icons/Wheelchair.vue'
import WifiIcon from 'vue-material-design-icons/Wifi.vue'

export default {
  components: {WheelChairIcon, PrinterIcon, CoffeeIcon, WifiIcon},
};
</script>
