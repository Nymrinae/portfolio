<template>
  <div
    class="flex relative transition duration-500 ease-in-out transform"
    :class="{ 'hover:-translate-y-2': !background }"
  >
    <img
      :src="background"
      alt="gallery"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div
      class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100 transition duration-500 ease-in-out transform"
      :class="{ 'opacity-0': background }"
      style="height: 224px"
    >
      <h2
        class="tracking-widest text-sm title-font font-medium text-green-500 mb-2"
        v-html="languages.join(' | ')"
      />
      <h1 class="title-font text-lg font-medium text-white mb-3" v-html="title" />
      <p class="leading-relaxed text-justify" v-html="$t(description)" />
      <a :href="`https://github.com/Nymrinae/${githubRepo}`" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/github.png" class="absolute right-0 bottom-0 mr-3 mb-3" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ProjectCard extends Vue {
  @Prop() readonly background!: string
  @Prop() readonly description!: string
  @Prop() readonly githubRepo!: string
  @Prop() readonly languages!: Array<string>
  @Prop() readonly title!: string
}
</script>