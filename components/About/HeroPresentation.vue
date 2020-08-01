<template>
  <section id="about" class="text-gray-500 bg-gray-900 body-font">
    <div class="max-w-6xl flex items-center h-auto h-screen flex-wrap mx-auto md:mb-0 xl:my-0">
      <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0 mt-12 md:mt-48">
        <div class="p-4 md:p-12 text-center lg:text-left">
          <h1 class="text-3xl font-bold mt-6 pt-0 md:pt-8 lg:pt-0">Sylvain RAYA <br> {{ $t('TITLE') }}</h1>
          <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
          <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>
          <div class="pt-12 pb-8">
            <a href="#contact">
              <button class="inline-flex w-1/2 md:w-auto mb-4 md:mb-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {{ $t('CONTACT.CONTACT_ME') }}
              </button>
            </a>
            <a>
              <button class="inline-flex w-1/2 md:w-auto mb-4 md:mb-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {{ $t('CV') }}
              </button>
            </a>
          </div>
          <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <SocialNetworks />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-2/5">
        <img src="https://dummyimage.com/350x530" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class HeroPresentation extends Vue {}
</script>