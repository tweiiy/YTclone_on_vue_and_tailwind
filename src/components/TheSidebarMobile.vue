<template>
  <TheSidebarMobileOverlay >
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="border-b sticky top-0 bg-white"> <!-- логотип -->
        <div class="items-center w-64 flex bg-white ml-4 my-4"> <!-- меню -->
          <button class="ml-2 mr-6"> <!-- меню -->
            <BaseIcon name="menu" class="h-6 w-6" />
          </button>
          <LogoMain /> <!-- лого YouTube -->
        </div>
      </section>
      <SidebarMainContent />
    </aside>
  </TheSidebarMobileOverlay>
</template>

<script>
import LogoMain from './LogoMain.vue'
import SidebarMainContent from './SidebarMainContent.vue'
import BaseIcon from './BaseIcon.vue'
import TheSidebarMobileOverlay from './TheSidebarMobileOverlay.vue'

export default {
  components:{
    LogoMain,
    SidebarMainContent,
    BaseIcon,
    TheSidebarMobileOverlay
  }
}
</script>