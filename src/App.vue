<script  lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      console.log("test");
      this.isExpanded = !this.isExpanded;
    },
  },
});
</script>

<template>
  <div>
    <p
      class="text-3xl font-bold underline"
      v-show="isExpanded"
    >Lorem Ipsum</p>
    <button @click="toggleExpand">Toggle</button>
  </div>
</template>

<style>
</style>
