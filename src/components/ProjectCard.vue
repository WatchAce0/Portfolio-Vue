<template>
  <a :href="project.link" target="_blank" rel="noopener noreferrer">
    <div
      class="relative bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
      :style="{ backgroundImage: `url(${project.image})` }"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <h3 class="relative text-3xl mb-4 text-white">{{ project.title }}</h3>
      <p class="relative text-white">{{ project.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
