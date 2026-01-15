const API_BASE_URL = import.meta.env.PUBLIC_SERVER_URL || 'http://localhost:3000'

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
  cookie?: string
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options?.headers as Record<string, string>,
  }

  // Add cookie header for server-side requests
  if (cookie) {
    headers['Cookie'] = cookie
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(error.error || `HTTP ${response.status}`)
  }

  return response.json()
}

export function getImageUrl(path: string | null | undefined): string | null {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${API_BASE_URL}/api/files/${path}`
}

export { API_BASE_URL }
