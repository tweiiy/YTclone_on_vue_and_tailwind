<template>
  <section class="xl:ml-64 md:ml-24 pt-16 fixed bg-white bg-opacity-95 z-10 w-full"> <!-- категории -->
    <div class="border-y border-x">
      <div class="px-4 py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap max-w-screen-2xl m-auto">
        <CategoryItem v-for="category in categories" :key="category" :category="category" :isActive="category == 'All'" />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  components:{
    CategoryItem
  },
  data(){
    return{
      categories: [
        'All',
        'Games',
        'Live',
        'Jem',
        'Music',
        'Simulators',
        'Action&adventures',
        'Multfilms',
        'Kitchen',
        'Last seen',
        'News',
        'New for you'
      ]
    }
  }
}
</script>