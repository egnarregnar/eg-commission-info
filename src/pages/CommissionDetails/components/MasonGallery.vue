<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  images: string[];
}>();

const highlightedImage = ref("");
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
        @click="highlightedImage = images[n-1+3*(i-1)]"
      />
    </div>
  </div>
  <div
    v-if="highlightedImage !== ''"
    @click="highlightedImage = ''"
    class="fixed flex justify-center items-center inset-0 bg-gray-900 bg-opacity-75 w-full h-full"
  >
    <img
      :src="highlightedImage"
      class="sm:w-1/2"
    />
  </div>
</template>

<style>
</style>
