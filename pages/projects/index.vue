<template>
  <section class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 pt-4 pb-20 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 mb-4 text-white"> {{ $t('PROJECTS.TITLE') }} </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="(project, p) in projects"
          :key="p"
          class="lg:w-1/3 sm:w-full px-4 py-6 mb-2"
        >
            <ProjectCard
              :background="project.background"
              :description="project.description"
              :title="project.title"
              :languages="project.languages"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Project, projects } from './projects'

@Component({
  components: {
    ProjectCard: () => import('@/components/Projects/ProjectCard.vue')
  }
})
export default class Projects extends Vue {
  private readonly projects: Array<Project> = projects

  /* private openProject(projectName: string): void {
    this.$router.push({
      name: 'projects-projectName',
      params: { projectName }
    })
  } */
}
</script>