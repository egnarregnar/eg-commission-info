<script setup lang="ts">
import { useCategoryStore } from "../../store/category";
import { storeToRefs } from "pinia";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
const { resetChoice } = store;
</script>

<template>
  <div class="flex-col justify-center p-8">
    <p class="text-center">{{ chosenChoice.name }}</p>
    <p>{{ chosenChoice.description }}</p>
    <button
      @click="resetChoice"
      class="font-bold"
    >Back</button>
  </div>
</template>

<style>
</style>