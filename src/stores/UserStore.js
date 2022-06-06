import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  // could also use a function
  //  state() {
  //     return {
  //       user: 'Nikki Petersen',
  //     }
  //   },
  state: () => ({
    user: 'Nikki Petersen',
  }),
  getters: {
    // use function getters instead of anonymous function, when you want to use this to access
    //   other things like other getters
    firstName() {
      return this.user.split(" ")[0]
    }
  }
})
