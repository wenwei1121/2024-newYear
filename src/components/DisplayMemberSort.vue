<script setup lang="ts">
import CommonTable from "./CommonTable.vue";
import { ref, onMounted } from "vue";

const tableFields = ["sortNum", "Name"];

type Member = {
    id: number
    name: string
}

const members = ref<Member[]>([
    { id: 1, name: "宏森" },
    { id: 2, name: "秀鳳" },
    { id: 3, name: "國正" },
    { id: 4, name: "玉玲" },
    { id: 5, name: "敏男" },
    { id: 6, name: "秀蘭" },
    { id: 7, name: "耀輝" },
    { id: 8, name: "清吟" },
    { id: 9, name: "馨儀" },
    { id: 10, name: "馨儀男友" },
    { id: 11, name: "榳洧" },
    { id: 12, name: "榳洧男友" },
    { id: 13, name: "寧" },
    { id: 14, name: "寧男友" },
    { id: 15, name: "傑宇" },
]);

const currentMember = ref<Member>(members.value[0]);

const randomSortMember = () => {
    const newMember: Member[] = [];
    
    while (members.value.length) {
        const randomNum = Math.floor(Math.random() * members.value.length);
        newMember.push(members.value[randomNum]);
        members.value.splice(randomNum, 1)
    }
    
    members.value = newMember;
};

onMounted(() => {
    randomSortMember();
    currentMember.value = members.value[0];
});
</script>

<template>
    <common-table
        :fields="tableFields"
        :dataList="members"
    >
        <template #default="{ data, sortNum }">
            <th>{{ sortNum + 1 }}</th>
            <td>{{ data.name }}</td>
        </template>
    </common-table>
</template>

<style>
</style>