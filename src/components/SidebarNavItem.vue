<template>
  <li>
    <a v-if="isBlack" :class="classes" href="#"> <!-- элемент с черным фоном -->
      <div :class="black">
        <BaseIcon :name="icon" :class="iconClasses"/>
      </div>
      <span>{{label}}</span>
    </a>
    <a v-else :class="classes" href="#"> <!-- основной элемент -->
      <BaseIcon :name="icon" :class="iconClasses"/>
      <span>{{label}}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components:{
    BaseIcon
  },
  props:{
    label:String,
    icon:String,
    isActive:Boolean,
    isBlack:Boolean
  },
  computed:{
    classes(){
      let mainClasss='flex items-center px-6 py-2 text-sm '
      if(this.isActive)
        mainClasss+='hover:bg-gray-300 font-medium text-gray-800 bg-gray-200'
      else
        mainClasss+='flex items-center px-6 py-2 text-sm hover:bg-gray-100'
      return mainClasss
    },
    black(){
      let blackClass
      if(this.isBlack){
        blackClass='mr-6 rounded-full p-1 '
        if(this.isActive)
          blackClass+='bg-red-600'
        else
          blackClass+='bg-gray-700'
      }
      return blackClass
    },
    iconClasses(){
      let iconClass
      if(this.isBlack)
        iconClass='h-4 w-4 text-white'
      else{
        iconClass='h-6 w-6 mr-6'
        if(this.isActive)
          iconClass+=' text-red-600'
      }
      return iconClass
    }
  }
}
</script>