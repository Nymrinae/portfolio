<template>
  <section id="projects" class="text-gray-500 bg-gray-900 body-font pt-24 md:pt-0">
    <div class="container px-5 pt-4 pb-20 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 mb-4 text-white"> {{ $t('PROJECTS.TITLE') }} </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="({ background, description, githubRepo, languages, title}, p) in projects"
          :key="p"
          class="xl:w-1/3 lg:w-1/2 sm:w-full px-4 py-6 mb-2"
        >
            <ProjectCard
              :background="background"
              :description="description"
              :githubRepo="githubRepo"
              :languages="languages"
              :title="title"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import projects from '@/config/projects'

@Component
export default class ProjectsHandler extends Vue {
  private readonly projects: Array<Project> = projects
}
</script>