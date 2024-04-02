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
  <h1>Login</h1>
  <div class="container mx-auto">
    <Form
      class="text-black text-lg flex flex-col justify-center bg-white rounded-lg p-4 gap-2 w-48 mx-auto"
      @submit="onSubmit"
      :validation-schema="userSchema"
    >
      <label for="email">Email:</label>
      <Field class="bg-stone-100 rounded-md px-2 pb-1" type="email" name="email" />
      <ErrorMessage name="email" />

      <label for="password">Password:</label>
      <Field class="bg-stone-100 rounded-md px-2 pb-1" type="password" name="password" />
      <ErrorMessage name="password" />

      <button class="rounded-lg bg-stone-300 w-24 mx-auto px-2 py-1">Login</button>
    </Form>
  </div>
</template>
