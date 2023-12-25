<template>
  <template v-if="siteUnderMaintenace">
      <Maintenance /> 
  </template>
  <template v-else>
    <!-- navbar -->
    <nav class="bg-white border-b border-gray-200 dark:bg-gray-900">
      <Navbar />
    </nav>


    <!-- breadcrumb -->
    <nav class="bg-white border-b border-gray-200 dark:bg-gray-900">
      <Breadcrumb />
    </nav>

    <!-- hero -->
    <section id="hero" class="bg-white border-b border-gray-200 dark:bg-gray-900">

      <HeroSkeleton v-if="!personalInfo.is_active || isLoading" />

      <Hero :personalInfo="personalInfo" v-else />
    </section>

    <!-- experience section -->

    <section id="experience" class="py-8 lg:py-16 bg-white border-b border-gray-200 dark:bg-gray-900">
      <ExperienceSkeleton v-if="!experienceInfo.is_active || isLoading" />

      <Experience :experienceInfo="experienceInfo" v-else />
    </section>

    <!-- Education section -->
    <section id="education" class="py-8 lg:py-16 bg-white border-b border-gray-200 dark:bg-gray-900">
      <ExperienceSkeleton v-if="!educationInfo.is_active || isLoading" />

      <Education :educationInfo="educationInfo" v-else />
    </section>

    <!-- Skills section -->
    <section id="skill" class="bg-white border-b border-gray-200 dark:bg-gray-900">

      <SkillSkeleton v-if="!skillsInfo.is_active || isLoading" />

      <Skills :skillsInfo="skillsInfo" v-else />
    </section>

    <!-- testimonials -->
    <section id="testimonial" class="bg-white dark:bg-gray-900">

      <TestimonialSkeleton v-if="!testimonialInfo.is_active || isLoading" />

      <Testimonials :testimonialInfo="testimonialInfo" />
    </section>

    <!-- mobile tabs  -->
    <div class="md:hidden lg:hidden">
      <MobileTabs />
    </div>

    <footer class="bg-white dark:bg-gray-800">
      <FooterComp />
    </footer>
  </template>
</template>

<script setup>
import Navbar from '@/components/Navbar/Index.vue';
import Breadcrumb from '@/components/Breadcrumb/Index.vue';
import Hero from '@/components/Hero/Index.vue';
import Experience from '@/components/Experience/Index.vue';
import HeroSkeleton from '@/components/Skeletons/Hero/Index.vue';
import TestimonialSkeleton from '@/components/Skeletons/Testimonials/Index.vue';
import ExperienceSkeleton from '@/components/Skeletons/Experience/Index.vue';
import Education from '@/components/Education/Index.vue';
import Skills from '@/components/Skills/Index.vue';
import SkillSkeleton from '@/components/Skeletons/Skills/Index.vue';
import Testimonials from '@/components/Testimonials/Index.vue';
import MobileTabs from '@/components/MobileTabs/Index.vue';
import FooterComp from '@/components/Footer/Index.vue';
import Maintenance from '@/components/Maintenance/Index.vue';

import { isLoading, personalInfo, experienceInfo, educationInfo, skillsInfo, testimonialInfo,siteUnderMaintenace,fetchPersonalInfo } from "@/vuetils/usePortfolio";
import { onMounted } from 'vue';

onMounted(() => {
  fetchPersonalInfo();
});

</script>