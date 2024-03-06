<script setup lang="ts">
import { useRoute } from 'vue-router'

const id = useRoute().params.id

</script>

<template>
    <section>
        <h1>Movie Detail</h1>
        <h2>{{ id }}</h2>
    </section>
</template>