<template>
    <article class="search-article">
        <div class="flex-container">

            <div class="search-container flex-container">
                <img src="../assets/icons/bx-search-alt-2.svg" alt="search icon" class="search-icon">
                <input type="text" id="search-book" name="search" size="25" placeholder="Akú knihu hľadáš?">
            </div>

            <span class="split"></span>

            <a href="#" class="drop-down flex-container">
                Knihy
                <span class="drop-down__symbol">˅</span>
            </a>

            <button type="submit" class="find-book">Hľadaj</button>

        </div>
    </article>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>