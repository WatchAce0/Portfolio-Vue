<template>
  <section id="projects" class="py-8 bg-gray-100 dark:bg-black">
    <div class="container mx-auto font-semibold text-shadow-lg text-center">
      <h2 class="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: "Soconu",
          image:
            "https://firebasestorage.googleapis.com/v0/b/solvio-c55ad.appspot.com/o/soconu1.png?alt=media&token=07b07ea8-77e9-4e87-a978-725a08302b8d",
          description:
            "A puzzle game where you have 3 attempts to solve a 3x3 grid of numbers, using feedback from your previous guesses to determine the final answer. Complete with leaderboards, stat tracking and local storage for a persistent game state. Developed using React, Next.js, Firebase, Tailwind CSS. Hosted on Netlify.",
          link: "https://soconu.com/",
        },
        {
          title: "What Echoes Back",
          image:
            "https://firebasestorage.googleapis.com/v0/b/app-floor.appspot.com/o/Headers%2Ftang.png?alt=media&token=271a4d9f-7c22-4242-a5a0-beb01ab97bd8",
          description:
            "A digital collectible platform offering in-app currency, idle game rewarding currency and interactive card collections. Developed using React, Next.js, Firebase, Tailwind CSS, and the Stripe API. Hosted on Vercel.",
          link: "https://www.whatechoesback.com",
        },
        {
          title: "Resovar",
          image:
            "https://firebasestorage.googleapis.com/v0/b/create-midi.appspot.com/o/dam3.png?alt=media&token=23a4b9a7-90db-4cfa-898d-f6434af59f39",
          description:
            "A MIDI generation platform tailored for modern music producers, providing memberships and in-app currency. Developed using React, Next.js, Firebase, Tailwind CSS, and the Stripe API. Hosted on Netlify.",
          link: "https://resovar.com/",
        },
        {
          title: "Deep-Learning PyTorch Flower Classifier",
          image:
            "https://th.bing.com/th/id/R.edfaf8e35032aea428c102199356ca34?rik=nUUZWyPdNFMpMA&pid=ImgRaw&r=0",
          description:
            "This project is a deep learning-based flower classification system built using PyTorch. The model is trained on a dataset containing images of five different types of flowers: Daisy, Dandelion, Rose, Sunflower, and Tulip. The project also includes a web demo built with Flask, allowing users to upload an image and get a prediction in real-time. Hosted on Google Cloud Platform.",
          link: "https://flowerpydemo.ue.r.appspot.com/",
        },
        {
          title: "Movie Info Quick",
          image: "https://wallpapercave.com/wp/wp1945939.jpg",
          description:
            "A quick and efficient movie details fetcher. Developed using Svelte, Tailwind CSS, and the Online Movie Database API. Hosted on Netlify.",
          link: "https://jolly-faun-11653f.netlify.app/",
        },
        {
          title: "Key & BPM Finder",
          image: "https://wallpapercave.com/wp/wp2201949.jpg",
          description:
            "An instant song analyzer, retrieving key and BPM for any Spotify track. Developed using React, Tailwind CSS, and the Spotify API. Hosted on Netlify.",
          link: "https://transcendent-blancmange-418a93.netlify.app/",
        },
        {
          title: "Cold, Warm or Hot?",
          image:
            "https://th.bing.com/th/id/R.a9f3ad49a2569ba3ea4daeeac93ec90a?rik=Sy2nJ8n1dU69fQ&pid=ImgRaw&r=0",
          description:
            "A temperature checker providing data based on a user specified zipcode. Developed using Vue.js, Tailwind CSS, and the OpenWeather API. Hosted on Netlify.",
          link: "https://jovial-sfogliatella-369c77.netlify.app/",
        },
      ],
    };
  },
};
</script>
