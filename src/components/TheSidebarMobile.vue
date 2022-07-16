<template>
  <div class="hidden md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"> <!-- сайдбар для мобилок -->
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="border-b sticky top-0 bg-white"> <!-- логотип -->
        <div class="items-center w-64 flex bg-white ml-4 my-4"> <!-- меню -->
          <button class="ml-2 mr-6"> <!-- меню -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <LogoMain /> <!-- лого YouTube -->
        </div>
      </section>
      <section class="py-3 border-b"> <!-- 1 список -->
        <ul>
          <li> <!-- HOME -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-300 font-medium text-gray-800 bg-gray-200" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li> <!-- Trending -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <span>Trending</span>
            </a>
          </li>
          <li> <!-- Subscriptions -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Subscriptions</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b"> <!-- 2 список -->
        <ul>
          <li> <!-- Library -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Library</span>
            </a>
          </li>
          <li> <!-- History -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>History</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-4 px-4 border-b font-medium leading-5"> <!-- секция регистрации -->
        <span class="text-sm"> <!-- текст регистрации -->
          Sign in to like videos, comment, and subscribe.
        </span>
        <button class="flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"> <!-- логин -->
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sing in
        </button>
      </section>
      <section class="py-2 border-b"> <!-- 3 список -->
        <div class="text-sm font-semibold px-6 py-2">
          BEST OF YOUTUBE
        </div>
        <ul>
          <li> <!-- Music -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <span>Music</span>
            </a>
          </li>
          <li> <!-- Sports -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span>Sports</span>
            </a>
          </li>
          <li> <!-- Gaming -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <span>Gaming</span>
            </a>
          </li>
          <li> <!-- Movies -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <span>Movies</span>
            </a>
          </li>
          <li> <!-- News -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <span>News</span>
            </a>
          </li>
          <li> <!-- Live -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <span>Live</span>
            </a>
          </li>
          <li> <!-- 360 Video -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span>360&deg; Video</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b"> <!-- плюсик -->
        <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Browse channels</span>
        </a>
      </section>
      <section class="py-2 border-b"> <!-- MORE FROM YOUTUBE -->
        <div class="text-sm font-semibold px-6 py-2">
          MORE FROM YOUTUBE
        </div>
        <ul>
          <li> <!-- Премиум -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>YouTube Premium</span>
            </a>
          </li>
          <li> <!-- Live -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <span>Live</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b"> <!-- последний список -->
        <ul>
          <li> <!-- Настройки -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li> <!-- Репорт хистори -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <span>Report history</span>
            </a>
          </li>
          <li> <!-- Помощь -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Help</span>
            </a>
          </li>
          <li> <!-- Обратная связь -->
            <a class="flex items-center px-6 py-2 text-sm hover:bg-gray-100" href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Send feedback</span>
            </a>
          </li>
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
  </div>
</template>

<script>
import LogoMain from './LogoMain.vue'

export default {
  components:{
    LogoMain
  }
}
</script>