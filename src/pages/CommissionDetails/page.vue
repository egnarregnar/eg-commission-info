<script setup lang="ts">
import { useCategoryStore } from "@/store/category";
import { storeToRefs } from "pinia";
import Markdown from "@/components/Markdown.vue";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
const { resetChoice } = store;
</script>

<template>
  <div class="flex-col justify-center py-8 px-16">
    <button
      @click="resetChoice"
      class="font-bold"
    >Back</button>
    <p class="text-center text-2xl font-bold">{{ chosenChoice?.name }}</p>
    <div class="flex justify-center items-center">
      <img
        class="w-16 border"
        src="@assets/images/pog.png"
      />
      <Markdown :source="chosenChoice?.description" />
    </div>

    <button
      @click="resetChoice"
      class="font-bold"
    >Back</button>
  </div>
</template>

<style>
</style>