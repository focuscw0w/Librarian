<template>
  <aside class="aside">
    <article>
      <h3 class="aside__heading">Základné informacie</h3>
      <div class="aside__informations">
        <div>
          <h5 class="aside__informations__heading">Typ knižnice</h5>
          <p>Verejna kniznica</p>
        </div>

        <div>
          <h5 class="aside__informations__heading">Lokalita</h5>
          <p>Samuela Nováka 1763/2, 026 01 Dolný Kubín</p>
        </div>

        <div>
          <h5 class="aside__informations__heading">Otváracie hodiny</h5>
          <p><strong class="opened">Otvorené</strong> do 16:00</p>
        </div>

        <a href="#" class="more-informations">Viac informácii</a>

        <div>
          <h5 class="aside__informations__heading">Kontakt</h5>
        </div>

        <div>
          <h5 class="aside__informations__heading">Webstránka</h5>
        </div>

        <div class="features">
          <div>
            <p>
              <span class="features__icon">
                <img
                src="../assets/icons/wifi.png"
                alt="wifi icon"
                
              />
              </span>
              Wi-fi pripojenie
            </p>
            <p>
              <span class="features__icon">
                <img
                src="../assets/icons/handicap-icon.svg"
                alt="handicap icon"
        
              />
              </span>
              Bezbarierový prístup
            </p>
          </div>

          <div>
            <p>
              <span class="features__icon features__icon-grey">
                <img
                src="../assets/icons/coffee.png"
                alt="coffee icon"
              />
              </span>
            Kaviareň
            </p>
            <p>
              <span class="features__icon">
                <img
                src="../assets/icons/bx-printer.svg"
                alt="printer logo"
              />
              </span>
              Možnosť tlače
            </p>
          </div>
        </div>
      </div>
    </article>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
