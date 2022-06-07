import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Nikki Petersen',
  }),
  getters: {
    firstName() {
      return this.user.split(" ")[0]
    }
  }
})
