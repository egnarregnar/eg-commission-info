<script setup lang="ts">
import IconTwitter from "~icons/formkit/twitter";

function toTwitter() {
  window.open("https://twitter.com/egnarregnar", "_blank");
}
</script>

<template>
  <div class="flex justify-center p-8">
    <button @click="toTwitter">
      <IconTwitter style="font-size: 2em; color: gray;" />
    </button>
  </div>
</template>

<style>
</style>
