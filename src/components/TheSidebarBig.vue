<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-14 bg-white z-20"> <!-- большой сайдбар -->
    <section class="py-3 border-b"> <!-- 1 список -->
      <ul>
        <SidebarNavItem label="Home" icon="house" is-active /> 
        <SidebarNavItem label="Trending" icon="fire" />
        <SidebarNavItem label="Subscriptions" icon="threeFiles" />
      </ul>
    </section>
    <section class="py-2 border-b"> <!-- 2 список -->
      <ul>
        <SidebarNavItem label="Library" icon="twoFiles" />
        <SidebarNavItem label="History" icon="clock" />
      </ul>
    </section>
    <section class="py-4 px-4 border-b font-medium leading-5 flex flex-col"> <!-- секция регистрации -->
      <span class="text-sm pb-2"> <!-- текст регистрации -->
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin /> <!-- логин -->
    </section>
    <section class="py-2 border-b"> <!-- 3 список -->
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
    </section>
    <section class="py-2 border-b"> <!-- плюсик -->
    <SidebarNavItem label="Browse channels" icon="plus" />
    </section>
    <section class="py-2 border-b"> <!-- MORE FROM YOUTUBE -->
      <SidebarSectionHeading title="more from youtube" />
      <ul>
        <SidebarNavItem label="YouTube Premium" icon="play" />
        <SidebarNavItem label="Live" icon="signal" />
      </ul>
    </section>
    <section class="py-2 border-b"> <!-- последний список -->
      <ul>
        <SidebarNavItem label="Settings" icon="settings" />
        <SidebarNavItem label="Report history" icon="flag" />
        <SidebarNavItem label="Help" icon="question" />
        <SidebarNavItem label="Send feedback" icon="excl" />
      </ul>
    </section>
    <section class="px-6 py-2 text-xs font-semibold space-y-4"> <!-- подвал -->
      <div class="space-x-2"> <!-- 1 текст -->
        <a class="" href="#">About</a>
        <a class="" href="#">Press</a>
        <a class="" href="#">Copyright</a>
        <a class="" href="#">Contact us</a>
        <a class="" href="#">Creators</a>
        <a class="" href="#">Advertise</a>
        <a class="" href="#">Developers</a>
      </div>
      <div class="space-x-2"> <!-- 2 текст -->
        <a class="" href="#">Trems</a>
        <a class="" href="#">Privacy</a>
        <a class="" href="#">Policy & Safety</a>
        <a class="" href="#">How YouTube works</a>
        <a class="" href="#">Test new features</a>
      </div>
      <div  class="font-normal text-gray-500"> <!-- копирайт -->
        © 2022 Google LLC
      </div>
    </section>
  </aside>
</template>

<script>
import SidebarNavItem from './SidebarNavItem.vue'
import BaseIcon from './BaseIcon.vue'
import ButtonLogin from './ButtonLogin.vue'
import SidebarSectionHeading from './SidebarSectionHeading.vue'

export default {
  components:{
    SidebarNavItem,
    BaseIcon,
    ButtonLogin,
    SidebarSectionHeading
  }
}
</script>