<script setup lang="ts">
defineProps<{
  headerImage: string;
}>();
</script>

<template>
  <div class="flex justify-center ">
    <div class="flex-col bg-white rounded-xl sm:m-8 m-4">
      <div class="flex">
        <img
          class="rounded-t-xl h-72 object-cover grow"
          :src="headerImage"
        />
      </div>
      <div>
        <slot name="content"></slot>
      </div>
      <hr class="sm:mx-24 mx-8" />
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style>
</style>
