import { defineStore } from "pinia";
import { CommissionType } from "@/interface";
import COMMISSION_TYPES from "@data/commission-types.json";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    chosenChoice: null,
  }),
  actions: {
    getChoices() {
      return COMMISSION_TYPES as CommissionType[];
    },
    choose(choice: CommissionType) {
      this.chosenChoice = choice;
    },
    resetChoice() {
      this.chosenChoice = null;
    },
  },
});
