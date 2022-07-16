<template>
  <aside class="hidden md:block min-h-screen overflow-auto fixed top-0 pt-14 bg-white z-20"> <!-- маленький сайдбар -->
    <section> <!-- 1 список -->
      <ul class="flex flex-col items-center">
        <li> <!-- HOME -->
          <a class="flex flex-col items-center px-2 py-5 text-red-500 hover:bg-gray-100" href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-xs">Home</span>
          </a>
        </li>
        <li> <!-- Trending -->
          <a class="flex flex-col items-center px-2 py-5 hover:bg-gray-100" href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
            <span class="text-xs">Trending</span>
          </a>
        </li>
        <li> <!-- Subscriptions -->
          <a class="flex flex-col items-center px-2 py-5 hover:bg-gray-100" href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span class="text-xs">Subscriptions</span>
          </a>
        </li>
        <li> <!-- Library -->
          <a class="flex flex-col items-center px-2 py-5 hover:bg-gray-100" href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span class="text-xs">Library</span>
          </a>
        </li>
        <li> <!-- History -->
          <a class="flex flex-col items-center px-2 py-5 hover:bg-gray-100" href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-xs">History</span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>