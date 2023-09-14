<template>
  <section id="background" class="">
    <div :class="{ 'bg-white dark:bg-black': isDark }">
      <h2 class="text-4xl text-center font-bold mb-8">
        <div class="grid place-items-center">
          <div
            class="w-64 h-64 bg-center bg-cover rounded-full"
            style="background-image: url('/profile.jpeg')"
          ></div>
        </div>
      </h2>
      <div class="flex justify-center space-x-4 mt-8">
        <!-- Download CV Button -->
        <a
          href="https://drive.google.com/file/d/17Ru3NQrSKAv_zzCt6GKFlQm_EeJRERwa/view?usp=sharing"
          target="_blank"
          download
          ><i class="fas fa-file"></i>
        </a>

        <!-- Email Button -->

        <a href="mailto:joe.p.digioia@gmail.com">
          <i class="fas fa-envelope"></i
        ></a>

        <!-- GitHub Link with logo -->
        <a
          href="https://github.com/WatchAce0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- Replace with SVG or FontAwesome icon for GitHub -->
          <i class="fab fa-github"></i>
        </a>

        <!-- LinkedIn Link with logo -->
        <a
          href="https://www.linkedin.com/in/joe-digioia-420a9a2a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- Replace with SVG or FontAwesome icon for LinkedIn -->
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p class="text-center text-xl p-8">
        Hey, I'm <b>Joe DiGioia</b>, a Full Stack Developer and Graphic Designer
        from Pittsburgh, PA. <br />
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
