/* eslint-disable vue/no-unused-components */

<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-gray-100"
  >
    <StickyNavbar />
    <TheBackground id="background" />

    <MyProjects id="projects" />
    <MySkills id="skills" />
    <TheFooter />
  </div>
</template>

<script>
import StickyNavbar from "./components/StickyNavbar.vue";
import MyProjects from "./components/MyProjects.vue"; // Renamed from Projects
import MySkills from "./components/MySkills.vue"; // Renamed from Skills
import TheBackground from "./components/TheBackground.vue"; // Renamed from Background
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    StickyNavbar,
    MyProjects,
    MySkills,
    TheBackground,
    TheFooter,
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
