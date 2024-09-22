<template>
    <div>
      <div class="detail-header">
        <i class="pi pi-arrow-circle-left" @click="$router.back()"></i>
        <h2>{{ project.project }} - detail</h2>
      </div>

      <div class="project-container">

        <div class="row">
          <div>Název:</div><div>{{project.project}}</div>
        </div>

        <div class="row">
          <div>Popis:</div><div>{{project.description}}</div>
        </div>

        <div class="row">
          <div>Použito:</div><div><span v-for="label in project.labels">{{ label }}, </span></div>
        </div>

        <div
        class="row"
        v-if="project.github || project.link"
        v-for="link in links">
          <div>{{link.title}}:</div><div><a :href="link.link">{{ link.label }}</a></div>
        </div>

      </div>
      
      <div class="image-wrapper"
      v-for="img in images">
        <NuxtImg class="img" :src="img"  alt="" />
      </div>

    </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/interfaces';
import projects from '~/data/projects';

const route = useRoute();

const project = ref<Project>({})

const projectData = projects.find(p => p.route === route.params.project)
if (projectData) {
  project.value = projectData
}

const links = Object.keys(project.value)
  .filter(item => item === 'github' || item === 'link')
  .map(item => ({
        title: item.charAt(0).toUpperCase() + item.slice(1),
        label: project.value[item].split('/')[2],
        link: project.value[item]
  }))

  const images = project.value.images ? project.value.images.map(img => `img/projects/${route.params.project}/${img}`) : null


</script>

<style lang="scss" scoped>
.detail-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  h2 {
    font-weight: bold;
  }
  .pi {
    cursor: pointer;
    font-size: 1.4rem;
    &:hover {
      color: $white;
    }
  }
}
.project-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0;
  border: .5px solid $gray;
  border-radius: 5px;
  overflow: hidden;
  .row {
    display: flex;
    gap: 1rem;
    padding: .4rem;
    div:first-child {
      flex: 0 0 60px;
      font-weight: 600;
    }
    a {
      color: $gray-lt;
      text-decoration:underline;
      &:hover {
        color: $white;
      }
    }
  }
  .row:not(:last-child) {
    border-bottom: .5px solid $gray;
  }
}
.image-wrapper {
  padding: 1rem 0;
  img {
    width: 100%;
    height: auto;
  }
}

</style>