<script setup lang="ts">
import Markdown from "@/components/Markdown.vue";
import TermsAndConditions from "@data/terms-conds.json";
</script>

<template>
  <div class="flex-col justify-center items-center px-16">
    <p style="font-style: italic; font-size: 0.8em; text-align: end;">Version: {{ TermsAndConditions.version }} Last Update: {{ TermsAndConditions.last_update }}</p>
    <Markdown :source="TermsAndConditions.terms" />
    <div class="grid sm:grid-cols-2 mb-4">
      <div class="flex-col">
        <h1 class="text-center">What I will draw</h1>
        <ul class="mx-6">
          <li
            :key="index"
            v-for="(item, index) in TermsAndConditions.will_draw"
          >
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
      <div class="flex-col">
        <h1 class="text-center">What I will NOT draw</h1>
        <ul class="mx-6">
          <li
            style="padding-left: 0;"
            :key="index"
            v-for="(item, index) in TermsAndConditions.will_not_draw"
          >
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
    <p>If you are unsure, just ask! I am on Twitter and Discord, or you can even email me (But I don't check it often, sorry).</p>
    <h1 class="text-center">Pricing</h1>
    <p class="text-center pb-4">What type of commission would you like?</p>
  </div>
</template>

<style>
</style>