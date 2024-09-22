<template>
   <main>
      <div class="section-container">
         <h2>{{ getSectionName() }}</h2>
         <slot> </slot>
      </div>
      <TheFooter />
   </main>
</template>

<script setup lang="ts">
   const route = useRoute()

   const allSections: Record<string, string> = {
      '/': 'O MNĚ',
      '/skills': 'DOVEDNOSTI',
      '/projects': 'PROJEKTY'
   }

   const getSectionName = (): string => {
      return allSections[route.path]
   }
</script>
   
<style scoped>
   .section-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }
   h2 {
      font-weight: bold;
   }
</style>