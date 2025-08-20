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
        max-height: 620px
        @include picImg(100%)
        @include imgDefault(cover)
        object-position: center 50%
        margin: calc($base * 10) 0
    p
        margin: $base 0 $base6
        font-weight: 200

    div
        display: inline-flex
        flex-direction: column
        width: calc(50% - $base4 )
        margin: $base $base4 $base4 0
    @media (max-width: 1000px)
        h3
            line-height: 2
            font-size: $base4
        p
            font-weight: normal
            font-size: $base4
        div
            margin: 0
            width: 100%
        img
            margin: $base2 0

</style>
