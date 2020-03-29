<template>
  <main>
    <top-element
      image="/startseite.jpg"
      text="Das BÜRO BROGER bietet seinem Kundenkreis aus Handel und
        Industrie, Wirtschaft, Medien und Kultur ein breites
        Leistungsspektrum an Kommunikationsdesign und Gestaltung."
    />
    <statement
      text="Wann ich meine Arbeit als Gestalterin als gelungen betrachte? Wenn ich von meinen KundInnen höre, dass sie es sich genau so vorgestellt haben."
    />
    <project-list :amount="8" />
  </main>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'
import Statement from '~/components/Statement.vue'
import TopElement from '~/components/TopElement.vue'

export default {
  components: {
    ProjectList,
    Statement,
    TopElement
  },
  head() {
    return {
      title: 'Büro Broger, Grafik, Design, Layout',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Büro Broger, Grafik, Design, Layout'
        }
      ]
    }
  }
}
</script>
