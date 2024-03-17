<script setup lang="ts">
import { useCategoryStore } from "@/store/category";
import { storeToRefs } from "pinia";
import Markdown from "@/components/Markdown.vue";
import MasonGallery from "./components/MasonGallery.vue";
import MasonImageWithText from "./components/MasonImageWithText.vue";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
const { resetChoice } = store;
</script>

<template>
  <div class="flex-col justify-center py-8 px-8 sm:px-16">
    <p class="text-center text-2xl font-bold mb-4">{{ chosenChoice?.name }}</p>

    <div class="flex justify-center items-center mb-4">
      <Markdown :source="chosenChoice?.description" />
    </div>

    <p
      v-if="(chosenChoice?.pricing_examples?.length || 0) > 0"
      class="text-center text-2xl font-bold mb-4 mt-8"
    >Pricing Examples</p>

    <MasonImageWithText
      v-if="(chosenChoice?.pricing_examples?.length || 0) > 0"
      :items="chosenChoice?.pricing_examples || []"
    />

    <p
      v-if="(chosenChoice?.gallery_images?.length || 0) > 0"
      class="text-center text-2xl font-bold mb-4 mt-8"
    >Gallery</p>

    <MasonGallery
      v-if="(chosenChoice?.gallery_images?.length || 0) > 0"
      :images="chosenChoice?.gallery_images || []"
    />

    <div class="flex justify-center mt-8">
      <button
        @click="resetChoice"
        class="font-bold"
      >{{ '< Back >' }}</button>
    </div>
  </div>
</template>

<style>
</style>