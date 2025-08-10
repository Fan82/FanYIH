<template>
    <div>
        <h3>Design Process</h3>
        <ul>
            <li v-for="(step, index) in projectData?.content?.designProcess" :key="index">
                <div>{{ step.title }} :</div>
                <p v-if="step.description">{{ step.description }}</p>
                <ol v-if="step.details">
                    <li v-for="(detail, i) in step.details" :key="i">
                        <p>{{ detail }}</p>
                    </li>
                </ol>
            </li>
        </ul>
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

  p
    margin: calc( $base * 1 ) 0 calc( $base * 6 )
    font-weight: 200
  ul
    display: block
    margin-top: calc($base * 4)


</style>
