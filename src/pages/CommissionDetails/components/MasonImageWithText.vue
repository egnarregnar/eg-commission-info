<script setup lang="ts">
import ImageTextOverlay from "@/components/ImageTextOverlay.vue";

defineProps<{
  items: {
    image: string;
    description: string;
  }[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div
      v-for="n in 2"
      class="grid gap-2"
      :key="n"
    >
      <ImageTextOverlay
        :key="i"
        v-for="i in Math.ceil((items.length || 0) / 2)"
        :image="items[n-1+2*(i-1)].image"
        :description="items[n-1+2*(i-1)].description"
      />
    </div>
  </div>
</template>

<style>
</style>
