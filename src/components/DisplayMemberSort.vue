<script setup lang="ts">
import CommonTable from "./CommonTable.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";

const currentInfoStore = useCurrentInfo();
const { currentNum, members } = storeToRefs(currentInfoStore);

const tableFields = ["", "參加者"];

const currentMemberIndicatorStyle = (sortNum: number) => currentNum.value === sortNum
  ? 'border-y-8 border-yellow-200'
  : '';

onMounted(() => {
  currentInfoStore.randomSortMember();
});
</script>

<template>
  <common-table :fields="tableFields" :dataList="members">
    <template #default="{ data, sortNum }">
      <th class="text-2xl" :class="[currentMemberIndicatorStyle(sortNum)]">{{ sortNum + 1 }}</th>
      <td class="text-2xl" :class="[currentMemberIndicatorStyle(sortNum)]">{{ data.name }}</td>
    </template>
  </common-table>
</template>

<style></style>
