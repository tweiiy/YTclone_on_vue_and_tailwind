<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-14 bg-white z-20"> <!-- большой сайдбар -->
    <SidebarMainContent />
  </aside>
</template>

<script>
import SidebarMainContent from './SidebarMainContent.vue'

export default {
  components:{
    SidebarMainContent
  }
}
</script>