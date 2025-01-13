<script setup lang="ts">
import CommonTable from './CommonTable.vue';
import { useCurrentInfo } from "../store/index";

const currentInfoStore = useCurrentInfo();

const currentPrizeIndicatorStyle = (sortNum: number) => sortNum === currentInfoStore.currentPrizeNum
  ? 'border-y-8 border-yellow-200'
  : '';

const tableFields = ["", "獎金"];
</script>

<template>
    <common-table
      :fields="tableFields"
      :data-list="currentInfoStore.prizeList"
    >
      <template #default="{ data, sortNum }">
        <td class="text-2xl" :class="[currentPrizeIndicatorStyle(sortNum)]">{{ sortNum + 1 }}</td>
        <td class="text-2xl" :class="[currentPrizeIndicatorStyle(sortNum)]">{{ data }}</td>
      </template>
    </common-table>
</template>

<style scoped></style>