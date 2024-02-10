<script setup lang="ts">
import CommonTable from '../components/CommonTable.vue';
import { storeToRefs } from "pinia";
import { useGameResultInfoStore } from '../store/useGameResultInfoStore';

const { resultInfo } = storeToRefs(useGameResultInfoStore());

const tableFields = ["抽獎者", "抽獎金額"];
</script>

<template>
    <div class="p-5">
        <div class="mb-5 border-2">
            <common-table :fields="tableFields" :dataList="resultInfo">
                <template #default="{ data }">
                    <td class="text-2xl">{{ data.name }}</td>
                    <td class="text-2xl">${{ data.prize }}</td>
                </template>
            </common-table>
        </div>
    </div>
</template>

<style>
</style>