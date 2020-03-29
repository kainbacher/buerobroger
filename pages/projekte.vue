<template>
  <project-list />
</template>

<script>
import ProjectList from '~/components/projectlist.vue'

export default {
  components: {
    ProjectList
  },
  head() {
    return {
      title: 'Welcome',
      meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
    }
  }
}
</script>
