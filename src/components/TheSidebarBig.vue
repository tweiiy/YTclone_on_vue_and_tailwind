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
    <section class="py-4 px-4 border-b font-medium leading-5"> <!-- секция регистрации -->
      <span class="text-sm"> <!-- текст регистрации -->
        Sign in to like videos, comment, and subscribe.
      </span>
      <button class="flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"> <!-- логин -->
        <BaseIcon name="login" class="mr-2 h-7 w-7" />
        <span>
          Sing in
        </span>
      </button>
    </section>
    <section class="py-2 border-b"> <!-- 3 список -->
      <div class="text-sm font-semibold px-6 py-2">
        BEST OF YOUTUBE
      </div>
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
      <div class="text-sm font-semibold px-6 py-2">
        MORE FROM YOUTUBE
      </div>
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
      <div class="mr-2"> <!-- 1 текст -->
        <a href="">About</a>
        <a href="">Press</a>
        <a href="">Copyright</a>
        <a href="">Contact us</a>
        <a href="">Creators</a>
        <a href="">Advertise</a>
        <a href="">Developers</a>
      </div>
      <div class="mr-2"> <!-- 2 текст -->
        <a href="">Trems</a>
        <a href="">Privacy</a>
        <a href="">Policy & Safety</a>
        <a href="">How YouTube works</a>
        <a href="">Test new features</a>
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

export default {
  components:{
    SidebarNavItem,
    BaseIcon
  }
}
</script>