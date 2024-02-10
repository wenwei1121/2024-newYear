import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useCurrentInfoStore } from "./useCurrentInfoStore";

export const useGameResultInfoStore = defineStore("gameResult", () => {
    const { currentMember, currentPrize } = storeToRefs(useCurrentInfoStore());

    type ResultInfo = {
        name: string,
        prize: string,
    }
    
    const resultInfo = ref<ResultInfo[]>([]);

    const addNewResult = () => {
        resultInfo.value.push({
            name: currentMember.value.name,
            prize: currentPrize.value
        });
    }

    return {
        resultInfo,
        addNewResult,
    }
});