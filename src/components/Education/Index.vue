<template>
    <h2
        class="text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
    {{ educationInfo.title }}    
    </h2>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6" v-for="(education, index) in educationInfo.details" :key="index">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">

                    <InlineSvg name="bag" />

                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {{ education.institution }}
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ education.dateRange }}   
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {{ education.degree }} - {{ education.fieldOfStudy }}
                </p>
                <template v-if="education.hasAttachment">
                    <a :href="education.downloadLink" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    <svg
                        class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path
                            d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg> 
                    Download ZIP
                    </a>    
                </template>
                
            </li>
        </ol>
    </div>
</template>

<script setup>

defineProps({
    educationInfo: {
        type: Object,
        required: true
    }
});

</script>