<template>
  <footer class="dark:bg-black text-white pb-8 mt-8">
    <div
      class="container font-bold mx-auto text-center text-gray-900 dark:text-gray-100"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} Joe DiGioia. All Rights Reserved.
      </p>
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
