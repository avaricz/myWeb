<template>
    <section id="projects">
        <ProjectItem 
        v-for="project in projectList"
        :project="project"
        />
    </section>

</template>

<script setup lang="ts">
import type { Project }  from '~/data/interfaces';
import data from '@/data/projects'

const projectList = ref<Project[]>(data)

</script>

<style lang="scss" scoped>
#projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

</style>