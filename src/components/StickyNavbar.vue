<template>
  <div :class="{ 'sticky top-0 z-50 bg-white dark:bg-gray-900': isSticky }">
    <nav class="container mx-auto py-4 space-x-4">
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4">
        <a v-scroll-to="'#home'" href="#">Home</a>
        <a v-scroll-to="'#projects'" href="#">Projects</a>
        <a v-scroll-to="'#skills'" href="#">Skills</a>
        <a v-scroll-to="'#background'" href="#">Background</a>
        <button @click="toggleDarkMode">{{ darkButtonText }}</button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="menuOpen = !menuOpen">
          <!-- Hamburger icon (you can replace this with a proper SVG or icon) -->
          ☰
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="menuOpen" class="md:hidden flex flex-col space-y-2 mt-4">
        <a v-scroll-to="'#home'" href="#">Home</a>
        <a v-scroll-to="'#projects'" href="#">Projects</a>
        <a v-scroll-to="'#skills'" href="#">Skills</a>
        <a v-scroll-to="'#background'" href="#">Background</a>
        <button @click="toggleDarkMode">{{ darkButtonText }}</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isDarkMode: this.$root.darkMode || false, // initialize based on $root.darkMode
      menuOpen: false, // control the mobile dropdown menu
    };
  },
  computed: {
    darkButtonText() {
      return this.isDarkMode ? "Light Mode" : "Dark Mode";
    },
  },
  watch: {
    "$root.darkMode": {
      immediate: true,
      handler(newValue) {
        this.isDarkMode = newValue;
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$root.darkMode = this.isDarkMode;
    },
  },
};
</script>
