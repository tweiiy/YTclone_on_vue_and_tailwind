<template> <!-- логин -->
  <button class="flex items-center px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm whitespace-nowrap">
    <BaseIcon name="login" class="mr-2 h-7 w-7"/>
    Sing in
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