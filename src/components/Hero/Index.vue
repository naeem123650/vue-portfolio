<template>
  <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    v-if="personalInfo.is_active">
    <div class="mr-auto place-self-center lg:col-span-7">
      <h1
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        {{ personalInfo.name }}
      </h1>
      <p class="d-inline max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        I am <span class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" id="typed-output"></span> 
      </p>
  
      <!-- <h1 id="typed-output"></h1> -->

      <a href="#"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Get Started
      </a>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="@/assets/images/thumbnail.jpeg" height="20%" width="80%" alt="mockup">
    </div>
  </div>
</template>


<script setup>
import Typed from 'typed.js';
import { onMounted, watch } from 'vue';

const { personalInfo } = defineProps(['personalInfo']);

let typed; 

onMounted(() => {
  typed = new Typed('#typed-output', {
    strings: personalInfo.technologies,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});

watch(() => personalInfo, (newInfo) => {
  if (newInfo) {
    if (typed) {
      typed.strings = newInfo.technologies;
    }
  }
});
</script>