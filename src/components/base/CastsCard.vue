<script lang="ts" setup>
import { useUrlHandler } from '@/composables/utils'

const { getPosterUrl } = useUrlHandler()

import type { Employee } from '@/types/casts'

defineProps<{
  employee: Employee
}>()
</script>

<template>
  <div class="flex">
    <img
      class="w-12 h-12 mr-2"
      :src="getPosterUrl(employee.avatar, 'w138_and_h175_face')"
      :alt="employee.name"
      onerror="this.src='/default_profile.png'"
    />
    <div>
      <p>{{ employee.name }}</p>
      <p>{{ employee.role }}</p>
    </div>
  </div>
</template>
