<template>
  <button class="relative group p-2 focus:outline-none"> <!-- решетка -->
    <BaseIcon name="apps" class="w-5 h-5"/>
    <div class="hidden group-hover:block absolute top-9 bg-white bg-opacity-95 w-44 border border-t-0 right-0">
      <section class="py-3 border-b"> <!-- TV -->
        <ul>
          <DropdownAppsListItem label="YouTube TV"/> <!-- YouTube TV -->
        </ul>
      </section>
      <section class="py-3 border-b"> <!-- Music Kids -->
        <ul>
          <DropdownAppsListItem label="YouTube Music"/> <!-- YouTube Music -->
          <DropdownAppsListItem label="YouTube Kids"/> <!-- YouTube Kids -->
        </ul>
      </section>
      <section class="py-3"> <!-- Academy Artists -->
        <ul>
          <DropdownAppsListItem label="Creatoor Academy"/> <!-- Creatoor Academy -->
          <DropdownAppsListItem label="YouTube for Artists"/> <!-- YouTube for Artists -->
        </ul>
      </section>
    </div>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import DropdownAppsListItem from './DropdownAppsListItem.vue'

export default {
  components:{
    BaseIcon,
    DropdownAppsListItem
  }
}
</script>