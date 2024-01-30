<script setup lang="ts">
import CardLayout from "./layouts/CardLayout.vue";
import CommissionTypesPage from "./pages/CommissionTypes.vue";
import IconTwitter from "~icons/formkit/twitter";

function toTwitter() {
  window.open("https://twitter.com/egnarregnar", "_blank");
}

const stuff = [
  {
    key: "1",
    name: "Normal Art",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png",
  },
  {
    key: "2",
    name: "Manga",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png",
  },
  {
    key: "3",
    name: "Discord Emotes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png",
  },
];
</script>

<template>
  <CardLayout headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
    <template #content>
      <CommissionTypesPage :choices="stuff"></CommissionTypesPage>
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
