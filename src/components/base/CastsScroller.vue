<script lang="ts" setup>
import type { Cast } from '@/types/casts'

import { useUrlHandler } from '@/composables/utils'

const { getPosterUrl } = useUrlHandler()

defineProps<{
  casts: Array<Cast> | undefined
}>()
</script>

<template>
  <article class="flex overflow-x-scroll gap-5 pb-4">
    <div v-if="!casts">Loading</div>
    <div
      class="movie-item flex items-center flex-col rounded-lg bg-red-800 cursor-pointer hover:bg-red-100 hover:text-black hover:contrast-50 w-40 min-w-40"
      v-for="cast in casts"
      :key="`cast-${cast.id}`"
    >
      <router-link :to="`/person/${cast.id}`" class="w-full">
        <img
          class="w-full rounded-t-lg h-48"
          :src="getPosterUrl(cast.profile_path, 'w138_and_h175_face')"
          :alt="cast.name"
          onerror="this.src='/default_profile.png'"
        />
        <div class="p-2">
          <p class="text-sm text-clip text-ellipsis">{{ cast.name }}</p>
          <p class="text-xs text-clip text-ellipsis truncate">{{ cast.character }}</p>
        </div>
      </router-link>
    </div>
  </article>
</template>
