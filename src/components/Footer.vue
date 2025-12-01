<script setup lang="ts">
import IconTwitter from "~icons/skill-icons/twitter";
import IconDiscord from "~icons/skill-icons/discord";
import IconEmail from "~icons/formkit/email";
</script>

<template>
  <div class="flex-col pt-6 pb-8">
    <p class="text-center pb-4 px-4">If you are ready to commission me, hit me up on these social media!</p>
    <div class="flex justify-center items-center gap-2">
      <button>
        <a href="mailto:egnarregnar@gmail.com">
          <IconEmail style="font-size: 2em; color: gray;" />
        </a>
      </button>
      <a
        href="https://twitter.com/egnarregnar"
        target="_blank"
      >
        <IconTwitter style="font-size: 2em; color: gray;" />
      </a>
      <a
        href="https://discord.com/invite/Tx4ppWVk"
        target="_blank"
      >
        <IconDiscord style="font-size: 2em; color: gray;" />
      </a>
      <a
        href="https://ko-fi.com/egnarregnar"
        target="_blank"
      >
        <img class="max-h-10" src="../../public/kofi.png" />
      </a>
    </div>
  </div>
</template>

<style>
a[disabled="disabled"] {
  pointer-events: none;
}
</style>
