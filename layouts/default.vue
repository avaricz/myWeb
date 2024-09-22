<template>
    <TheHeader class="header"/>
    <TheMain class="main">

        <slot />

    </TheMain>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    width: 50%;
    max-height: 100vh;
    padding: 6rem 0 5rem;
}
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 50%;
    padding-top: 6rem;
}

@media screen and (max-width: $small-screen){
    .header {
        position: relative;
        width: 100%;
        padding: 0 0 3rem;
    }
    .main {
        width: 100%;
        padding-top: 0;
        min-height: auto;
    }
}
</style>