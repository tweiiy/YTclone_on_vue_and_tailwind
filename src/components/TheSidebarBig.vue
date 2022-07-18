<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-14 bg-white z-20"> <!-- большой сайдбар -->
    <SidebarSection class="py-3 border-b">
      <ul> <!-- 1 список -->
        <SidebarNavItem label="Home" icon="house" is-active /> 
        <SidebarNavItem label="Trending" icon="fire" />
        <SidebarNavItem label="Subscriptions" icon="threeFiles" />
      </ul>
    </SidebarSection>
    <SidebarSection > <!-- 2 список -->
      <ul>
        <SidebarNavItem label="Library" icon="twoFiles" />
        <SidebarNavItem label="History" icon="clock" />
      </ul>
    </SidebarSection>
    <SidebarSection class="py-4 px-4 border-b font-medium leading-5 flex flex-col"> <!-- секция регистрации -->
      <span class="text-sm pb-2"> <!-- текст регистрации -->
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin /> <!-- логин -->
    </SidebarSection>
    <SidebarSection > <!-- 3 список -->
      <SidebarSectionHeading title="best of youtube" />
      <ul>
        <SidebarNavItem label="Music" icon="note" is-black />
        <SidebarNavItem label="Sports" icon="gift" is-black />
        <SidebarNavItem label="Gaming" icon="puzzle" is-black />
        <SidebarNavItem label="Movies" icon="film" is-black />
        <SidebarNavItem label="News" icon="signal" is-black />
        <SidebarNavItem label="Live" icon="waves" is-black />
        <SidebarNavItem label="360&deg; Video" icon="note" is-black />
      </ul>
    </SidebarSection>
    <SidebarSection > <!-- плюсик -->
      <SidebarNavItem label="Browse channels" icon="plus" />
    </SidebarSection>
    <SidebarSection > <!-- MORE FROM YOUTUBE -->
      <SidebarSectionHeading title="more from youtube" />
      <ul>
        <SidebarNavItem label="YouTube Premium" icon="play" />
        <SidebarNavItem label="Live" icon="signal" />
      </ul>
    </SidebarSection>
    <SidebarSection > <!-- последний список -->
      <ul>
        <SidebarNavItem label="Settings" icon="settings" />
        <SidebarNavItem label="Report history" icon="flag" />
        <SidebarNavItem label="Help" icon="question" />
        <SidebarNavItem label="Send feedback" icon="excl" />
      </ul>
    </SidebarSection>
    <SidebarSection class="px-6 py-2 text-xs font-semibold space-y-4"> <!-- подвал -->
      <TheSectionFooter />
    </SidebarSection>
  </aside>
</template>

<script>
import SidebarNavItem from './SidebarNavItem.vue'
import BaseIcon from './BaseIcon.vue'
import ButtonLogin from './ButtonLogin.vue'
import SidebarSectionHeading from './SidebarSectionHeading.vue'
import SidebarSection from './SidebarSection.vue'
import TheSectionFooter from './TheSectionFooter.vue'

export default {
  components:{
    SidebarNavItem,
    BaseIcon,
    ButtonLogin,
    SidebarSectionHeading,
    SidebarSection,
    TheSectionFooter
  }
}
</script>