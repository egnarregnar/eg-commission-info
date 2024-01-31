import { defineStore } from "pinia";
import { CommissionType } from "../interface";
import COMMISSION_TYPES from "../statics/data/commission-types.json";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    chosenChoice: "",
  }),
  actions: {
    getChoices() {
      return COMMISSION_TYPES as CommissionType[];
    },
    choose(choice: string) {
      this.chosenChoice = choice;
    },
    resetChoice() {
      this.chosenChoice = "";
    },
  },
});
