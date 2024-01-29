<script setup lang="ts">
defineProps<{
  headerImage: string;
}>();
</script>

<template>
  <div class="flex-col bg-white rounded-xl m-8">
    <div class="flex">
      <img
        class="rounded-t-xl h-72 object-cover grow"
        :src="headerImage"
      />
    </div>
    <div class="p-8">
      <slot name="content"></slot>
    </div>
    <hr class="sm:mx-24 mx-8" />
    <div class="p-8">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style>
</style>
