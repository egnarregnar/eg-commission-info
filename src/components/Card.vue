<script setup lang="ts">
defineProps<{
  headerImage: string;
}>();
</script>

<template>
  <div class="flex-col bg-white shadow-md rounded-xl w-64">
    <div class="flex">
      <img
        class="rounded-t-xl h-36 object-cover grow"
        :src="headerImage"
      />
    </div>
    <slot></slot>
  </div>
</template>

<style>
</style>
