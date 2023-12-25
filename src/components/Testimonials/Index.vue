<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ testimonialInfo.title }}
      </h2>
      <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{{ testimonialInfo.subtitle }}</p>
    </div>
    <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
      <figure
        class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
        v-for="(testimonial, index) in testimonialInfo.details" :key="index">
        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
          <p class="my-4">
            "{{ testimonial.quote }}"
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center space-x-3">
          <img class="w-9 h-9 rounded-full" :src="testimonial.image" alt="profile picture">
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>{{ testimonial.author }}</div>
            <div class="text-sm font-light text-gray-500 dark:text-gray-400">
              {{ testimonial.position }}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>

defineProps({
  testimonialInfo: {
    type: Object,
    required: true
  }
})
</script>