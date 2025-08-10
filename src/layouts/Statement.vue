<template>
    <div>
        <h3>Client</h3>
        <p>{{ projectData?.content?.client }}</p>
    </div>

    <div>
        <h3>Solutions</h3>
        <p>{{ projectData?.content?.solutions }}</p>
    </div>

    <div>
        <h3>Project Background</h3>
        <p>{{ projectData?.content?.background }}</p>
    </div>

    <div>
        <h3>Problem Statement</h3>
        <p>{{ projectData?.content?.problem }}</p>
    </div>

    <img :src="project.userMock" :alt="`${project.name}`" />
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

  img
    max-height: 520px
    width: 100%
    @include imgDefault(cover)
    object-position: center 40%
    margin: calc($base * 10) 0

  p
    margin: calc( $base * 1 ) 0 calc( $base * 6 )
    font-weight: 200

  div
    display: inline-flex
    flex-direction: column
    width: calc(50% - ($base * 4))
    margin: $base calc($base * 4) calc($base * 4) 0

</style>
