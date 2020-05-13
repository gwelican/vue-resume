<template>
    <v-container>
        <v-row class="headline" no-gutters>Work experience</v-row>
        <v-divider/>
        <v-row v-for="job in jobs" v-bind:key="job.start" class="header" dense no-gutters>
            <v-col>
                <div class="role">{{job.title}}</div>
                <div class="company">{{job.company}}</div>
            </v-col>
            <v-col class="text-end pa-2" style="display: flex; flex-direction: row-reverse; align-items: center; ">
                {{ job.start }} - {{ job.end }}
            </v-col>
            <v-card min-width="100%" flat>
                <v-card-text style="padding:0">
                    <v-row dense no-gutters>
                        <v-col>
                            <ProjectSummary :job="job"/>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<style scoped>

    @media print {
        div.header {
            page-break-inside: avoid;
            page-break-before: auto;
            page-break-after: auto;
        }
    }

    .header {
        background-color: aliceblue
    }

    .role {
        color: #233B64;
        font-size: large;
        font-weight: bold;
        page-break-before: always;
    }

    .company {
        font-style: italic;
    }
</style>

<script>
    import ProjectSummary from "./ProjectSummary";

    export default {
        name: 'WorkHistory',
        components: {ProjectSummary},
        props: {
            jobs: {}
        }
    }
</script>
