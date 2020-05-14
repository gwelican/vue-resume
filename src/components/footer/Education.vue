<template>
    <v-card flat>
        <v-card-title class="title pa-0">
            Education
        </v-card-title>
        <v-card-text>
            <ul>
                <li v-for="education in educations" v-bind:key="education">
                    {{ education }}
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        name: 'Education',
        props: {
            educations: {}
        }
    }
</script>
