<template>
  <button class="relative group focus:outline-none"> <!-- точки -->
    <BaseIcon name="v_dots" class="w-5 h-5"/>
    <div class="hidden group-hover:block absolute top-9 bg-white bg-opacity-95 w-72 border border-t-0 -right-full sm:right-0">
      <section class="py-1 border-b whitespace-nowrap"> <!-- список настроек -->
        <ul>
          <DropdownSettingsListItem
            v-for="listItem in listItems.slice(0, 8)"
            :key="listItem.label"
            :icon="listItem.icon"
            :label="listItem.label"
            :is-arrow="listItem.isArrow"
          />
        </ul>
      </section>
      <section class="py-1 border-b whitespace-nowrap"> <!-- restricted mode -->
        <ul>
          <DropdownSettingsListItem :label="listItems[8].label"
          :is-arrow="listItems[8].isArrow"/>
        </ul>
      </section>
    </div>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

export default {
  components:{
    BaseIcon,
    DropdownSettingsListItem
  },
  data() {
    return {
      listItems: [
        {
          label: 'Apperance: Device theme',
          icon: 'sun',
          isArrow: true
        },
        {
          label: 'Language: English',
          icon: 'language',
          isArrow: true
        },
        {
          label: 'Location: United States',
          icon: 'planet',
          isArrow: true
        },
        {
          label: 'Settings',
          icon: 'settings',
          isArrow: false
        },
        {
          label: 'Your data in YouTube',
          icon: 'shield',
          isArrow: false
        },
        {
          label: 'Help',
          icon: 'help',
          isArrow: false
        },
        {
          label: 'Send feedback',
          icon: 'feedback',
          isArrow: false
        },
        {
          label: 'Keyboard shortcuts',
          icon: 'shortcuts',
          isArrow: false
        },
        {
          label: 'Restricted Mode: Off',
          icon: null,
          isArrow: true
        }
      ]
    }
  }
}
</script>