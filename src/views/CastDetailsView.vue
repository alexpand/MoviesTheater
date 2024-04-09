<script lang="ts" setup>
import type { Employee } from '@/types/casts'

import { useSessionStore } from '@/stores/session'

import { useConfigurationService } from '@/composables/services'

import CastsList from '@/components/base/CastsList.vue'

const sessionStore = useSessionStore()

const { departments, getDepartments } = useConfigurationService()

getDepartments()

function crewByDept(dept: string) {
  return sessionStore.castsList?.crew.filter((worker) => {
    if (worker.department === dept) {
      return worker
    }
  }) as [Employee]
}
</script>

<template>
  <section v-if="departments" class="flex justify-between flex-col sm:flex-row gap-12">
    <article>
      <h1 class="text-2xl font-bold mb-4">Cast</h1>
      <CastsList :list="sessionStore.castsList?.cast" />
    </article>
    <article>
      <h1 class="text-2xl font-bold mb-4">Crew</h1>
      <template v-for="department in departments" :key="department">
        <div v-if="crewByDept(department).length" class="mb-4">
          <h2 class="mt-8 mb-4 text-xl">{{ department }}</h2>
          <CastsList :list="crewByDept(department)" />
        </div>
      </template>
    </article>
  </section>
</template>
