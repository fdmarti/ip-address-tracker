import type { GeoAPI } from '@/interfaces/GeoApiResponse'

interface SuccessFetch {
  data: GeoAPI
  status: true
}

interface ErrorFetch {
  status: false
  error: unknown
}

export const GetIPData = async (
  ipValue: string,
): Promise<SuccessFetch | ErrorFetch> => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_GEOLOCATION_URL}country,city?apiKey=${import.meta.env.VITE_GEOLOCATION_APIKEY}&ipAddress=${ipValue}`,
    )

    const data = await result.json()

    return {
      data,
      status: true,
    }
  } catch (error) {
    return {
      error,
      status: false,
    }
  }
}
