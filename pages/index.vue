<template>
  <div>
    <ScrollToTopBtn />
    <Header />
    <HeroPresentation />
    <ProjectsHandler />
    <ContactHandler />
    <Citation />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>