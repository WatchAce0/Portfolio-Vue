<template>
  <div :class="{ 'top-0 z-50  dark:bg-black': isSticky }">
    <nav class="container mx-auto py-4 flex justify-between items-center">
      <!-- Title -->
      <div class="text-xl text-center font-bold">JoeDiGioia.com</div>

      <!-- Dark Mode Switch -->
      <div class="flex items-center m-4 space-x-2">
        <label for="darkModeSwitch" class="switch">
          <input type="checkbox" id="darkModeSwitch" v-model="$root.darkMode" />
          <span class="slider round">
            <span class="mode-indicator">{{
              $root.darkMode ? "🌙" : "☀️"
            }}</span>
          </span>
        </label>
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
  background-color: #ec9c51;
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
  background-color: #04243d;
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

/* Add this to style the mode indicator inside the switch */
.mode-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.4s;
  font-size: 14px;
}

input:checked + .slider .mode-indicator {
  left: 8px; /* Adjust as needed */
}

input:not(:checked) + .slider .mode-indicator {
  right: 8px; /* Adjust as needed */
}
</style>
