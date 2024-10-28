<template>
  <section class="flex flex-col gap-1">
    <span class="text-xs uppercase text-slate-500 font-semibold">
      {{ title }}
    </span>
    <p class="font-bold text-2xl">{{ value ? value : '-' }}</p>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  title: string
  value?: string
}

defineProps<Props>()
</script>
