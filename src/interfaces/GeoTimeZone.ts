export interface GeoTimeZone {
  latitude: number
  longitude: number
  location: string
  country_iso: string
  iana_timezone: string
  timezone_abbreviation: string
  dst_abbreviation: string
  offset: string
  dst_offset: string
  current_local_datetime: Date
  current_utc_datetime: Date
}
