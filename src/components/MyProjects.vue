<template>
  <section id="projects" class="py-8 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto font-semibold text-shadow-lg text-center">
      <h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <a :href="project1.link" target="_blank" rel="noopener noreferrer">
          <div
            :style="{ backgroundImage: `url(${project1.image})` }"
            class="bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
          >
            <h3 class="text-2xl mb-4 text-white">What Echoes Back</h3>
            <p class="text-white">An immersive digital collectible platform.</p>
          </div>
        </a>
        <a :href="project2.link" target="_blank" rel="noopener noreferrer">
          <div
            :style="{ backgroundImage: `url(${project2.image})` }"
            class="bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
          >
            <h3 class="text-2xl mb-4 text-white">Resovar</h3>
            <p class="text-white">An innovative Music Creation Platform.</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDark: this.$root.darkMode || false,
      project1: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/app-floor.appspot.com/o/Headers%2Ftang.png?alt=media&token=271a4d9f-7c22-4242-a5a0-beb01ab97bd8",
        link: "https://www.whatechoesback.com",
      },
      project2: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/create-midi.appspot.com/o/dam3.png?alt=media&token=23a4b9a7-90db-4cfa-898d-f6434af59f39",
        link: "https://www.resovar.com",
      },
    };
  },
  watch: {
    "$root.darkMode": {
      immediate: true,
      handler(newValue) {
        this.isDark = newValue;
      },
    },
  },
};
</script>
