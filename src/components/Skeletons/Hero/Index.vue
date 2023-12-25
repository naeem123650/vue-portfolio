<template>
  <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="mr-auto place-self-center lg:col-span-7">
      <div class="max-w-2xl mb-4 h-8 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg animate-pulse"></div>

      <div class="max-w-2xl mb-6 h-6 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg animate-pulse"></div>

      <button
        disabled 
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 animate-pulse">
        Please Wait....
    </button>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <div class="w-full h-full bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg animate-pulse"></div>
    </div>
  </div>
</template>

<script setup></script>