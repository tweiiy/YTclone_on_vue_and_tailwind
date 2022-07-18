<template>
  <div class="space-x-2"> <!-- 1 текст -->
    <a class="" href="#" v-for="link in links.slice(0, 7)" :key="link">{{link}}</a>
  </div>
  <div class="space-x-2"> <!-- 2 текст -->
    <a class="" href="#" v-for="link in links.slice(7)" :key="link">{{link}}</a>
  </div>
  <div  class="font-normal text-gray-500"> <!-- копирайт -->
    © 2022 Google LLC
  </div>
</template>

<script>
export default {
  data(){
    return {links: ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers', 'Trems', 'Privacy',
    'Policy & Safety', 'How YouTube works', 'Test new features']}
  }
}
</script>