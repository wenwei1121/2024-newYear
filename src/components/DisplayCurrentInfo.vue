<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";

const { currentMember, currentPrize, isReverse } = storeToRefs(useCurrentInfo());
</script>

<template>
    <div class="p-5">
      <div class="flex">
        <div class="flex-auto border-e-2 text-center text-5xl">
          <p>目前金額：<span class="text-yellow-200">${{ currentPrize }}</span></p>
        </div>
        <div class="flex-auto border-s-2 text-center text-5xl">
          <p>目前參加者：<span class="text-yellow-200">{{ currentMember?.name ?? "" }}</span></p>
        </div>
        <div class="flex-auto border-s-2 text-center text-5xl">
          <p>目前順序狀態：<span class="text-yellow-200">{{ isReverse ? "逆序" : "正序" }}</span></p>
        </div>
      </div>
    </div>
</template>

<style>
</style>