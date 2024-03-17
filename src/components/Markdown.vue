<template>
  <div v-html="markdown.render(source)" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import HeaderSections from "markdown-it-header-sections";

const markdown = new MarkdownIt("commonmark");
markdown.use(HeaderSections);

defineProps({
  source: {
    type: String,
    default: "",
  },
});
</script>