<template>
  <div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"], // 透過 props 接收 id
  data() {
    return {
      projects: [
        { id: 1, name: "Booking Flight Web", description: "Design booking flight web" },
        { id: 2, name: "Easy Bank", description: "Bank anywhere, with your phone" },
        { id: 3, name: "Public Transportation", description: "Design booking flight web" },
        { id: 4, name: "Let's Travel", description: "Time to experience different your life" },
        { id: 5, name: "World Gaming", description: "Second life to control yourself" },
        { id: 6, name: "Bet Gaming", description: "Believe your self" },
      ],
    };
  },
  computed: {
    project() {
      return this.projects.find((p) => p.id === parseInt(this.id));
    },
  },
};
</script>
