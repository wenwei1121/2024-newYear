<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrentInfo } from "../store/index";
import { useUtils } from "../composables/useUtils";
import { useAlerts } from "../composables/useAlerts"

const currentInfoStore = useCurrentInfo();
const { currentMember, members, currentPrize } = storeToRefs(currentInfoStore);
const {
  nextPrize,
  nextMember,
  randomSortMember,
  removeGainCurrentPrizeMember
} = currentInfoStore;

const { getRandomNum } = useUtils();
const { checkAlert } = useAlerts();

type CardItem = {
  text: "中" | "無"
  show: boolean
}
const chooseCardItems = ref([] as CardItem[]);

onMounted(() => {
  refreshChooseCardItems();
})

const showCardItem = async (cardItem: CardItem) => {
  const res = await checkAlert("確定要選擇這個嗎?");
  if (!res) return;

  cardItem.show = true;

  if (cardItem.text === "中") {
    await checkAlert(
      `恭喜 ${currentMember.value.name} 中 $${currentPrize.value} !`,
      { showCancelButton: false }
    );

    removeGainCurrentPrizeMember();
    randomSortMember();
    nextPrize();

    refreshChooseCardItems();
    return;
  }

  nextMember();
}

const refreshChooseCardItems = () => {
  initChooseCardItems();
  randomChange();
}

const initChooseCardItems = () => {
  chooseCardItems.value = [];
  for (let i = 1; i <= members.value.length * 2; i++) {
    chooseCardItems.value.push({ text: "無", show: false });
  }
}

const randomChange = () => {
  chooseCardItems.value[getRandomNum(members.value.length * 2)].text = "中";
};
</script>

<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <div v-for="(item, _index) of chooseCardItems" :key="_index">
      <div
        class="card shadow-xl h-28"
        :class="[item.show ? 'cursor-not-allowed bg-white' : 'cursor-pointer bg-violet-500 hover:bg-violet-700']"
        @click="showCardItem(item)"
      >
        <div class="card-body">
          <p
            class="card-title justify-center h-full text-5xl"
            :class="[item.show ? (item.text === '中' ? 'text-red-500' : '') : 'text-white']"
          >
            {{ item.show ? item.text : _index + 1 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
