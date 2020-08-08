<template>
  <section id="experience" class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 mb-4 text-white pb-24"> {{ $t('EXPERIENCE.TITLE') }} </h1>
      </div>
      <div
        v-for="({ name, description, duration, logo, title, type }, e) in experiences"
        :key="e"
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
      >
        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0 hover:bg-gray-700">
          <a
            :href="logo.websiteSrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="logo.imageSrc" alt="" :height="logo.height || 96" :width="logo.width || 96" />
          </a>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-white text-lg title-font font-medium mb-2">
            {{ $t(title) }} @<span class="text-green-500" style="padding-left: 4px">{{ name }} </span>
          </h2>
          <h4 class="text-white text-sm mb-2">{{ $t(type) }} </h4>
          <h4 class="text-white text-sm mb-2">{{ $t(duration) }} </h4>
          <p
            v-for="(task, t) in $t(description).split(' / ')"
            :key="t"
            class="leading-relaxed text-base text-justify"
            v-html="task"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import experiences from '@/config/experiences'

@Component
export default class Experience extends Vue {
  private readonly experiences: Array<Company> = experiences
}
</script>

<style scoped>
</style>