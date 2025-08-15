<template>
    <ul>
        <li v-for="(step, index) in projectData?.content?.designProcess" :key="index">
            <h3>{{ step.title }}</h3>
            <p v-if="step.description">{{ step.description }}</p>
            <p v-if="step.details">{{ step.details }}</p>

        </li>
    </ul>
</template>

<script>
import projects from "@/data/projects.js";

export default {
    props: ["projectId"],
    computed: {
        projectData() {
            return projects.find((project) => project.id === this.projectId) || null;
        },
    },
};
</script>
<style lang="sass" scoped>
    @use '@/assets/styles/_mixins.sass' as *
    @use '@/assets/styles/_variables.sass' as *

    ul
        margin: $base6 0
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        gap: $base8
        p
            font-weight: 200
            margin: $base 0

        li
            width: 45%
            display: inline-block
            vertical-align: top
        @media (max-width: 500px)
            flex-direction: column
            li
                width: 100%
</style>
