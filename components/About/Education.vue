<template>
  <section id="education" class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 py-6 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 mb-4 text-white pb-0"> {{ $t('EDUCATION.TITLE') }} </h1>
      </div>
      <div
        v-for="({ description, duration, formation, location, logo, name }, e) in education"
        :key="e"
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-white text-lg title-font font-medium mb-2">{{ name }}, {{ $t(duration) }} </h2>
          <h4> {{ $t(formation) }} </h4>
          <h4> {{ $t(location) }} </h4>
          <br />
          <p class="leading-relaxed text-base text-justify"> {{ $t(description) }} </p>
        </div>
        <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 hover:bg-gray-700 flex-shrink-0">
          <a
            :href="logo.websiteSrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="logo.imageSrc" alt="" :height="logo.height" :width="logo.width" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import education from '@/config/education'

@Component
export default class Education extends Vue {
  private readonly education: Array<School> = education
}

</script>