<template>
  <div class="container pb-16 md:pb-36 lg:pb-48 mx-auto">
    <div class="w-full lg:w-1/2 mx-auto">
      <div
        class="bg-white rounded-lg shadow-lg flex p-8 md:p-10 flex-col md:flex-row"
      >
        <img
          src="/portrait-alexandra.jpg"
          alt="Alexandra Broger-Grießler"
          class="h-24 w-24 rounded-full mx-auto mb-8 md:mb-0"
        />
        <div class="md:ml-10">
          <p class="mb-3 text-xl">
            <span class="text-green">„</span>
            {{ text }}<span class="text-green">“</span>
          </p>
          <p class="font-bold tracking-wider text-green">
            Alexandra Broger-Grießler
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
