<template>
  <footer class="dark:bg-black text-white py-6">
    <div
      class="container font-bold mx-auto text-center text-gray-900 dark:text-gray-100"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} Joe DiGioia. All Rights Reserved.
      </p>
      <div class="mt-4 space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          class="text-gray-400 hover:text-white"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
