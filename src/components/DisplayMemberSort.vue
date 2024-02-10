<script setup lang="ts">
import CommonTable from "./CommonTable.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrentInfoStore } from "../store/useCurrentInfoStore";

const currentInfoStore = useCurrentInfoStore();
const { currentNum, members } = storeToRefs(currentInfoStore);

const tableFields = ["排序", "抽獎者"];

const currentMemberIndicatorStyle = (sortNum: number) => currentNum.value === sortNum ? 'border-s-8 border-yellow-200': '';

onMounted(() => {
  currentInfoStore.randomSortMember();
});
</script>

<template>
  <common-table :fields="tableFields" :dataList="members">
    <template #default="{ data, sortNum }">
      <th class="text-2xl" :class="[currentMemberIndicatorStyle(sortNum)]">{{ sortNum + 1 }}</th>
      <td class="text-2xl">{{ data.name }}</td>
    </template>
  </common-table>
</template>

<style></style>
