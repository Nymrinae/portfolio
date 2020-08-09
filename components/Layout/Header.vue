<template>
  <header
    id="navbar"
    class="text-gray-500 bg-gray-900 body-font w-full fixed z-10"
    :class="{ 'h-full': show }"
    >
    <div class="container mx-auto flex p-5 flex-col md:flex-row items-center ">
      <a
        class="flex title-font font-medium items-center mb-4 md:mb-0 hidden md:flex"
        @click="scrollTo('about')"
      >
        <img src="https://cdn.discordapp.com/attachments/656052224689963021/736589688101535844/0.png" class="w-20 h-20 mr-4 rounded-full hidden md:flex" />
      </a>
      <div class="flex">
        <span
          class="ml-3 text-xl text-green-500 float-left w-4/5 md:w-auto"
          @click="scrollTo('about')"
        >
          {{ pseudo }}
        </span>
        <svg
          v-if="!show"
          class="fill-current h-8 w-8 -mr-4 w-1/5 md:hidden"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="openMenu"
        >
          <path :d="show ? 'm243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0' : 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'" />
        </svg>
        <svg
          v-if="show"
          class="fill-current h-6 w-6 -mr-4 w-1/5 md:hidden"
          viewBox="0 0 365 365"
          xmlns="http://www.w3.org/2000/svg"
          @click="closeMenuAndScrollTo"
        >
          <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/>
        </svg>
      </div>
      <nav
        class="navigation md:mr-auto md:ml-4 md:py-1 md:pl-4 md:flex md:border-l md:border-gray-700 block md:flex md:flex-wrap items-center text-base justify-center align-middle"
        :class="{ 'hidden': !show }"
      >
        <ul>
          <li>
            <a
              v-for="({ name, path }, l) in links"
              :key="l"
              class="navLink mr-5 w-full md:w-auto align-center mb-8 md:mb-auto"
              @click="closeMenuAndScrollTo(path)"
              v-html="$t(name)"
            />
          </li>
        </ul>
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
  private show: Boolean = false

  private readonly scrollTo: Function = scrollTo

  openMenu(): void {
    document.body.style.overflow = 'hidden'
    this.show = true
  }

  closeMenuAndScrollTo(path?: string): void {
    document.body.style.overflow = 'auto'
    this.show = false

    if(path)
      scrollTo(path)
  }

  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 767)
        this.show = false
    })
  }
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

@media screen and (max-width: 450px) {
  .navigation {
    margin-top: 50%;
    text-align: center;
  }
}
</style>