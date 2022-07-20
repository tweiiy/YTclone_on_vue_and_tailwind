<template>
  <header class="flex fixed z-30 w-full justify-between"> <!-- навигация -->
    <div class="w-1/4 flex">
      <div class="items-center w-1/2 md:w-64 flex bg-white"> <!-- левая часть -->
        <button @click="$store.commit('changeMobileSidebarStatus')" class="pl-6 pr-6"> <!-- меню -->
          <BaseIcon name="menu"/>
        </button>
        <LogoMain /> <!-- лого YouTube -->
      </div>
    </div>
    <div class="p-2.5 w-1/4 md:w-1/2 flex items-center"> <!-- центральная часть -->
      <TheSearch /> <!-- поле ввода и кнопка поиска -->
      <button class="hidden md:block ml-4"> <!-- микрофон -->
        <BaseIcon name="microphone"/>
      </button>
    </div>
    <div class="w-1/4 flex items-center justify-end space-x-2 md:space-x-2 lg:space-x-6 py-2 px-4"> <!-- правая часть -->
      <TheDropdownApps /> <!-- решетка -->
      <TheDropdownSettings /> <!-- точки -->
      <ButtonLogin /> <!-- логин -->
    </div>
  </header>
</template>

<script>
import TheDropdownApps from './TheDropdownApps.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import LogoMain from './LogoMain.vue'
import TheSearch from './TheSearch.vue'
import ButtonLogin from './ButtonLogin.vue'
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    TheDropdownApps,
    TheDropdownSettings,
    LogoMain,
    TheSearch,
    ButtonLogin,
    BaseIcon
  }
}
</script>