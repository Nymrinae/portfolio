<template>
  <div class="flex flex-wrap justify-end">
    <a
      v-for="({color, name, svgPath}, n) in stack"
      :key="n"
      class="language"
      target="_blank"
      rel="noopener noreferrer nofollow"
      :href="link"
      :data-tippy-content="name"
    >
      <svg
        :class="`pr-6 h-8 fill-current text-gray-600 hover:text-white`"
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
import stack from '@/config/stack'

@Component
export default class Stack extends Vue {
  private readonly stack: Array<Language> = stack

  mounted() {
    // @ts-ignore
    tippy('.language', {
      arrow: false,
      placement: 'top',
      offset: [-12, 12]
    })
  }
}
</script>