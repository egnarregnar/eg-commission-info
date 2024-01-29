<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div class="flex-col">
    <p>{{ count }}</p>
    <button @click="count++">Add</button>
  </div>
</template>

<style>
</style>
