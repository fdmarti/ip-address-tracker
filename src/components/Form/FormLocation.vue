<template>
  <form @submit.prevent="onSubmitSearchDataIP" class="max-w-lg w-full relative">
    <label for="input-search">
      <input
        type="text"
        placeholder="Search for any IP addres or domain"
        id="input-search"
        class="p-3 w-full rounded-lg outline-none text-base"
        v-model="locationStore.ipValue"
      />
      <button
        class="absolute top-0 right-0 bg-slate-900 h-full px-4 flex items-center rounded-r-lg hover:cursor-pointer hover:opacity-80"
        type="submit"
      >
        <ArrowRight />
      </button>
    </label>
  </form>
</template>
<script lang="ts" setup>
import { ArrowRight } from '@components/Icons'
import { useLocationStore } from '@/store/locationStore'
import { RegularExpresionIP } from '@/consts/ip-regular-exp'

const locationStore = useLocationStore()

const onSubmitSearchDataIP = () => {
  if (!locationStore.ipValue) return false
  if (!locationStore.ipValue.match(RegularExpresionIP)) return false

  locationStore.getLocationInformation()
}
</script>
