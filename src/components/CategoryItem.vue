<template>
  <a href="" :class="classes">
    {{category}}
  </a>
</template>

<script>
export default {
  props: ['category', 'isActive'],
  computed:{
    classes(){
      const classes=['px-3', 'py-1', 'border', 'rounded-full', 'transition']
      const activeClasses=['bg-gray-600', 'border-gray-700', 'hover:bg-gray-500', 'text-white']
      const deActiveClasses=['bg-gray-100', 'border-gray-300', 'hover:bg-gray-200']
      return this.isActive?[...classes, ...activeClasses]:[...classes, ...deActiveClasses]
    }
  }
}
</script>