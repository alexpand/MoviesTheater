<script lang="ts" setup>
import type { Employee } from '@/types/casts'

import CastsCard from '@/components/base/CastsCard.vue'

defineProps<{
  list?: [Employee]
}>()

</script>

<template>
  <div class="flex flex-col gap-3">
    <CastsCard 
      v-for="employee in list" 
      :key="employee.name"
      :employee="employee"
    />
  </div>
</template>