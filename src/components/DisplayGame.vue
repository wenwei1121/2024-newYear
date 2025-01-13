<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import {
  CheckIcon,
  XMarkIcon,
  NoSymbolIcon,
  ArrowUturnUpIcon,
  PlusIcon,
  UserIcon
} from "@heroicons/vue/24/solid";
import { useCurrentInfo } from "../store/index";
import { useUtils } from "../composables/useUtils";
import { useAlerts } from "../composables/useAlerts";

const currentInfoStore = useCurrentInfo();
const {
  isReverse,
  currentMember,
  membersLength,
  currentPrize,
} = storeToRefs(currentInfoStore);
const {
  nextPrize,
  nextMember,
  removeGainCurrentPrizeMember,
} = currentInfoStore;

const { getRandomNum } = useUtils();
const { checkAlert } = useAlerts();


type CardItem = {
  text: "Won" | "Nothing" | "Reverse" | "Stop" | "Again" | "Help"
  show: boolean
}

const chooseCardItems = ref([] as CardItem[]);

const initChooseCardItems = () => {
  chooseCardItems.value = [];
  for (let i = 1; i <= membersLength.value * 2; i++) {
    chooseCardItems.value.push({ text: "Nothing", show: false });
  }
}

const randomWonCard = () => {
  chooseCardItems.value[getRandomNum(membersLength.value * 2)].text = "Won";
};

const randomPushCardKind = (cardText: CardItem["text"]) => {
  if (cardText === "Won" || cardText === "Nothing") return;

  const cardItem: CardItem = {
    text: cardText,
    show: false,
  };

  // 加 1 是因為也可以塞最後一個
  chooseCardItems.value.splice(getRandomNum(chooseCardItems.value.length + 1), 0, cardItem);
}

const refreshChooseCardItems = () => {
  initChooseCardItems();
  randomWonCard();
  randomPushCardKind("Reverse");
  randomPushCardKind("Stop");
  randomPushCardKind("Again");
  randomPushCardKind("Help");
}

onMounted(() => {
  refreshChooseCardItems();
})

const showCardItem = async (cardItem: CardItem) => {
  if (cardItem.show) return;

  const res = await checkAlert("確定要選擇這個嗎?");
  if (!res) return;

  cardItem.show = true;

  if (cardItem.text === "Won") {
    await checkAlert(
      `恭喜 ${currentMember.value.name} 中 $${currentPrize.value} !`,
      { showCancelButton: false }
    );
  
    removeGainCurrentPrizeMember();
    nextPrize();
    refreshChooseCardItems();
    return;
  }

  if (cardItem.text === "Reverse") {
    isReverse.value = !isReverse.value;
    await checkAlert("順序倒轉");
  }

  if (cardItem.text === "Stop") {
    nextMember();
    await checkAlert("下一位玩家暫停翻牌一次");
  }

  if (cardItem.text === "Again") {
    await checkAlert("再翻牌一次")
    return;
  }

  if (cardItem.text === "Help") {
    await checkAlert("由關主來幫你翻牌!");
  }

  nextMember();
}

const cardIconSurface = {
  "Won": CheckIcon,
  "Nothing": XMarkIcon,
  "Reverse": ArrowUturnUpIcon,
  "Stop": NoSymbolIcon,
  "Again": PlusIcon,
  "Help": UserIcon
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
            :class="[item.show ? (item.text === 'Won' ? 'text-green-500' : 'text-violet-500') : 'text-white']"
          >
            <span v-if="item.show">
              <component :is="cardIconSurface[item.text]" class="w-14 h-14"></component>
            </span>
            <span v-else>
              {{ _index + 1 }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>