<template>
  <div id="map" class="w-full h-[675px] z-20"></div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { loadMap } from '@utils/load-map'
import { useLocationStore } from '@/store/locationStore'

const locationStore = useLocationStore()

onMounted(async () => {
  loadMap()
  await locationStore.getLocationInformation()
})
</script>
