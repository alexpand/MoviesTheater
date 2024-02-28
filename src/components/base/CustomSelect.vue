<script setup lang="ts">
import { useSessionStore } from '@/stores/session'
defineProps< { 
    options: Array <any>
    label: string
}>()

const { setGenre } = useSessionStore()

function updateOption(evt) {
    console.log(`${evt.target.value}`, 'evento')
    setGenre(`${evt.target.value}`)
}

</script>
<template>
    <label for="selector">{{ label }}</label>
    <select 
        class="text-black"
        id="selector"
        @change="updateOption"
    >
        <option 
            v-for="option in options" 
            :key="option.id"
            :value="option.id"
        >
            {{ option.name }}
        </option>
    </select>
</template>