<script setup lang="ts">
defineProps<{
  data: string[][];
}>();
</script>

<template>
  <table class="table-auto">
    <tr
      v-for="(row, index) in data"
      :key="index"
    >
      <td
        v-for="(item, jndex) in row"
        :key="jndex"
        class="p-4 text-center"
        :class="{ 
                'font-bold': index === 0 || jndex === 0, 
                'bg-purple-300': index === 0 || jndex === 0,
                'bg-purple-100': index !== 0 && jndex !== 0,
                'rounded-tl-xl': index === 0 && jndex === 0,
                'rounded-tr-xl': index === 0 && jndex+1 === data?.[index]?.length,
                'rounded-bl-xl': index+1 === data?.length && jndex === 0,
                'rounded-br-xl': index+1 === data?.length && jndex+1 === data?.[index]?.length
              }"
      >{{ item }}</td>
    </tr>
  </table>
</template>

<style>
</style>
