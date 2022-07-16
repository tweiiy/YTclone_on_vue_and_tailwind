<template>
  <li>
    <a class="flex items-center px-3 py-2 text-sm hover:bg-gray-100" href="">
      <BaseIcon name="play" class="h-6 w-6 text-red-500"/>
      <span class="ml-2">{{label}}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  props: ['label'],
  components:{
    BaseIcon
  }
}
</script>