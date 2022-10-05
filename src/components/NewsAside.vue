<template>
  <aside class="aside">
    <article>
      <h3 class="aside__heading">Zakladne informacie</h3>
      <div class="aside__informations">
        <div>
          <h5 class="aside__informations__heading">Typ kniznice</h5>
          <p>Verejna kniznica</p>
        </div>

        <div>
          <h5 class="aside__informations__heading">Lokalita</h5>
          <p>Samuela Nováka 1763/2, 026 01 Dolný Kubín</p>
        </div>

        <div>
          <h5 class="aside__informations__heading">Otvaracie hodiny</h5>
          <p><strong class="opened">Opened</strong> do 16:00</p>
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
              <img
                src="../assets/icons/bx-wifi.svg"
                alt="wifi icon"
                class="features__icon"
              />Wi-fi pripojenie
            </p>
            <p>
              <img
                src="../assets/icons/bx-handicap.svg"
                alt="handicap icon"
                class="features__icon"
              />Bezbarierovy prístup
            </p>
          </div>

          <div>
            <p>
              <img
                src="../assets/icons/bx-coffee-togo.svg"
                alt="coffee icon"
                class="features__icon"
              />Kaviareň
            </p>
            <p>
              <img
                src="../assets/icons/bx-printer.svg"
                alt="printer logo"
                class="features__icon"
              />Moznost tlace
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
