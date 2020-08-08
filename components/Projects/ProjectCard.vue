<template>
  <div
    id="card"
    class="flex relative transition duration-500 ease-in-out transform project"
    :class="{ 'hover:-translate-y-2': !background }"
  >
    <img
      :src="background"
      alt="gallery"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div
      class="px-8 py-8 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100 transition duration-500 ease-in-out transform"
      :class="{ 'opacity-0': background }"
      style="height: 224px"
    >
      <h1 class="title-font text-lg font-medium text-white mb-2" v-html="title" />
      <p class="leading-relaxed text-justify" v-html="$t(description)" />
      <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
        <LogoHandler
          :logos="languages"
          :small="true"
        />
      </div>
      <a :href="`https://github.com/Nymrinae/${githubRepo}`" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/github.png" class="absolute right-0 bottom-0 mr-3 mb-3" height="24px" width="24px" />
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

<style scoped>
.card:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  color: white;
  font-family: 'Raleway';
  font-size: 2.5rem;
}

.project:hover {
  --borderWidth: 3px;
  background: #1D1F20;
  position: relative;
  border-radius: var(--borderWidth);
}
.project:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>