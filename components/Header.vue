<template>
  <header class="container flex py-10 mx-auto items-center">
    <div class="w-1/3 flex justify-start navigation">
      <NLink
        to="/leistungen/"
        class="p-2 uppercase tracking-wide text-lg hover:text-green hidden sm:block"
        >Leistungen</NLink
      >
      <NLink
        to="/projekte/"
        class="p-2 uppercase tracking-wide text-lg hover:text-green hidden sm:block"
        >Projekte</NLink
      >
    </div>
    <div class="w-1/3 flex justify-center">
      <NLink to="/">
        <logo :color="logoColor" />
      </NLink>
    </div>
    <div class="w-1/3 flex justify-end items-center navigation">
      <NLink
        to="/buero/"
        class="p-2 uppercase tracking-wide text-lg hover:text-green hidden sm:block"
        >Büro</NLink
      >
      <NLink
        to="/kontakt/"
        class="p-2 uppercase tracking-wide text-lg hover:text-green hidden sm:block"
        >Kontakt</NLink
      >
      <svg
        class="block sm:hidden mr-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggleNavigation"
      >
        <rect x="3" y="6" width="18" height="2" rx="1" fill="#97CE40" />
        <rect x="3" y="11" width="18" height="2" rx="1" fill="#97CE40" />
        <rect x="11" y="16" width="10" height="2" rx="1" fill="#97CE40" />
      </svg>
    </div>
    <transition name="fade">
      <mobile-nav
        v-show="mobileNavigationIsVisible"
        @close="toggleNavigation"
      />
    </transition>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MobileNav from '~/components/MobileNav.vue'

export default {
  components: {
    Logo,
    MobileNav
  },
  data() {
    return {
      mobileNavigationIsVisible: false
    }
  },
  computed: {
    logoColor() {
      if (this.$route.name === 'index') {
        return 'green'
      }
      return 'black'
    }
  },
  methods: {
    toggleNavigation() {
      this.mobileNavigationIsVisible = !this.mobileNavigationIsVisible
    }
  }
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
