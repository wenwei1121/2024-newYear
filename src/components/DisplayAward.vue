<script setup lang="ts">
import CommonTable from './CommonTable.vue';
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";

const { currentPrize } = storeToRefs(useCurrentInfo());

const tableFields = ["prize", "amount"];

// total 9600
const prizeList = [
  { id: 1, prize: 2000, amount: 1 },
  { id: 2, prize: 1200, amount: 1 },
  { id: 3, prize: 1000, amount: 1 },
  { id: 4, prize: 800, amount: 3 },
  { id: 5, prize: 600, amount: 3 },
  { id: 6, prize: 200, amount: 6 },
];

onMounted(() => {
  currentPrize.value = { prize: 200 };
})
</script>

<template>
    <common-table
      :fields="tableFields"
      :data-list="prizeList"
    >
      <template #default="{ data }">
        <td class="text-2xl">{{ data.prize }}</td>
        <td class="text-2xl">{{ data.amount }}</td>
      </template>
    </common-table>
</template>

<style>
</style>