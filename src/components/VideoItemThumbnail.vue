<template>
  <div class="relative mb-3"> <!-- верхняя часть видео -->
    <img :src="`https://picsum.photos/seed/image${seed}/720/404`" alt="img"> <!-- превью -->
    <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1 text-white"> <!-- посмотреть позже -->
      <BaseIcon name="clock" class="h-5 w-5" />
    </span>
    <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black rounded-sm m-1 p-1 text-white"> <!-- плейлист -->
      <BaseIcon name="playlist" class="h-5 w-5" />
    </span >
    <span class="opacity-100 group-hover:opacity-0 bg-opacity-60 duration-500 absolute bottom-0 right-0 bg-black rounded-sm m-1 p-1 text-white text-xs font-semibold"> <!-- длительность -->
      {{hour}}:{{minute}}
    </span>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
export default {
  data(){
    let hour=Math.trunc(Math.random()*60).toString()
    let minute=Math.trunc(Math.random()*60).toString()
    let seed=Math.trunc(Math.random()*1000).toString()
    if(Number(hour)<10)
      hour='0'+hour
    if(Number(minute)<10)
      minute='0'+minute
    return{
      minute:minute,
      hour:hour,
      seed:seed
    }
  },
  components:{
    BaseIcon
  }
}
</script>