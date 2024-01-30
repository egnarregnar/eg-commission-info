<script setup lang="ts">
import Card from "../components/Card.vue";

defineProps<{
  choices: { key: string; name: string; image: string };
}>();
</script>

<template>
  <div class="flex-col py-8">
    <div class="flex justify-center px-8 pb-8">
      <p>Thank you for your interest! What kind of commission would you like to request?</p>
    </div>
    <div class="px-16 flex flex-wrap justify-center gap-4">
      <Card
        v-for="choice in choices"
        :key="choice.key"
        :headerImage="choice.image"
      >
        <div class="flex p-8 justify-center">
          <p>{{ choice.name }}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<style>
</style>
