<template>
  <div class="overflow-hidden relative item">
    <img :src="image" :alt="title" class="w-100" />
    <div class="overlay px-3 text-center">
      <h2 v-if="title" class="font-bold text-white text-xl">{{ title }}</h2>
      <h3 v-if="subtitle" class="mb-5 text-gray-700 text-white">
        {{ subtitle }}
      </h3>
    </div>
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
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
.overlay {
  align-items: center;
  background-color: rgba(151, 206, 64, 0.9);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0px;
  transform: translateY(100%);
  transition: all 0.3s ease;
  width: 100%;
}

.item:hover .overlay {
  transform: translateY(0%);
}
</style>
