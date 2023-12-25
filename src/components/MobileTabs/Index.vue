<template>
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <a
        href="#hero"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <InlineSvg name="home_tab" />

        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Home</span
        >
      </a>
      <a
        href="#experience"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <InlineSvg name="experience" />

        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Experience</span
        >
      </a>
      <a
        href="#education"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <InlineSvg name="education" />

        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Education</span
        >
      </a>
      <a
        href="#skill"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <InlineSvg name="skills" />

        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Skills</span
        >
      </a>
    </div>
  </div>
</template>

<script setup></script>
