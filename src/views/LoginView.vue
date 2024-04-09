<script lang="ts" setup>
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router'

import { Form, Field, ErrorMessage } from 'vee-validate'
import { string, object } from 'yup'

const userSchema = object({
  email: string().email().required(),
  password: string().min(5).required()
})

const router = useRouter()

const { login } = useSessionStore()

function onSubmit() {
  login()
  router.push('/')
}
</script>

<template>
  <div class="container mx-auto mt-20%">
    <Form
      class="text-black text-lg flex flex-col justify-center bg-red-800 rounded-lg p-4 gap-2 w-72 mx-auto"
      @submit="onSubmit"
      :validation-schema="userSchema"
    >
      <label for="email" class="text-white">Email:</label>
      <Field class="bg-gray-800 rounded-md px-2 pb-1 text-white" type="email" name="email" />
      <ErrorMessage name="email" />

      <label for="password" class="text-white">Password:</label>
      <Field class="bg-gray-800 rounded-md px-2 pb-1" type="password" name="password" />
      <ErrorMessage name="password" />

      <button class="rounded-lg bg-gray-800 w-24 mx-auto px-2 py-1 text-white font-semibold">Login</button>
    </Form>
  </div>
</template>
