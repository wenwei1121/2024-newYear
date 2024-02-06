<script setup lang="ts">
import CommonTable from './CommonTable.vue';

const tableFields = ["prize", "amount"];

// total 10000
const prizeList = [
  { id: 1, prize: 2000, amount: 1 },
  { id: 2, prize: 1200, amount: 1 },
  { id: 3, prize: 1000, amount: 1 },
  { id: 4, prize: 800, amount: 3 },
  { id: 5, prize: 600, amount: 4 },
  { id: 6, prize: 200, amount: 5 },
];
</script>

<template>
    <common-table
      :fields="tableFields"
      :data-list="prizeList"
    >
      <template #default="{ data }">
        <td>{{ data.prize }}</td>
        <td>{{ data.amount }}</td>
      </template>
    </common-table>
</template>

<style>
</style>