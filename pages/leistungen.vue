<template>
  <div>
    <top-element
      image="/leistungen.jpg"
      text="Die kreative Welt ist faszinierend, aufregend und vielseitig –
      gerade in der heutigen Zeit, in der der Mix aus analog und digital
      das ganze noch spannender macht. Das kreative Spiel mit Formen,
      Farben und Materialien und Wiedergabegeräten macht es aufregend –
      fordert die Kreativität."
      text-color="text-white"
    />

    <div
      class="container mx-auto flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <service-item
        title="Corporate Design"
        subtitle="Weil der erste Eindruck zählt und bleibt."
        text="Ein unverwechselbares Design – das ist die Visiten- und Eintrittskarte. Es macht Sie als Unternehmen und auch Person einzigartig."
      />
      <service-item
        title="Verpackungs Design"
        subtitle="Weil Verpackungen wie Geschenke wirken."
        text="In ansprechenden, außergewöhnlichen, stilvollen, witzigen und
          passenden Verpackungen liegt das Potential der raschen
          Kaufentscheidung. Diese treffen Ihre KundInnen nämlich innerhalb
          weniger Sekunden. Das Plus: Sie haben selbst die doppelte Freude an
          Ihrem Produkt."
      />
      <service-item
        title="Katalog- & Broschürengestaltung"
        subtitle="Weil selbst im digitalen Zeitalter Kataloge und Broschüren unablässig sind."
        text="Etwas aus Papier in der Hand zu halten, das hat für Kunden einen hohen
          Wert. Auch in Zeiten des Internets informieren sie sich vor dem Kauf
          gern mittels Print-Katalogen, Broschüren oder Flyern."
      />
      <service-item
        title="Magazingestaltung"
        subtitle="CIRCE Vorarlberg"
        text="Magazine erzählen Geschichten von Mode, Lifestyle, Society, Kunst und Design. Mit Hochglanzbildern, Texten und dem Layout wird das Magazin so aufgebaut, dass ein stimmiger Gesamteindruck entsteht, der die jeweilige Zielgruppe anspricht und abholt."
      />
      <service-item
        title="Screen-Design"
        subtitle="Digitalisierung"
        text="Den Arm des Corporate Designs in die digitale Welt verlängern – die Markenwelt auf den unterschiedlichen Wiedergabegeräten zum Kunden bringen; das ist die Aufgabe des Screen-Designs."
      />
      <service-item
        title="Geschäftsausstattungen"
        subtitle="Drucksorten"
        text="Ein überzeugendes Logo wirkt sowohl digital als auch analog. Wir bieten durchdachte Anwendungen auf den verschiedensten Drucksorten wie Briefpapier, Visitenkarten, Notizblöcke, u.v.m."
      />
    </div>
  </div>
</template>

<script>
import ServiceItem from '~/components/ServiceItem.vue'
import TopElement from '~/components/Topelement.vue'

export default {
  components: {
    ServiceItem,
    TopElement
  },
  head() {
    return {
      title: 'Welcome',
      meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
    }
  }
}
</script>
