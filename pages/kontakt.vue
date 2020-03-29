<template>
  <div class="container mx-auto">
    <a
      href="https://www.google.at/maps/place/B%C3%BCro+Broger+%7C+B%C3%BCro+f%C3%BCr+Gestaltung+%26+Kommunikation/@47.412818,9.742649,17z/data=!3m1!4b1!4m5!3m4!1s0x479b6b494f2b0c1f:0xdcbd2bf319ad651!8m2!3d47.412818!4d9.744843"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/map.jpg"
        alt="Alexandra Broger-Grießler"
        class="w-100 mx-auto mb-16 md:mb-36 lg:mb-48"
      />
    </a>
    <img
      src="/portrait-alexandra.jpg"
      alt="Alexandra Broger-Grießler"
      class="h-64 w-64 rounded-full mx-auto mb-32"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Welcome',
      meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
    }
  }
}
</script>
