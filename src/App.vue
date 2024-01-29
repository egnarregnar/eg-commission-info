<script setup lang="ts">
import CardLayout from "./layouts/CardLayout.vue";
import CountPage from "./pages/Count.vue";
import IconTwitter from "~icons/formkit/twitter";

function toTwitter() {
  window.open("https://twitter.com/egnarregnar", "_blank");
}
</script>

<template>
  <CardLayout headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
    <template #content>
      <CountPage></CountPage>
    </template>
    <template #footer>
      <div class="flex justify-center">
        <button @click="toTwitter">
          <IconTwitter style="font-size: 2em; color: gray;" />
        </button>
      </div>
    </template>
  </CardLayout>
</template>

<style>
</style>
