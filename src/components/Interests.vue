<template>
    <v-card flat class="interest">
        <v-card-title class="title pa-0">
            Interests
        </v-card-title>
        <v-card-text>
            <ul>
                <li v-for="(value, key) in interests" v-bind:key="key">
                    <b class="text-capitalize">{{ key }}</b>: {{ value }}
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>
<style scoped>
    .interest {

    }
</style>
<script>
    export default {
        name: 'Interests',
        props: {
            interests: {}
        }
    }
</script>
