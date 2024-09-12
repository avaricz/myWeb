<template>
    <header>
        <div>
            <h1>Adam Hádl</h1>
            <h2>Software engineer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus deserunt, perspiciatis et numquam tempora.</p>
            
            <NavBar />
        </div>

        <SocialsBar />

        
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
h1{
    font-size: 3rem;
    font-weight: Bold;

}
h2 {
    font-size: 1.2rem;
    color: $blue;
}

header{
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    width: 50%;
    max-height: 100vh;
    padding: 6rem 0;

}

p {
    margin-top: 2rem;
    max-width: 70%;
}
</style>