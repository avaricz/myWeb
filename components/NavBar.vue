<template>
    <nav class="nav-desktop">
        <ul>
            <li v-for="link in links">
                <NuxtLink class="link" active-class="active-link" :to="link.path">{{link.label}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

interface Link {
    label: string;
    path: string;
}

const links = ref<Link[]>([
    {label: 'O MNĚ', path: '/'},
    {label: 'PROJEKTY', path: '/projects'},
    {label: 'DOVEDNOSTI', path: '/skills'},
])

</script>

<style lang="scss" scoped>
nav {
    margin-top: 4rem;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

.link{
    font-weight: 800;
    color: $color-text;
    &:hover {
        color: $color-text-hover;
    }
}

@media screen and (max-width: $small-screen) {
    .nav-desktop {
    }
    
}


</style>