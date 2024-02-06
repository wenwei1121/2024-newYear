import { defineStore } from "pinia";
import { ref } from "vue"

export const useCurrentInfo = defineStore("currentInfo", () => {
  type Member = {
    id: number
    name: string
  }
  
  const currentMember = ref({} as Member);

  type Prize = {
    prize: number
  }

  const currentPrize = ref({} as Prize);

  return {
    currentMember,
    currentPrize
  }
});