<script setup lang="ts">
const emit = defineEmits(['onToggleOption'])

const props = defineProps< { 
    options: Array <any>
    selectedOptions: Array <string>
}>()

function toggleOption(id: string) {
    emit('onToggleOption', id)
}

function isSelected(id: string) {
    return props.selectedOptions.includes(id)
}

</script>
<template>
    <ul class="flex justify-center flex-wrap">
        <li 
            v-for="option in options" 
            :key="option.id"
            @click="toggleOption(option.id)"
            class="text-center mx-4 my-1 px-6 py-2 rounded-md cursor-pointer hover:bg-red-200 hover:text-black"
            :class="isSelected(option.id) ? 'bg-blue-500' : 'bg-red-800'"
        >
            {{ option.name }}
        </li>
    </ul>
</template>