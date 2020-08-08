<template>
  <footer class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <p class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2020
        <a href="https://twitter.com/Nymrinae" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Nymrinae —  </a>
        <LanguageSwitcher />
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <LogoHandler :logos="networks" />
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  private readonly networks: Array<string> = ['Github', 'LinkedIn', 'Twitter']
}
</script>
