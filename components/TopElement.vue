<template>
  <div
    class="container mx-auto flex flex-wrap justify-end overflow-hidden mb-16 md:mb-36 lg:mb-48"
  >
    <div class="w-full overflow-hidden relative">
      <img :src="image" alt="Alexandra Broger-Grießler Büro" />
      <div
        class="absolute h-full w-full top-0 flex justify-center items-center"
      >
        <div class="w-3/4 lg:w-1/3 mx-auto">
          <h1
            :class="['text-center text-sm lg:text-xl xl:text-2xl', textColor]"
          >
            {{ text }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/startseite.jpg',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: false
    },
    textColor: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
