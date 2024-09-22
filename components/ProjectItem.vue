<template>
    <div class="project-container">

        <div class="thumbnail-wrapper">
            <NuxtImg class="thumbnail" :src="`/img/projects/${project.img}`" preset="thumbnail" alt="" />
        </div>
        
        <div>
            <div class="title-area">
                <NuxtLink :to="`/project/${project.route}`">
                    <h3 class="title">{{ project.project }}</h3>

                </NuxtLink>
                <a v-if="project.link" :href="project.link">
                   <i class="pi pi-link"></i>
                </a>
                <a v-if="project.github" :href="project.github">
                    <i class="pi pi-github"></i>
                </a>
            </div>
            <p class="description">{{ project.description }}</p>
            <div class="labels-area">
                <ul class="label-list">
                    <li v-for="label in project.labels">
                        <div class="label">{{ label }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import type { Project } from '@/data/interfaces'

    const props = defineProps<{
        project: Project
    }>()
</script>

<style lang="scss" scoped>
.project-container {
    border: .5px solid $gray;
    padding: 1rem;
    display: flex;
    border-radius: 5px;
    &:hover {
        .pi {
            cursor: pointer;
            color: $red;
        }
        .thumbnail{
            filter: grayscale(0%);
        }
    }
    .thumbnail-wrapper {
        padding: 0 1rem 0 0;
        min-width: 120px;
        width: 120px;
    }
    .thumbnail {
        width: 100%;
        height: auto;
        border-radius: 3px;
        filter: grayscale(100%);
        transition: all .5s;
    
    }
    h3 {
        color: $project-title-color;
        font-weight: 800;
    }
    .pi {
        color: $gray;
    }
    p {
        margin: 1rem 0;
        font-size: .8rem;
    }
    .title-area{
        display: flex;
        align-items: center;
        gap: 1rem
    }
    .label-list {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        .label {
            font-size: .7rem;
            color: $project-label-color;
            font-weight: 600;
            padding: .2rem .5rem;
            border-radius: 3px;
            border: 1px solid $project-label-color;
        }
    }
}

@media screen and (max-width: $small-screen) {
    .project-container {
        flex-direction: column;
        .thumbnail-wrapper {
            padding: 0;
            width: 100%;
            .thumbnail {
                filter: grayscale(50%);
            }
        }
        .title-area {
            padding-top: .5rem;
        }
    }
}
</style>