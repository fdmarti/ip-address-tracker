import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { GetIPData, setMarker } from '@utils/index'

export const useLocationStore = defineStore('location', () => {
  const ipValue = ref<string>('')
  const flag = ref(true)
  const resultLocation = reactive({
    city: 'Rosemead',
    country: 'US',
    region: 'California',
    timezone: '-07:00',
    isp: '',
    ip: '192.212.174.101',
    lat: 34.08057,
    lng: -118.07285,
  })
  const isLoading = ref(true)

  const getLocationInformation = async () => {
    try {
      if (!flag.value) {
        const data = await GetIPData(ipValue.value)

        if (!data.status) throw 'Error al cargar los datos'

        resultLocation.city = data.data.location.city
        resultLocation.country = data.data.location.country
        resultLocation.region = data.data.location.region
        resultLocation.timezone = data.data.location.timezone
        resultLocation.isp = data.data.isp
        resultLocation.ip = data.data.ip
        resultLocation.lat = data.data.location.lat
        resultLocation.lng = data.data.location.lng
      }

      setMarker({ lat: resultLocation.lat, lng: resultLocation.lng })
    } catch (error) {
      console.log(error)
      return false
    } finally {
      isLoading.value = false
      ipValue.value = ''
      flag.value = false
    }
  }

  return {
    ipValue,
    resultLocation,
    isLoading,

    getLocationInformation,
  }
})
