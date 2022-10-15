<template>
    <article class="search-article">
        <div class="flex-container">

            <div class="search-container flex-container">
                <img src="../assets/icons/bx-search-alt-2.svg" alt="search icon" class="search-icon">
                <input type="text" id="search-book" name="search" size="25" placeholder="Akú knihu hľadáš?">
            </div>

            <span class="split"></span>

            <a href="#" class="drop-down flex-container" @click="dropDown">
                Knihy
                <img src="../assets/icons/bx-down-arrow-alt.svg" alt="arrow icon">
            </a>

            <button type="submit" class="find-book">Hľadaj</button>

        </div>

        <div v-if="showDropDown" class="sub-menu">
            <ul class="sub-menu__ul">
                <li><a href="#">Knižnice</a></li>
                <li><a href="#">Autori</a></li>
            </ul>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                showDropDown: false
            }
        },
        methods: {
            dropDown() {
                this.showDropDown = !this.showDropDown
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>