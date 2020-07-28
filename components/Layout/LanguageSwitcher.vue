<template>
  <span style="cursor: pointer" @click="switchLocale">
  {{ $t('SWITCH_LANG') }} {{ nonCurrentLang.code.toUpperCase() }}
  </span>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class LanguageSwitcher extends Vue {
  get nonCurrentLang(): string {
    // @ts-ignore
    return this.$i18n.locales.find(lang => lang.code !== this.$i18n.locale)
  }

  private switchLocale(): void {
    // @ts-ignore
    this.$i18n.setLocale(this.nonCurrentLang.code)
  }
}
</script>