<template>
  <header id="navbar" class="text-gray-500 bg-gray-900 body-font w-full fixed z-10">
    <div class="container mx-auto flex p-5 flex-col md:flex-row items-center">
      <a
        class="flex title-font font-medium items-center mb-4 md:mb-0 hidden md:flex"
        @click="scrollTo('about')"
      >
        <img src="https://cdn.discordapp.com/attachments/656052224689963021/736589688101535844/0.png" class="w-20 h-20 mr-4 rounded-full hidden md:flex" />
      </a>
      <span class="ml-3 text-xl text-green-500"> {{ pseudo }} </span>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 hidden md:flex md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
        <a
          v-for="(link, l) in links"
          :key="l"
          class="mr-5 navLink"
          @click="scrollTo(link.path)"
          v-html="$t(link.name)"
        />
      </nav>
      <div class="hidden md:flex">
        <LogoHandler :logos="networks" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import links from '@/config/links'
import { scrollTo } from '@/helpers/functions'

@Component
export default class Header extends Vue {
  private readonly pseudo: string = '<Nymrinae />'
  private readonly links: Array<HeaderLinks> = links
  private readonly networks: Array<string> = ['LinkedIn', 'Github', 'Twitter']

  private readonly scrollTo: Function = scrollTo
}
</script>

<style scoped>
.navLink {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.navLink:hover {
  transition: ease-in .2s;
  color: #4FC08D
}

.navLink:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #FFF;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.navLink:hover:after {
  width: 100%;
  left: 0;
}
</style>