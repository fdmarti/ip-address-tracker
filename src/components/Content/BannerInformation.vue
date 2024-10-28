<template>
  <div
    class="p-7 bg-slate-50 relative top-12 w-full max-w-4xl shadow rounded-2xl z-50 flex justify-center px-5"
  >
    <Spinner v-if="locationStore.isLoading" />
    <div
      v-else
      class="flex justify-around gap-5 w-full md:flex-row flex-col md:text-left text-center"
    >
      <SectionInformation
        title="Ip addres"
        :value="locationStore.resultLocation.ip"
      />
      <SectionInformation
        title="Location"
        :value="`${locationStore.resultLocation.city}, ${locationStore.resultLocation.country}`"
      />
      <SectionInformation
        title="Timezone"
        :value="locationStore.resultLocation.timezone"
      />
      <SectionInformation
        title="isp"
        :value="locationStore.resultLocation.isp"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLocationStore } from '@/store/locationStore'
import { Spinner } from '@components/Loading'
import { SectionInformation } from '@components/Content'

const locationStore = useLocationStore()
</script>
