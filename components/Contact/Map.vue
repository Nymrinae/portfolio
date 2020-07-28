<template>
  <div
    class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
  >
    <iframe
      width="100%"
      height="100%"
      title="map"
      class="absolute inset-0"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20all%C3%A9e%20des%20mon%C3%A9gasques%2091300%20Massy+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      style="filter: opacity(0.8);"
    />
    <div class="bg-gray-900 relative flex flex-wrap lg:w-full mr-8 py-6">
      <div class="lg:w-1/2 px-6">
        <h2 class="title-font font-medium text-white tracking-widest text-sm">
          {{ $t('CONTACT.ADDRESS').toUpperCase() }}
        </h2>
        <p class="leading-relaxed"> 3 allée des monégasques<br />91300 Massy</p>
      </div>
      <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 class="title-font font-medium text-white tracking-widest text-sm">
          {{ $t('CONTACT.EMAIL').toUpperCase() }}
        </h2>
        <a class="text-indigo-500 leading-relaxed">sylvain.raya@epitech.eu</a>
        <h2 class="title-font font-medium text-white tracking-widest text-sm mt-4">
          {{ $t('CONTACT.PHONE').toUpperCase() }}
        </h2>
        <p class="leading-relaxed">06.58.18.40.73</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Map extends Vue {}
</script>