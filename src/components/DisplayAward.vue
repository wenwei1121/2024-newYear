<script setup lang="ts">
import CommonTable from './CommonTable.vue';
import { useCurrentInfoStore } from "../store/useCurrentInfoStore";

const currentInfoStore = useCurrentInfoStore();

const currentPrizeIndicatorStyle = (prize: number) => Number(currentInfoStore.currentPrize) === prize
  ? 'border-s-8 border-yellow-200'
  : '';

const tableFields = ["抽獎金額", "數量"];
</script>

<template>
    <common-table
      :fields="tableFields"
      :data-list="Object.values(currentInfoStore.prizeInfoList)"
    >
      <template #default="{ data }">
        <td class="text-2xl" :class="[currentPrizeIndicatorStyle(data.prize)]">${{ data.prize }}</td>
        <td class="text-2xl">{{ data.amount }}</td>
      </template>
    </common-table>
</template>

<style scoped></style>