<template>
  <section id="projects" class="py-8 bg-gray-100 dark:bg-black">
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
    <div
      class="container mx-auto font-semibold text-shadow-lg text-center mt-8"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <a :href="project3.link" target="_blank" rel="noopener noreferrer">
          <div
            :style="{ backgroundImage: `url(${project3.image})` }"
            class="bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
          >
            <h3 class="text-2xl mb-4 text-white">Movie Info Quick</h3>
            <p class="text-white">
              Find info about any movie you know the name of.
            </p>
          </div>
        </a>
        <a :href="project4.link" target="_blank" rel="noopener noreferrer">
          <div
            :style="{ backgroundImage: `url(${project4.image})` }"
            class="bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
          >
            <h3 class="text-2xl mb-4 text-white">Key & BPM Finder</h3>
            <p class="text-white">
              Find the Key and BPM of any song on Spotify instantly.
            </p>
          </div>
        </a>
        <a :href="project5.link" target="_blank" rel="noopener noreferrer">
          <div
            :style="{ backgroundImage: `url(${project5.image})` }"
            class="bg-white dark:bg-gray-800 bg-cover bg-center p-8 rounded shadow transform hover:scale-105 transition-transform"
          >
            <h3 class="text-2xl mb-4 text-white">Cold, Warm or Hot?</h3>
            <p class="text-white">Find out the temperature of any zipcode.</p>
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
      project3: {
        image: "https://wallpapercave.com/wp/wp1945939.jpg",
        link: "https://jolly-faun-11653f.netlify.app/",
      },
      project4: {
        image: "https://wallpapercave.com/wp/wp2201949.jpg",
        link: "https://transcendent-blancmange-418a93.netlify.app/",
      },
      project5: {
        image:
          "https://th.bing.com/th/id/R.a9f3ad49a2569ba3ea4daeeac93ec90a?rik=Sy2nJ8n1dU69fQ&pid=ImgRaw&r=0",
        link: "https://jovial-sfogliatella-369c77.netlify.app/",
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
