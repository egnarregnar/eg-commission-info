<script setup lang="ts">
import CardLayout from "./layouts/CardLayout.vue";
import ChooseCommissionPage from "./pages/ChooseCommission/page.vue";
import CommissionDetailsPage from "./pages/CommissionDetails/page.vue";
import Footer from "./components/Footer.vue";

import { useCategoryStore } from "./store/category";
import { storeToRefs } from "pinia";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
</script>

<template>
  <CardLayout headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
    <template #content>
      <CommissionDetailsPage v-if="chosenChoice !== null"></CommissionDetailsPage>
      <ChooseCommissionPage v-else></ChooseCommissionPage>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </CardLayout>

</template>

<style>
</style>
./store/categories