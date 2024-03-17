<script setup lang="ts">
import { useCategoryStore } from "@/store/category";
import { storeToRefs } from "pinia";
import Markdown from "@/components/Markdown.vue";
import Card from "@/components/Card.vue";
import MasonGallery from "./components/MasonGallery.vue";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
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

    <div
      v-if="(chosenChoice?.pricing_examples?.length || 0) > 0"
      class="grid md:grid-cols-2 gap-8"
    >
      <Card
        v-for="(each, index) in chosenChoice?.pricing_examples"
        :key="index"
        :headerImage="each.image"
      >
        <div class="p-6">
          <Markdown :source="each?.description" />
        </div>
      </Card>
    </div>

    <p
      v-if="(chosenChoice?.gallery_images?.length || 0) > 0"
      class="text-center text-2xl font-bold mb-4 mt-8"
    >Gallery</p>

    <MasonGallery
      v-if="(chosenChoice?.gallery_images?.length || 0) > 0"
      :images="chosenChoice?.gallery_images || []"
    />
  </div>
</template>

<style>
</style>