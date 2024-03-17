<script setup lang="ts">
import Card from "@/components/Card.vue";
import { useCategoryStore } from "@/store/category";

const store = useCategoryStore();
const { getChoices, choose } = store;
const choices = getChoices();
</script>

<template>
  <div class="px-16 flex flex-wrap justify-center gap-4">
    <Card
      v-for="choice in choices"
      @click="choose(choice)"
      :key="choice.id"
      :headerImage="choice.thumbnail_image"
      :cardClasses="'w-64'"
    >
      <div class="flex p-6 justify-center">
        <p>{{ choice.name }}</p>
      </div>
    </Card>
  </div>
</template>

<style>
</style>