import { ref } from 'vue'
import type { ConfigurationService } from '@/types/globals'
import type { Job } from '@/types/casts'
import { useUrlHandler } from '@/composables/utils'

export default function useConfigurationService(): ConfigurationService {
    const { headers, buildUrl } = useUrlHandler()
    const departments = ref<[string]>()

    async function getDepartments(): Promise<void> {
        const response = await fetch(buildUrl('/configuration/jobs'), headers )
        departments.value = (await response.json()).map( (department: Job) => (
            department.department
        ))
    }

    return { 
        departments,
        getDepartments,
    }
}