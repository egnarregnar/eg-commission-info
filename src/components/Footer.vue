<script setup lang="ts">
import IconTwitter from "~icons/skill-icons/twitter";
import IconDiscord from "~icons/skill-icons/discord";
import IconEmail from "~icons/formkit/email";

function openInNewTab(target: string) {
  window.open(target, "_blank");
}
</script>

<template>
  <div class="flex justify-center pt-6 pb-8 gap-2">
    <button>
      <a href="mailto:egnarregnar@gmail.com">
        <IconEmail style="font-size: 2em; color: gray;" />
      </a>
    </button>
    <button @click="openInNewTab('https://twitter.com/egnarregnar')">
      <IconTwitter style="font-size: 2em; color: gray;" />
    </button>
    <button @click="openInNewTab('https://discord.com/invite/Tx4ppWVk')">
      <IconDiscord style="font-size: 2em; color: gray;" />
    </button>
  </div>
</template>

<style>
</style>
