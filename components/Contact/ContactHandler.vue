<template>
  <section id="contact" class="text-gray-500 bg-gray-900 body-font relative">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 mt-12 text-white"> {{ $t('CONTACT.CONTACT_ME') }} </h1>
    </div>
    <div class="container px-5 pb-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <ContactForm />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ContactHandler extends Vue {}
</script>
