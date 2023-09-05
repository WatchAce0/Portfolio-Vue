<template>
  <section id="background" class="bg-gray-200">
    <div :class="{ 'bg-white dark:bg-gray-900': isDark }">
      <h2 class="text-4xl text-center font-bold mb-8">Image Goes Here</h2>
      <p class="text-center text-xl">
        Hey, I am Joe DiGioia a Full Stack Developer and Graphic Designer from
        Pittsburgh, PA.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDark: this.$root.darkMode || false,
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
