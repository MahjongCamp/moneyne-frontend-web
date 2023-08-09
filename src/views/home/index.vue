<script lang="ts" setup>
import { useCounterStore } from '@/stores/counters'
const counter = useCounterStore()
</script>

<template>
  <Navbar />
</template>

<style lang="scss" scoped>
div {
  background-color: var(--main-color);
  box-shadow: 0 0 0 1px red;

  span {
    color: #0f0;
  }
}
</style>
