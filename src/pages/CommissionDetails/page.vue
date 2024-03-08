<script setup lang="ts">
import { useCategoryStore } from "@/store/category";
import { storeToRefs } from "pinia";
import Markdown from "@/components/Markdown.vue";
import CommissionPriceTable from "@/components/CommissionPriceTable.vue";

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

    <br />

    <div class="flex justify-center">
      <CommissionPriceTable
        v-if="chosenChoice?.has_table"
        :data="chosenChoice.table_data || []"
      />
    </div>

    <button
      @click="resetChoice"
      class="font-bold"
    >Back</button>
  </div>
</template>

<style>
</style>