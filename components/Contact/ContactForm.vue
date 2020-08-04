<template>
  <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 class="text-white text-lg mb-5 font-medium title-font">{{ $t('CONTACT.WANNA_COLLABORATE') }}</h2>
    <input
      class="bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-base text-white px-4 py-2 mb-4"
      :placeholder="$t('CONTACT.NAME')"
      v-model="name"
      type="text"
    />
    <input
      class="bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-base text-white px-4 py-2 mb-4"
      :placeholder="$t('CONTACT.EMAIL')"
      v-model="email"
      type="email"
    />
    <input
      class="bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-base text-white px-4 py-2 mb-4"
      :placeholder="$t('CONTACT.SUBJECT')"
      v-model="subject"
      type="text"
    />
    <textarea
      class="bg-gray-800 rounded border border-gray-700 focus:outline-none h-32 focus:border-indigo-500 text-base text-white px-4 py-2 mb-4 resize-none"
      placeholder="Message"
      v-model="message"
    />
    <button
      class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      @click="sendMail"
    >
      {{ $t('CONTACT.SEND') }}
    </button>
    <p class="text-xs text-gray-500 text-center mt-3">{{ $t('CONTACT.ANSWER') }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import emailJS from 'emailjs-com'

@Component
export default class ContactForm extends Vue {
  private name: string = ''
  private email: string = ''
  private subject: string = ''
  private message: string = ''

  private checkMail(): MailOptions | boolean {
    const { name, email, subject, message } = this

    if (!name || !email || !subject || !message)
      return false

    return {
      name,
      email,
      subject,
      message
    }
  }

  private sendMail(): void {
    const mail = this.checkMail()

    if (mail)
      emailJS.send('gmail', 'template_y9Sbe0nP', mail, process.env.MAIL_USER_ID)
    else
      console.log('error') // add some UI changes here
  }
}
</script>