<script lang="ts" setup>
import { onMounted } from 'vue'

import { useConfigurationService } from '@/composables/services'

const { departments, getDepartments } = useConfigurationService()

onMounted( async () => {
   await getDepartments()
})

</script>

<template>
   <h1>Casts view</h1>
   <pre>{{ departments }}</pre>
</template>