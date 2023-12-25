<template>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="#hero"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">

              <InlineSvg name="home" />
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">

              <InlineSvg name="aero" />


              <a href="#experience"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Experience</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">

              <InlineSvg name="aero" />

              <a href="#education"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Education</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">

              <InlineSvg name="aero" />

              <a href="#skill">
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Skills</span>
              </a>
            </div>
          </li>
          <!-- <li aria-current="page">
            <div class="flex items-center">

              <InlineSvg name="aero" />

              <a href="#testimonial">
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Testimonials</span>
              </a>
            </div>
          </li> -->
        </ol>
      </nav>
    </div>
</template>

<script setup></script>