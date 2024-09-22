<template>
    <header>
        <div class="header-wrapper">
            <h1>Adam Hádl</h1>
            <h2>Frontend developer</h2>
            <p>Hledám příležitosti k uplatnění svých shopností. </p>
            
            <NavBar />
        </div>

        <SocialsBar />

        
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header-wrapper {
    position: relative;
    margin-bottom: 2rem;
}
h1{
    font-size: 3rem;
    font-weight: Bold;
    color: $title;
}
h2 {
    font-size: 1.2rem;
    color: $subtitle;
}

p {
    margin-top: 2rem;
    max-width: 70%;
}
</style>