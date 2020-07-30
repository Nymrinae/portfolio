<template>
  <header id="navbar" class="text-gray-500 bg-gray-900 body-font w-full">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center  mb-4 md:mb-0" href="/">
        <img src="https://cdn.discordapp.com/attachments/656052224689963021/736589688101535844/0.png" class="w-20 h-20 mr-4 rounded-full" />
      </a>
      <span class="ml-3 text-xl text-white"> 𝙽𝚢𝚖𝚛𝚒𝚗𝚊𝚎 </span>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a
          v-for="(link, l) in links"
          :key="l"
          class="mr-5 hover:text-green-600"
          @click="scrollToPath(link.path)"
          v-html="$t(link.name)"
        />
      </nav>
      <SocialNetworks />
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    SocialNetworks: () => import('./SocialNetworks.vue')
  }
})
export default class Header extends Vue {
  private readonly links: Array<HeaderLinks> = [
    { name: 'NAV_LINKS.ABOUT', path: 'about' },
    { name: 'NAV_LINKS.PROJECTS', path: 'projects' },
    { name: 'NAV_LINKS.CONTACT', path: 'contact' }
  ]

  private scrollToPath(path: string): void {
    document.getElementById(path)?.scrollIntoView()
  }
}
</script>