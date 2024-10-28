<template>
  <header
    class="md:bg-[url('/images/pattern-bg-desktop.webp')] bg-[url('/images/pattern-bg-mobile.webp')] bg-center bg-cover bg-no-repeat md:h-[250px] w-full flex flex-col justify-center items-center gap-5 pt-5 px-4 relative"
  >
    <Title />
    <FormLocation />
    <BannerInformation />
  </header>
</template>
<script lang="ts" setup>
import { Title } from '@components/Text'
import { FormLocation } from '@components/Form'
import { BannerInformation } from '@components/Content'
</script>
