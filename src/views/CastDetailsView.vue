<script lang="ts" setup>
import { onMounted } from 'vue'

import { useSessionStore } from '@/stores/session'

import { useConfigurationService } from '@/composables/services'

import CastsList from '@/components/base/CastsList.vue'

const sessionStore = useSessionStore()

const { departments, getDepartments } = useConfigurationService()

onMounted( async () => {
   await getDepartments()
})

</script>

<template>
   <h1>Casts view</h1>
   <section class="flex justify-between">
      <article>
         Cast
         <CastsList :list="sessionStore.castsList?.cast" />
      </article>
      <article>
         Crew
         <CastsList :list="sessionStore.castsList?.crew" />
      </article>
   </section>
</template>