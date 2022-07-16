<template>
  <li> <!-- Apperance -->
    <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
      <BaseIcon v-if="icon" :name="icon" class="h-6 w-6 mr-6"/>
      <span>{{label}}</span>
      <BaseIcon v-if="isArrow" name="arrow" class="h-5 w-5 ml-auto"/>
    </a>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  props:{
    label: String,
    icon: String,
    isArrow: Boolean
  },
  components:{
    BaseIcon
  }
}
</script>