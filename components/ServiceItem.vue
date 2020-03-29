<template>
  <div class="overflow-hidden md:px-3 bg-gray-200 p-8">
    <h2 v-if="title" class="font-bold text-xl">{{ title }}</h2>
    <h3 v-if="subtitle" class="mb-5 text-gray-700 text-sm">
      {{ subtitle }}
    </h3>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
