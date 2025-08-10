<template>
    <div>
        <p>{{ projectData?.content?.inspiration }}</p>
        <img :src="project.inspiration" :alt="`${project.name}`" />
    </div>
</template>

<script>
import projects from "@/data/projects.js";

export default {
    props: ["projectId"],
    computed: {
        project() {
            return projects.find((p) => p.id === this.projectId) || null;
        },
        projectData() {
            return projects.find((project) => project.id === this.projectId) || null;
        },
    },
};
</script>
<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  div
    text-align: center
    img
        @include imgDefault(contain)
        width: 40%
        margin: 0 auto
        text-align: center
        margin: calc($base * 10) 0

    p
        width: 50%
        text-align: center
        margin: 0 auto

</style>
