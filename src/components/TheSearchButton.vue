<template>
  <button class="flex items-center px-6 py-1 text-gray-600 md:bg-gray-100 md:border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm md:hover:bg-gray-200"> <!-- кнопка поиска -->
    <BaseIcon name="search" class="w-5 h-5"/>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components:{
    BaseIcon
  }
}
</script>