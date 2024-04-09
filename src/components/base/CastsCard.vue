<script lang="ts" setup>
import { useUrlHandler } from '@/composables/utils'

const { getPosterUrl } = useUrlHandler()

import type { Employee } from '@/types/casts'

defineProps<{
  employee: Employee
}>()
</script>

<template>
  <div class="flex items-center">
    <img
      class="w-20 min-w-20 h-20 min-h-20 mr-2 rounded-md shadow-lg"
      :src="getPosterUrl(employee.avatar, 'w138_and_h175_face')"
      :alt="employee.name"
      onerror="this.src='/default_profile.png'"
    />
    <div>
      <p class="text-lg">{{ employee.name }}</p>
      <p>{{ employee.role }}</p>
    </div>
  </div>
</template>
