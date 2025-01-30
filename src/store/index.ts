import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { useUtils } from "../composables/useUtils";

export type PrizeResult = {
  name: string
  prize: number
}

export const useCurrentInfo = defineStore("currentInfo", () => {

  const { getRandomNum } = useUtils();

  const isReverse = ref(false);

  const currentNum = ref(0);

  const nextMember = () => {
    currentNum.value = isReverse.value ? currentNum.value - 1 : currentNum.value + 1;
    if (currentNum.value < 0) {
      currentNum.value = membersLength.value - 1
    }
    if (currentNum.value >= membersLength.value) {
      initCurrentNum();
    }
  }

  const initCurrentNum = () => {
    currentNum.value = 0;
  }

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
    { id: 14, name: "傑宇" },
    { id: 15, name: "邱可利" }
  ]);

  const membersLength = computed(() => members.value.length);

  const currentMember = computed(() => members.value[currentNum.value]);

  const randomSortMember = () => {
    const newMember: Member[] = [];
  
    while (members.value.length) {
      const randomNum = getRandomNum(members.value.length);
      newMember.push(members.value[randomNum]);
      members.value.splice(randomNum, 1);
    }
  
    members.value = newMember;
  };

  const removeGainCurrentPrizeMember = () => {
    const test = currentNum.value;
    if (currentNum.value === membersLength.value - 1) {
      nextMember();
    }
    members.value.splice(test, 1)
  }

  const currentPrizeNum = ref(0);

  const currentPrize = computed(() => prizeList[currentPrizeNum.value]);

  const prizeList = [
    200,
    200,
    600,
    1000,
    200,
    600,
    800,
    1200,
    200,
    200,
    800,
    1600,
    800,
    600,
    2000,
  ];
  
  const nextPrize = () => {
    currentPrizeNum.value++
  }

  const prizeResult = ref<PrizeResult[]>([])

  return {
    isReverse,
    currentNum,
    prizeList,
    currentPrizeNum,
    nextPrize,
    nextMember,
    members,
    membersLength,
    currentMember,
    randomSortMember,
    removeGainCurrentPrizeMember,
    currentPrize,
    prizeResult,
  }
});