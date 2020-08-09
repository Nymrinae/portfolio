<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
}
</script>

<style>

html {
  font-family: monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 96px;
}

a {
  cursor: pointer;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


@media screen and (max-width: 450px) {
  html {
    scroll-padding-top: 48px;
  }
}
</style>
