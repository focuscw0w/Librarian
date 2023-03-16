<template>
  <aside class="aside">
    <article class="bg-2">
      <h3 class="aside__heading">Základné informacie</h3>
      <div class="aside__informations">
        <div>
          <h5 class="aside__informations__heading">Typ knižnice</h5>
          <div>{{ library.type.name }}</div>
        </div>

        <div>
          <h5 class="aside__informations__heading">Lokalita</h5>
          <div>{{ library.address.street }} {{ library.address.house_number }}, {{ library.address.post_code }}
            {{ library.address.city }}
          </div>
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
          <div class="col-6 mb-3 d-flex align-items-center gap-3" v-for="service in this.library.public_services"
               :key="service.id">
              <span class="features__icon d-flex-center">
                <font-awesome-icon :icon="['fas', service.icon_class]"/>
              </span>
            {{ service.name }}
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
  components: {//WheelChairIcon, PrinterIcon, CoffeeIcon, WifiIcon
  },
  props: ['library']
};
</script>
