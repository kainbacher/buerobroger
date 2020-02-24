<template>
  <div>
    <Header />
    <nuxt />
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
