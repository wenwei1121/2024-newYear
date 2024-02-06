<script setup lang="ts" generic="T extends { id: number }">
import { computed } from "vue"

interface Props {
    fields: string[],
    dataList: T[]
}
const props = defineProps<Props>()

const slotDataList = computed(() => props.dataList);
</script>

<template>
    <div class="overflow-x-auto">
        <table class="table table-zebra">
            <thead>
                <tr>
                    <th v-for="(field, _index) of fields" :key="_index">{{ field }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, _index) of slotDataList" :key="data.id">
                    <slot :data="data" :sortNum="_index" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
</style>