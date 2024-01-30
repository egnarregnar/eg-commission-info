import { defineStore } from "pinia";

// store user action data
export const useUserStore = defineStore("user", {
  state: () => ({
    choice: "",
  }),
  actions: {
    choose(choice: string) {
      this.choice = choice;
    },
    resetChoice() {
      this.choice = "";
    },
  },
});
