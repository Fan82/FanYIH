<template>
    <div>
        <h3>Inspiration</h3>
        <p>{{ projectData?.content?.inspiration }}</p>
    </div>
    <img :src="project.inspiration" :alt="`${project.name}`" />
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
        text-align: center
        max-width: 100%
        margin: calc($base * 10) auto
    div
        margin: calc($base * 10) auto
        p
            font-size: $base5
            line-height: calc($base * 10)
            font-weight: 200
        @media (max-width: 1000px)
        @media (max-width: 1000px)
            margin: $base4 auto

            h3
                line-height: 2
                font-size: $base4
            p
                font-size: $base3
                line-height: 1.8
                font-weight: normal
</style>
