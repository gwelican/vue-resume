<template>
    <div>
        <div v-for="team in job.teams" v-bind:key="team.name" class="team">
            <div v-if="job.teams.length > 1"><b>Project:</b> {{ team.name }}</div>
            <div v-if="team.summary">{{ team.summary}}</div>
            <Responsibility :team="team" v-if="team.responsibilities"/>
            <div v-if="team.skills" class="skills"><b>Skills:</b> {{ team.skills}}</div>
        </div>
    </div>
</template>
<style scoped>
    .team {
        padding-top: 0.5em;
    }

    .skills {
        padding-bottom: 0.5em;
    }
</style>
<script>
    import Responsibility from "./ProjectResponsibility"

    export default {
        name: 'ProjectSummary',
        components: {Responsibility},
        props: {
            job: {}
        }
    }
</script>