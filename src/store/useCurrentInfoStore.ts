import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { useUtils } from "../composables/useUtils";

export const useCurrentInfoStore = defineStore("currentInfo", () => {

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
  
  const currentMember = computed(() => members.value[currentNum.value] ?? { id: 0, name: "" });

  const members = ref<Member[]>([
    { id: 1, name: "ch541215" },
    { id: 2, name: "showfengzhang" },
    { id: 3, name: "bigtako1972" },
    { id: 4, name: "moneylo9453" },
    { id: 5, name: "cat6389061a" },
    { id: 6, name: "show621113" },
    { id: 7, name: "huei_" },
    { id: 8, name: "enidChuang" },
    { id: 9, name: "chiukillcat" },
    { id: 10, name: "chiukillcat BF" },
    { id: 11, name: "sunnyyyyy1004" },
    { id: 12, name: "sunnyyyyy1004 BF" },
    { id: 13, name: "__ningchang__" },
    { id: 14, name: "__ningchang__ BF" },
    { id: 15, name: "y.j.u_0206" },
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

  ////// 

  const currentPrizeNum = ref(0);

  const currentPrize = computed(() => prizeList[currentPrizeNum.value] ?? "0");

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