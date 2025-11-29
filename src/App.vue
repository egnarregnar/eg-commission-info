<script setup lang="ts">
import CardLayout from "@/layouts/CardLayout.vue";
import ChooseCommissionPage from "@/pages/ChooseCommission/page.vue";
import CommissionDetailsPage from "@/pages/CommissionDetails/page.vue";
import Footer from "@/components/Footer.vue";

import { useCategoryStore } from "@/store/category";
import { storeToRefs } from "pinia";

const store = useCategoryStore();
const { chosenChoice } = storeToRefs(store);
</script>

<template>
  <CardLayout headerImage="banner.png">
    <template #content>
      <CommissionDetailsPage v-if="chosenChoice !== null"></CommissionDetailsPage>
      <ChooseCommissionPage v-else></ChooseCommissionPage>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </CardLayout>

</template>

./store/categories