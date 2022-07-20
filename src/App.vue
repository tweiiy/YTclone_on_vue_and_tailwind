<template>
  <TheHeader @openMobileSidebar="openMobileSidebar" /> <!-- навигация -->
  <TheSidebarMobile :is-open="isMobileOpen" /> <!-- сайдбар для мобилок -->
  <TheSidebarSmall /> <!-- маленький сайдбар -->
  <TheSidebarBig /> <!-- большой сайдбар -->
  <TheCategories /> <!-- категории -->
  <TheVideos /> <!-- видосы -->
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheSidebarMobile from './components/TheSidebarMobile.vue'
import TheSidebarSmall from './components/TheSidebarSmall.vue'
import TheSidebarBig from './components/TheSidebarBig.vue'
import TheCategories from './components/TheCategories.vue'
import TheVideos from './components/TheVideos.vue'

export default {
  components:{
    TheHeader,
    TheSidebarMobile,
    TheSidebarSmall,
    TheSidebarBig,
    TheCategories,
    TheVideos
  },
  data() {
    return {
      isMobileOpen: false
    }
  },
  methods:{
    openMobileSidebar(){
      this.isMobileOpen=true
    }
  }
}
</script>