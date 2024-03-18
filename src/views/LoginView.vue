<script lang="ts" setup>
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router'

import { Form, Field, ErrorMessage } from 'vee-validate'
import { string, object } from 'yup'

const userSchema = object({
  email: string().email().required(),
  password: string().min(5).required(),
})

const router = useRouter()

const { login } = useSessionStore()

function onSubmit() {
    login()
    router.push('/')
}

</script>

<template>
    <h1>Login</h1>
    <div class="container mx-auto flex flex-col justify-center bg-white rounded-lg p-4">
        <Form  
            class="text-black"
            @submit="onSubmit"
            :validation-schema="userSchema"
        >
            <label for="email">Email:</label>
            <Field
                class="bg-red"
                type="email"
                name="email"
            />
            <ErrorMessage name="email" />

            <label for="password">Password:</label>
            <Field 
                class="bg-red" 
                type="password"
                name="password"
            />
            <ErrorMessage name="password" />

            <button>botón</button>
        </Form>
    </div>
</template>