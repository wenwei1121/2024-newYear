<script setup lang="ts">
import CommonTable from '../components/CommonTable.vue';
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";

const { prizeResult } = storeToRefs(useCurrentInfo());

const tableFields = ["名稱", "獎金"];
</script>

<template>
    <common-table
      :fields="tableFields"
      :data-list="prizeResult"
    >
      <template #default="{ data }">
        <td class="text-2xl">{{ data.name }}</td>
        <td class="text-2xl">{{ data.prize }}</td>
      </template>
    </common-table>
</template>

<style>
</style>