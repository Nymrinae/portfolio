<template>
  <div class="flex flex-wrap justify-end">
    <a
      v-for="({name, content, link, svgPath}, n) in networks"
      :key="n"
      class="link"
      target="_blank"
      rel="noopener noreferrer nofollow"
      :href="link"
      :data-tippy-content="content"
    >
      <svg
        :class="`pr-6 h-6 fill-current text-gray-600 hover:text-${name.toLowerCase()}`"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title v-html="name" />
        <path :d="svgPath"/>
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import networks from '@/config/networks'

@Component
export default class SocialNetworks extends Vue {
  @Prop({ default: true }) readonly top!: Boolean

  private readonly networks: Array<Network> = networks

  mounted() {
    this.initToolTip()
  }

  initToolTip() {
    // @ts-ignore
    tippy('.link', {
      arrow: false,
      placement: 'top',
      offset: [-12, 12]
    })
  }
}
</script>