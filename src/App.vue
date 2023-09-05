/* eslint-disable vue/no-unused-components */

<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <StickyNavbar />
    <TheBackground id="background" />
    <MySkills id="skills" />
    <MyProjects id="projects" />
  </div>
</template>

<script>
import StickyNavbar from "./components/StickyNavbar.vue";
import MyProjects from "./components/MyProjects.vue"; // Renamed from Projects
import MySkills from "./components/MySkills.vue"; // Renamed from Skills
import TheBackground from "./components/TheBackground.vue"; // Renamed from Background

export default {
  components: {
    StickyNavbar,
    MyProjects,
    MySkills,
    TheBackground,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    darkMode(newValue) {
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.darkMode = true;
    }
  },
};
</script>
