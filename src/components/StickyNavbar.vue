<template>
  <div :class="{ 'sticky top-0 z-50 bg-white dark:bg-gray-900': isSticky }">
    <nav class="container mx-auto py-4 space-x-4">
      <!-- Desktop Menu -->
      <div class="hidden md:flex justify-between items-center w-full">
        <div class="space-x-4">
          <a v-scroll-to="'#home'" href="#">Home</a>
          <a v-scroll-to="'#projects'" href="#">Projects</a>
          <a v-scroll-to="'#skills'" href="#">Skills</a>
          <a v-scroll-to="'#background'" href="#">Background</a>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-sm">{{ darkButtonText }}</span>
          <label for="darkModeSwitch" class="switch">
            <input
              type="checkbox"
              id="darkModeSwitch"
              v-model="$root.darkMode"
            />

            <span class="slider round"></span>
          </label>
        </div>
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
        <div class="flex items-center space-x-2">
          <span class="text-sm">{{ darkButtonText }}</span>
          <label for="darkModeSwitchMobile" class="switch">
            <input
              type="checkbox"
              id="darkModeSwitchMobile"
              v-model="$root.darkMode"
            />

            <span class="slider round"></span>
          </label>
        </div>
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
      return this.$root.darkMode ? "Light Mode" : "Dark Mode";
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
      this.$root.darkMode = !this.$root.darkMode;
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
