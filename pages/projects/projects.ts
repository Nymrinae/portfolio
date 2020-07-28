type Project = {
  background: string | null,
  description: string,
  isEpitechProject: boolean,
  link: string,
  name: string,
  title: string,
  languages: Array<string>
}

const projects: Array<Project> = [
  {
    background: null,
    description: 'PROJECTS.EPITECH_PROJECTS_DESC',
    isEpitechProject: true,
    link: '',
    name: 'epitech-projects',
    title: 'EPITECH Projects',
    languages: ['C', 'CPP', 'Python', 'Vue', 'React Native']
  },
  {
    background: null,
    description: 'PROJECTS.EPICTURE_DESC',
    isEpitechProject: true,
    link: '',
    name: 'epicture',
    title: 'Epicture',
    languages: ['React Native']
  },
  {
    background: null,
    description: 'PROJECTS.AREA_DESC',
    isEpitechProject: true,
    link: '',
    name: 'area',
    title: 'Action REAction (AREA)',
    languages: ['Vue', 'Vuetify', 'NuxtJS', 'TypeScript']
  },
  {
    background: null,
    description: 'PROJECTS.SERAPHAE_DESC',
    link: '',
    name: 'seraphae',
    isEpitechProject: false,
    title: 'Seraphae',
    languages: ['TypeScript', 'NodeJS', 'Discord.js']
  },
  {
    background: 'https://camo.githubusercontent.com/cec3d54c22a37301c9ee156395f67d062eee5772/68747470733a2f2f696d6775722e636f6d2f4a6e6a3530585a2e706e67',
    description: 'PROJECTS.DOFUS_CB_DESC',
    isEpitechProject: false,
    link: '',
    name: 'dofus-character-builder',
    title: 'Dofus Character Builder',
    languages: ['Vue', 'Vuetify']
  },
  {
    background: null,
    description: 'PROJECTS.PORTFOLIO_DESC',
    isEpitechProject: false,
    link: '',
    name: 'portfolio',
    title: 'Portfolio',
    languages: ['Vue', 'TailwindCSS']
  }
]

export {
  Project,
  projects
}