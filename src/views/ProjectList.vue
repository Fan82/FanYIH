<template>
  <div class="wrapper">
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  components: {
    Project,
  },
  data() {
    return {
      // projects: [
      //   {
      //     id: 1,
      //     name: "專案 A",
      //     detail: "這是專案 A 的描述",
      //     image: "https://via.placeholder.com/300",
      //     logo: "https://via.placeholder.com/50",
      //   },
      //   {
      //     id: 2,
      //     name: "專案 B",
      //     detail: "這是專案 B 的描述",
      //     image: "https://via.placeholder.com/300",
      //     logo: "https://via.placeholder.com/50",
      //   },
      // ],
      projects: [
        {
          id: 1,
          name: "Booking Flight Web",
          detail: "Design booking flight web",
          image: "../src/assets/projectimg/FLIGHT/MockUp.png",
          logo: "../src/assets/projectimg/FLIGHT/logo.png",
        },
        {
          id: 2,
          name: "Easy Bank",
          detail: "Bank anywhere, with your phone",
          image: "../src/assets/projectimg/BANK/MockUp.png",
          logo: "../src/assets/projectimg/BANK/logo.png",
        },
        {
          id: 3,
          name: "Public Transportation",
          detail: "Design booking flight web",
          image: "../src/assets/projectimg/PUBLIC/MockUp.png",
          logo: "../src/assets/projectimg/PUBLIC/logo.png",
        },
        {
          id: 4,
          name: "Let's Travel",
          detail: "Time to experience different your life",
          image: "../src/assets/projectimg/TRAVEL/MockUp.png",
          logo: "../src/assets/projectimg/TRAVEL/logo.png",
        },
        {
          id: 5,
          name: "World Gaming",
          detail: "Second life to control yourself",
          image: "../src/assets/projectimg/WORLDGAME/MockUp.png",
          logo: "../src/assets/projectimg/WORLDGAME/logo.png",
        },
        {
          id: 6,
          name: "Bet Gaming",
          detail: "Believe yourself",
          image: "../src/assets/projectimg/BETGAME/MockUp.png",
          logo: "../src/assets/projectimg/BETGAME/logo.png",
        }
      ],
    };
  },
};
</script>