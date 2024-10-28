import type { GeoTimeZone } from '@/interfaces/GeoTimeZone'

interface SuccessTimeZone {
  data: GeoTimeZone
  status: true
}

interface ErrorTimeZone {
  error: unknown
  status: false
}

export const GetTimeZones = async (
  lat: number,
  lng: number,
): Promise<SuccessTimeZone | ErrorTimeZone> => {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = `${import.meta.env.VITE_GEOTIMEZONE_URL}latitude=${lat}&longitude=${lng}`

    const result = await fetch(proxyUrl + apiUrl)

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
