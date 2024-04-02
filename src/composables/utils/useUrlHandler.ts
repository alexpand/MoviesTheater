const env = { ...import.meta.env }
const api_token = env.VITE_API_TOKEN
const api_url = env.VITE_API_URL
const api_poster_url = env.VITE_API_POSTER_URL

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

  function getPosterUrl(posterPath: string, size?: string | null) {
    return `${api_poster_url}/${size || 'w342'}${posterPath}`
  }

  return {
    headers,
    buildUrl,
    getPosterUrl
  }
}
