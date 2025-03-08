<template>
    <div class="project">
        <h3>Project Background</h3>
        <p>{{ projectData?.content?.background }}</p>

        <h3>Problem Statement</h3>
        <p>{{ projectData?.content?.problem }}</p>

        <div class="project-content">
            <h3>Design Process</h3>
            <ul>
                <li v-for="(step, index) in projectData?.content?.designProcess" :key="index">
                    <div>{{ step.title }} :</div>
                    <p v-if="step.description">{{ step.description }}</p>
                    <ol v-if="step.details">
                        <li v-for="(detail, i) in step.details" :key="i">{{ detail }}</li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
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
    display: block
</style>
