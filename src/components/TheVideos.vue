<template>
  <main class="xl:ml-64 md:ml-24 pt-36 px-20 sm:px-6 pb-6"> <!-- видосы -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 bg-gray-50 max-w-screen-2xl m-auto">
      <VideoItem v-for="i in 20" :key="i"/>
    </div>
  </main>
</template>

<script>
import VideoItem from './VideoItem.vue'

export default {
  components:{
    VideoItem
  }
}
</script>