<script setup lang="ts">
defineProps<{
  images: string[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <div
      v-for="n in 3"
      class="grid gap-2"
      :key="n"
    >
      <img
        :key="i"
        v-for="i in Math.ceil((images.length || 0) / 3)"
        :src="images[n-1+3*(i-1)]"
      />
    </div>
  </div>
</template>

<style>
</style>
