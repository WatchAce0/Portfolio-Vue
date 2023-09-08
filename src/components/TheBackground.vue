<template>
  <section id="background" class="">
    <div :class="{ 'bg-white dark:bg-black': isDark }">
      <h2 class="text-4xl text-center font-bold mb-8">Image Goes Here</h2>
      <p class="text-center text-xl p-8">
        Hey, I'm Joe DiGioia a Full Stack Developer and Graphic Designer from
        Pittsburgh, PA. <br />
        I enjoy creating new user experiences through a mix of modern design and
        web development.
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
