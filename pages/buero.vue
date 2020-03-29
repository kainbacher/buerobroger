<template>
  <div>
    <top-element
      image="/buero.jpg"
      text="Die Gründerin des BÜRO BROGER ist die Gestalterin und
      Informationsdesignerin Alexandra Broger-Grießler. Gemeinsam mit
      ihren langjährigen Netzwerk-PartnerInnen aus den Bereichen
      Programmierung, Text, und Fotografie bietet sie Komplettlösungen
      für den individuellen und überzeugenden Auftritt an."
      text-color="text-white"
    />

    <statement
      text="Die Augenhöhe ist entscheidend. Für mich versteht es sich von selbst,
          in der Kommunikation beim Erstgespräch genau hinzusehen und
          wahrzunehmen. Und noch wichtiger ist es, aufmerksam zuzuhören. Das,
          was mir erzählt wird über das Unternehmen, über Vorhaben, Visionen und
          Wünsche. Das ist das Herzstück meines Jobs. Und das braucht es, um
          mittels Gestaltung die Verbindung zwischen Unternehmen und Zielgruppe
          herzustellen."
    />

    <div
      class="container mx-auto flex flex-wrap justify-end overflow-hidden pb-16 md:pb-36 lg:pb-48 grid grid-cols-1 md:grid-cols-3"
    >
      <buero-item
        text="Die Bezeichnung „Büro“ ist so klar, Sie haben wahrscheinlich auch
          sofort ein Bild dazu. Vielleicht sehen Sie einen oder mehrere Tische,
          einen Computer, Stifte, eine halbvolle Kaffeetasse und ein gerahmtes
          Foto vor sich. Auf jeden Fall gibt es einen Schreibtisch dort. Ein
          Platz, an dem getippt und geschrieben oder gezeichnet, recherchiert,
          programmiert oder sortiert wird. Für mich ist das Büro der zentrale
          Ort und Think Tank, an dem ich in Ruhe und sehr konzentriert arbeiten
          kann. An dem meine Ideen erst zu Papier und von dort in die digitale
          Welt oder in Druck kommen."
      />

      <buero-item
        icon="coffee"
        text="Eine sehr wichtige Rolle spielt die Kaffeeküche. So wie Küchen ganz
          allgemein der zentrale Ort für nahrhafte Gespräche sind, fühle ich
          mich in meiner Kaffeeküche entspannt und den nötigen Ausgleich zu
          meiner Arbeit. Hier komme ich locker in´s Gespräch mit
          AuftraggeberInnen und dem Team, mit dem ich zusammen arbeite. Ich
          erfahre deren Geschichten, wir plaudern, diskutieren und lachen und
          mein Gegenüber wird im wahrsten Sinne begreifbar. Und das ist für mich
          die Basis für den Start und den Fortbestand einer erfolgreichen und
          guten Zusammenarbeit."
      />
      <buero-item
        icon="communication"
        text="Der Begriff „Büro“ oder französisch „bureau“ stammt ursprünglich aus
          dem altfranzösischen bure oder burel, was übersetzt „grober Wollstoff“
          bedeutet. Mit einem solchen – meist in grün – waren die Tische früher
          in den Schreibstuben bespannt. Mein Tisch ist zwar weder grün noch aus
          Stoff, dennoch ist auch für mich die Materie. Eine Struktur, ein
          Glanz, etwas Leichtes, das sich gut anfühlt, wenn man es in den Händen
          hält.Kommen auch Sie auf einen Kaffee und ein gutes Gespräch. Ich freue
          mich."
      />
    </div>
  </div>
</template>

<script>
import BueroItem from '~/components/BueroItem.vue'
import Statement from '~/components/Statement.vue'
import TopElement from '~/components/TopElement.vue'

export default {
  components: {
    BueroItem,
    Statement,
    TopElement
  },
  head() {
    return {
      title: 'Büro Broger',
      meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
    }
  }
}
</script>
