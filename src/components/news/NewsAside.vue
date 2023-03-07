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
          <div>{{ library.address.street }} {{ library.address.house_number }}, {{ library.address.post_code }} {{ library.address.city }}</div>
        </div>

        <div>
          <h5 class="aside__informations__heading">Otváracie hodiny</h5>
          <div>
            <span
                :class="'fw-bold text-'+( library.today_business_hours_log.status === 'closed' ? 'danger' : 'success' )">{{
                library.today_business_hours_log.statusTranslated
              }}</span> {{ library.today_business_hours_log.timeDirectionTranslated }} {{
              library.today_business_hours_log.marginTime
            }}
          </div>
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
  props: {
    library: null,
  },
};
</script>
