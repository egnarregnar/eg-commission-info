<script setup lang="ts">
defineProps<{
  headerImage: string;
  cardStyle?: any;
  cardClasses?: any;
  imageClasses?: any;
}>();
</script>

<template>
  <div
    class="flex-col bg-white shadow-md rounded-xl"
    :class="cardClasses"
    :style="cardStyle"
  >
    <div class="flex">
      <img
        class="rounded-t-xl object-cover grow"
        :src="headerImage"
        :class="imageClasses"
      />
    </div>
    <slot></slot>
  </div>
</template>

<style>
</style>
