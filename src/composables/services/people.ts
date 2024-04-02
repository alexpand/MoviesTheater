import { ref } from 'vue'
import type { PeopleService, apiPersonType } from '@/types/casts'
import { useUrlHandler } from '@/composables/utils'

export default function usePeopleService(): PeopleService {
  const { headers, buildUrl } = useUrlHandler()
  const person = ref<apiPersonType>()

  async function getPerson(id: string): Promise<void> {
    const response = await fetch(buildUrl(`/person/${id}`) + '?append_to_response=credits', headers)
    person.value = await response.json()
  }

  return {
    person,
    getPerson
  }
}
