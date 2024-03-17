<script setup lang="ts">
import Markdown from "@/components/Markdown.vue";
import { ref } from "vue";

defineProps<{
  image: string;
  description: string;
}>();

const hover = ref(false);
const holdClick = ref(false);
</script>

<template>
  <div
    class="relative flex min-h-96"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @touchstart="holdClick = true"
    @touchend="holdClick = false"
  >
    <img
      class="rounded-xl transition-transform object-cover"
      :class="(hover || holdClick) ? 'object-scale-down ' : 'object-cover'"
      :src="image"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-xl"></div>
    <div class="absolute inset-0 flex justify-beginning items-end p-8">
      <Markdown
        class="text-white"
        :source="description"
      />
    </div>
  </div>
</template>

<style>
</style>
