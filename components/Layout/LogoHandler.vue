<template>
  <div class="flex flex-wrap justify-end">
    <a
      v-for="({ color, isNetwork, link, name, svgPath, value}, n) in filteredLogos"
      :key="n"
      class="logos"
      target="_blank"
      rel="noopener noreferrer nofollow"
      :href="link"
      :data-tippy-content="value || name"
    >
    <svg
        class="pr-6 fill-current text-gray-600 svgLogo"
        :class="`${isNetwork ? 'h-6' : 'h-8'}`"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :style="`color: ${color}`"
    >
        <path :d="svgPath"/>
    </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import configLogos from '@/config/logos'

@Component
export default class LogoHandler extends Vue {
  @Prop() logos!: Array<string>

  get filteredLogos(): Array<Logo> {
    return this.logos.map(e => configLogos.find(l => l.name === e)!)
  }

  mounted() {
    // @ts-ignore
    tippy('.logos', {
      arrow: false,
      placement: 'bottom',
      offset: [-12, 12]
    })
  }
}
</script>

<style scoped>
</style>