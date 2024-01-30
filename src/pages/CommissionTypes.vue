<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<template>
  <div class="flex-col py-8">
    <div class="flex justify-center px-8 pb-8">
      <p>Thank you for your interest! What kind of commission would you like to request?</p>
    </div>
    <div class="px-16 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
      <Card headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
        <div class="flex p-8 justify-center">
          <p>Normal Art</p>
        </div>
      </Card>
      <Card headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
        <div class="flex p-8 justify-center">
          <p>Manga</p>
        </div>
      </Card>
      <Card headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png">
        <div class="flex p-8 justify-center">
          <p>Discord Emotes</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<style>
</style>
