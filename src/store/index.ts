import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { useUtils } from "../composables/useUtils";

export const useCurrentInfo = defineStore("currentInfo", () => {

  const { getRandomNum } = useUtils();

  const currentNum = ref(0);

  const nextMember = () => {
    currentNum.value += 1;
    if (!members.value[currentNum.value]) {
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
  
  const currentMember = computed(() => members.value[currentNum.value]);

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
    members.value.splice(currentNum.value, 1)
  }

  //

  const currentPrizeNum = ref(0);

  const currentPrize = computed(() => prizeList[currentPrizeNum.value]);

  const prizeList = [
    "200", "200", "200", "200", "200", "200", "600", "600", "600", "800", "800", "800", "1000", "1200", "2000"
  ];
  
  const prizeInfoList = prizeList.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = {
        prize: Number(cur),
        amount: 0
      }
    }
  
    acc[cur].amount += 1;
    return acc;
  }, {} as { [key: string]: { prize: number, amount: number } });

  const nextPrize = () => {
    initCurrentNum();
    currentPrizeNum.value++
  }

  return {
    currentNum,
    nextPrize,
    nextMember,
    currentMember,
    members,
    randomSortMember,
    removeGainCurrentPrizeMember,
    currentPrize,
    prizeInfoList
  }
});