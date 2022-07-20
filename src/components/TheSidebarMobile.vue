<template>
  <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      >
    <TheSidebarMobileOverlay @click="$store.commit('changeMobileSidebarStatus')" v-show="$store.getters.mobileSidebarStatus"/> 
  </transition>
  <transition
      enter-active-class="transition ease-in-out duration-200 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
      >
    <aside class="w-64 max-h-screen overflow-auto bg-white fixed z-50" v-show="$store.getters.mobileSidebarStatus">
      <section class="border-b sticky top-0 bg-white"> <!-- логотип -->
        <div class="items-center w-64 flex bg-white ml-4 my-4"> <!-- меню -->
          <button @click="$store.commit('changeMobileSidebarStatus')" class="ml-2 mr-6"> <!-- меню -->
            <BaseIcon name="menu" class="h-6 w-6" />
          </button>
          <LogoMain /> <!-- лого YouTube -->
        </div>
      </section>
      <SidebarMainContent />
    </aside>
  </transition>
</template>

<script>
import LogoMain from './LogoMain.vue'
import SidebarMainContent from './SidebarMainContent.vue'
import BaseIcon from './BaseIcon.vue'
import TheSidebarMobileOverlay from './TheSidebarMobileOverlay.vue'
// import {mapGetters,mapMutations} from 'vuex'

export default {
  components:{
    LogoMain,
    SidebarMainContent,
    BaseIcon,
    TheSidebarMobileOverlay
  }
}
</script>