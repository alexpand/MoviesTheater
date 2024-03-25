<script lang="ts" setup>
import type { Cast } from '@/types/casts'

import { useUrlHandler } from '@/composables/utils'

const { getPosterUrl } = useUrlHandler()

defineProps<{
  casts: Array<Cast> | undefined
}>()
</script>

<template>
  <article class="flex overflow-x-scroll">
    <div v-if="!casts">Loading</div>
    <div
      class="movie-item rounded-xl border-2 flex items-center flex-col cursor-pointer w-40 min-w-40"
      v-for="cast in casts"
      :key="`cast-${cast.id}`"
    >
      <router-link :to="`/person/${cast.id}`" class="w-full">
        <img
          class="w-full rounded-xl defaultImg"
          :src="getPosterUrl(cast.profile_path, 'w138_and_h175_face')"
          :alt="cast.name"
          onerror="this.src='/default_profile.png'"
        />
        <hr />
        <p class="text-sm text-center text-clip text-ellipsis">{{ cast.name }}</p>
        <p class="text-xs text-center text-clip text-ellipsis truncate">{{ cast.character }}</p>
      </router-link>
    </div>
  </article>
</template>

<style>
.defaultImg {
  width: 156px;
  height: 197.82px;
}
</style>
