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
@import url("https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
</style>
./store/categories