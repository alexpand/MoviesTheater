<script lang="ts" setup>
import { ref } from 'vue'

const email = ref<string>('')
const password = ref<string>('')

</script>

<template>
    <h1>Login</h1>
    <div class="container mx-auto flex flex-col justify-center bg-white rounded-lg p-4">
        <form class="text-black">
            <label for="email">Email:</label>
            <input 
                class="bg-red" 
                type="text" 
                v-model="email"
            >
            {{ email }}

            <label for="password">Password:</label>
            <input 
                class="bg-red" 
                type="password" 
                v-model="password"
            >
            {{ password }}
        </form>
    </div>
</template>