<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCurrentInfoStore } from "../store/useCurrentInfoStore";

const { currentMember, currentPrize } = storeToRefs(useCurrentInfoStore());
</script>

<template>
    <div class="p-5">
      <div class="flex">
        <div class="flex-auto border-e-2 text-center text-5xl">
          <p>目前抽獎金額：<span class="text-yellow-200">${{ currentPrize }}</span></p>
        </div>
        <div class="flex-auto border-s-2 text-center text-5xl">
          <p>目前抽獎者：<span class="text-yellow-200">{{ currentMember.name }}</span></p>
        </div>
      </div>
    </div>
</template>

<style>
</style>