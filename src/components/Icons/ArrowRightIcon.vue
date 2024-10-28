<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
    <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
  </svg>
</template>
<script lang="ts" setup>
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 14,
})
</script>
