<template>
  <section class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 pt-4 pb-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"> {{ $t('PROJECTS.TITLE') }} </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> {{ $t('PROJECTS.DESC') }} </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="(project, p) in projects"
          :key="p"
          class="lg:w-1/3 sm:w-1/2 xs:w-full px-4 py-6"
        >
            <div class="flex relative">
              <img
                :src="project.background"
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100" style="height: 224px">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" v-html="project.subtitle" />
                  <h1 class="title-font text-lg font-medium text-white mb-3" v-html="project.title" />
                  <p class="leading-relaxed" v-html="$t(project.description)" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

type Project = {
  background: string,
  description: string,
  isEpitechProject: boolean,
  link: string,
  title: string,
  subtitle: string
}

@Component
export default class Projects extends Vue {
  private readonly projects: Array<Project> = [
    {
      background: 'https://dummyimage.com/600x360',
      description: 'EPITECH_PROJECTS_DESC',
      isEpitechProject: true,
      link: '',
      title: 'EPITECH Projects',
      subtitle: 'C | CPP | Python | Vue | React Native'
    },
    {
      background: 'https://dummyimage.com/600x360',
      description: 'EPICTURE_DESC',
      isEpitechProject: true,
      link: '',
      title: 'Epicture',
      subtitle: 'React Native'
    },
    {
      background: 'https://dummyimage.com/600x360',
      description: 'AREA_DESC',
      isEpitechProject: true,
      link: '',
      title: 'Action REAction (AREA)',
      subtitle: 'Vue | Vuetify | NuxtJS | TypeScript'
    },
    {
      background: 'https://dummyimage.com/600x360',
      description: 'SERAPHAE_DESC',
      link: '',
      isEpitechProject: false,
      title: 'Seraphae',
      subtitle: 'TypeScript | NodeJS'
    },
    {
      background: 'https://dummyimage.com/600x360',
      description: 'DOFUS_CB_DESC',
      isEpitechProject: false,
      link: '',
      title: 'Dofus Charater Builder',
      subtitle: 'Vue | Vuetify'
    },
    {
      background: 'https://dummyimage.com/600x360',
      description: 'PORTFOLIO_DESC',
      isEpitechProject: false,
      link: '',
      title: 'Portfolio',
      subtitle: 'Vue | TailwindCSS'
    }
  ]
}
</script>