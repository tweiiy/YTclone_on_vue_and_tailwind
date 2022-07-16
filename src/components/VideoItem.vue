<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :seed="seed" /> <!-- верхняя часть видео -->
    <VideoItemInfo :seed="seed" /> <!-- данные канала под видео -->
  </a>
</template>

<script>
import VideoItemThumbnail from './VideoItemThumbnail.vue'
import VideoItemInfo from './VideoItemInfo.vue'

export default {
  components:{
    VideoItemThumbnail,
    VideoItemInfo
  }
}
</script>