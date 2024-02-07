<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";

const { currentMember, currentPrize } = storeToRefs(useCurrentInfo());
</script>

<template>
    <div class="p-5">
      <div class="flex">
        <div class="flex-auto border-e-2 text-center text-5xl">
          <p>current prize：<span class="text-yellow-200">${{ currentPrize }}</span></p>
        </div>
        <div class="flex-auto border-s-2 text-center text-5xl">
          <p>current name：<span class="text-yellow-200">{{ currentMember.name }}</span></p>
        </div>
      </div>
    </div>
</template>

<style>
</style>