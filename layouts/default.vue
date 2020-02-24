<template>
  <div class="flex flex-col h-screen">
    <Header />
    <nuxt class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  },
  head() {
    return {
      bodyAttrs: {
        class: 'font-sans bg-white'
      }
    }
  }
}
</script>
