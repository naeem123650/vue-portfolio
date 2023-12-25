<template>
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2
            class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            {{ skillsInfo.title }}
        </h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-6 dark:text-gray-400">
            <template v-for="(skill,index) in skillsInfo.details" :key="index">
                <a href="#" class="flex justify-center items-center">
                    <InlineSvg :name="skill.image" />
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>

defineProps({
    skillsInfo: {
        type: Object,
        required: true
    }
})
</script>