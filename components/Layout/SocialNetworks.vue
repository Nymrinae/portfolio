<template>
  <nav
    class="flex flex-wrap justify-end"
    :class="{ 'mt-8': top }"
  >
    <a
        v-for="(network, n) in networks"
        :key="n"
        :href="network.path"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
        :src="require(`@/assets/icons/${network.icon}.png`)"
        class="mr-6"
        />
    </a>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class SocialNetworks extends Vue {
  @Prop({ default: true }) readonly top!: Boolean

  private readonly networks: Array<NetworksLinks> = [
    { name: 'Twitter', icon: 'twitter', path: 'https://twitter.com/Nymrinae' },
    { name: 'Github', icon: 'github', path: 'https://github.com/Nymrinae' },
    { name: 'LinkedIn', icon: 'linkedin',  path: 'https://www.linkedin.com/in/sylvainraya/' }
  ]
}
</script>