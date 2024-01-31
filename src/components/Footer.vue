<script setup lang="ts">
import IconTwitter from "~icons/formkit/twitter";

function openInNewTab(target: string) {
  window.open(target, "_blank");
}
</script>

<template>
  <div class="flex justify-center p-8">
    <button @click="openInNewTab('https://twitter.com/egnarregnar')">
      <IconTwitter style="font-size: 2em; color: gray;" />
    </button>
  </div>
</template>

<style>
</style>
