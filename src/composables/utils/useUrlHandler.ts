const env = { ...import.meta.env }
const api_token = env.VITE_API_TOKEN
const api_url = env.VITE_API_URL

export default function useUrlHandler() {
    const headers = {
        headers: { 
            Authorization: `Bearer ${api_token}`, 
            accept: 'application/json'
        }
    }

    function buildUrl(domain: string, prefix = '') {
        return api_url + prefix + domain
    }

    return {
        headers,
        buildUrl
    }
}

