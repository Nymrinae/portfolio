<template>
  <button id="scrollToTopBtn" class="scrollToTopBtn" @click="goToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
      >
        <path d="M0,172v-172h172v172z" fill="none" />
        <g>
          <path
            d="M77.4,149.64v-94.6l-29.24,29.24l-12.04,-12.04l37.84,-37.84l12.04,-12.04l12.04,12.04l37.84,37.84l-12.04,12.04l-29.24,-29.24v94.6z"
            fill="#52bfa1"
          />
          <path
            d="M94.6,151.36h-17.2c-0.95116,0 -1.72,-0.77056 -1.72,-1.72v-90.44792l-26.30396,26.30396c-0.67252,0.67252 -1.75956,0.67252 -2.43208,0l-12.04,-12.04c-0.67252,-0.67252 -0.67252,-1.75956 0,-2.43208l49.88,-49.88c0.67252,-0.67252 1.75956,-0.67252 2.43208,0l49.88,49.88c0.67252,0.67252 0.67252,1.75956 0,2.43208l-12.04,12.04c-0.67252,0.67252 -1.75956,0.67252 -2.43208,0l-26.30396,-26.30396v90.44792c0,0.94944 -0.76884,1.72 -1.72,1.72zM79.12,147.92h13.76v-92.88c0,-0.69488 0.41796,-1.32268 1.06124,-1.58928c0.64328,-0.26488 1.38288,-0.11868 1.8748,0.37324l28.02396,28.02396l9.60792,-9.60792l-47.44792,-47.44792l-47.44792,47.44792l9.60792,9.60792l28.02396,-28.02396c0.49192,-0.49192 1.23152,-0.63984 1.8748,-0.37324c0.64328,0.2666 1.06124,0.8944 1.06124,1.58928z"
            fill="#000000"
          />
          <path
            d="M49.02,71.38c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l17.2,-17.2c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-17.2,17.2c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM74.82,45.58c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l4.3,-4.3c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-4.3,4.3c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM122.98,71.38c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112l-29.24,-29.24c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604c0.3354,-0.3354 0.88064,-0.3354 1.21604,0l29.24,29.24c0.3354,0.3354 0.3354,0.88064 0,1.21604c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112zM83.42,36.98c-0.22016,0 -0.44032,-0.08428 -0.60888,-0.25112c-0.3354,-0.3354 -0.3354,-0.88064 0,-1.21604l2.58,-2.58c0.3354,-0.3354 0.88064,-0.3354 1.21604,0c0.3354,0.3354 0.3354,0.88064 0,1.21604l-2.58,2.58c-0.16684,0.16684 -0.387,0.25112 -0.60716,0.25112z"
            fill="#000000"
          />
        </g>
      </g>
    </svg>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ScrollToTopBtn extends Vue {
  mounted() {
    window.onscroll = () => {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn')

      scrollToTopBtn!.style.transition = 'visibility 0s, opacity 0.5s linear';
      scrollToTopBtn!.style.opacity = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? '1' : '0';
    }
  }

  goToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped css>
.scrollToTopBtn {
  opacity: 0;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>