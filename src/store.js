import { reactive } from 'vue';

export const store = reactive({
  user: 0,
  setUser: function (user) {
    this.user = user;
  },
});
