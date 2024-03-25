<script lang="ts" setup>
import type { Employee } from '@/types/casts'

import { useSessionStore } from '@/stores/session'

import { useConfigurationService } from '@/composables/services'

import CastsList from '@/components/base/CastsList.vue'

const sessionStore = useSessionStore()

const { departments, getDepartments } = useConfigurationService()

getDepartments()

function crewByDept(dept: string) {
   return sessionStore.castsList?.crew.filter( worker => {
      if(worker.department === dept) {
         return worker
      }
   }) as [Employee]
}

</script>

<template>
   <h1>Casts view</h1>
   <section v-if="departments" class="flex justify-between">
      <article>
         Cast
         <CastsList :list="sessionStore.castsList?.cast" />
      </article>
      <article>
         Crew
         <template v-for="department in departments" :key="department">   
            <div v-if="crewByDept(department).length" class="mb-4">
               <h3 class="mb-2">{{ department }}</h3>
               <CastsList :list="crewByDept(department)" />
            </div>
         </template>
      </article>
   </section>
</template>