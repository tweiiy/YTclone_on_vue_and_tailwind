<template>
  <div class="flex w-full h-full"> <!-- поиск и лупа -->
    <TheSearchInput /> <!-- поле ввода -->
    <TheSearchButton /> <!-- кнопка поиска -->
  </div>
</template>

<script>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'

export default {
  components:{
    TheSearchInput,
    TheSearchButton
  }
}
</script>