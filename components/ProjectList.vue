ö<template>
  <div class="container pb-64 mx-auto">
    <div class="text-center pb-10 uppercase font-bold tracking-wider">
      <h1>Projekte</h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10"
    >
      <project-list-item
        v-for="(item, index) in projectList"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
import projectData from '@/static/projects/projects.json'
import ProjectListItem from '~/components/ProjectListItem.vue'

export default {
  components: {
    ProjectListItem
  },
  props: {
    amount: {
      type: Number,
      default: 500
    },
    showFilter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      projects: projectData.projects
    }
  },
  computed: {
    projectList() {
      return this.projects.slice(0, this.amount)
    }
  }
}
</script>
