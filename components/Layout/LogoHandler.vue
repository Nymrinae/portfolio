<template>
  <div class="flex flex-wrap justify-end px-6 md:px-0">
    <a
      v-for="({ color, isNetwork, link, name, svgPath, value}, n) in filteredLogos"
      :key="n"
      class="logos"
      target="_blank"
      rel="noopener noreferrer nofollow"
      :href="link"
      :data-tippy-content="value || name"
      :data-tippy-placement="isCard ? 'top' : 'bottom'"
    >
    <svg
        class="pr-6 mb-6 md:mb-0 fill-current text-gray-600 svgLogo"
        :class="{
          'h-6': isNetwork || small,
          'h-8': !isNetwork && ! small
        }"
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
  @Prop({ default: false }) small!: Boolean
  @Prop({ default: false }) isCard!: Boolean

  get filteredLogos(): Array<Logo> {
    return this.logos.map(e => configLogos.find(l => l.name === e)!)
  }

  mounted() {
    // @ts-ignore
    tippy('.logos', {
      arrow: false,
      offset: [-12, 12]
    })
  }
}
</script>