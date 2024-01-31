<script setup lang="ts">
import CardLayout from "./layouts/CardLayout.vue";
import CommissionTypesPage from "./pages/CommissionTypes.vue";
import IconTwitter from "~icons/formkit/twitter";
import { useCategoryStore } from "./store/category";
import { storeToRefs } from "pinia";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
const { getChoices, resetChoice } = store;
const choices = getChoices();

function toTwitter() {
  window.open("https://twitter.com/egnarregnar", "_blank");
}
</script>

<template>
  <CardLayout headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
    <template #content>
      <div
        v-if='chosenChoice !== ""'
        class="flex-col justify-center p-8"
      >
        <p class="text-center">{{ chosenChoice }}</p>
        <button
          @click="resetChoice"
          class="font-bold"
        >Back</button>
      </div>
      <CommissionTypesPage
        v-else
        :choices
      ></CommissionTypesPage>
    </template>
    <template #footer>
      <div class="flex justify-center p-8">
        <button @click="toTwitter">
          <IconTwitter style="font-size: 2em; color: gray;" />
        </button>
      </div>
    </template>
  </CardLayout>

</template>

<style>
</style>
./store/categories