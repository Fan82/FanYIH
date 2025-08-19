<template>
    <div>
        <video :src="project.videoMock" autoplay loop muted playsinline></video>
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
        width: 100%
        height: 100%
        max-height: 900px
        text-align: center
        margin: calc($base8 * 2) auto calc($base * 20)
        padding: calc($base * 15)
        background-color: #fff
        border-radius: $borderRadius
        overflow: hidden
        video
            height: auto
            max-height: 700px
            border-radius: calc($borderRadius * 4)
            box-shadow: 0 0 8px #3A3A3A31
            @media (max-width: 500px)
                max-height: 50vh
                border-radius: calc($borderRadius * 2)
            @media (max-width: 1000px) and (min-width: 500px)
                max-height: 60vh
                border-radius: calc($borderRadius * 4)
    #takeTask
        div
            background-color: #d9dbe8
    #bookFlight
        div
            background-color: #CFD6E3FF
</style>
