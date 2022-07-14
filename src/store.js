import { reactive } from 'vue';

export const store = reactive({
  user: null,
  setUser: function (user) {
    this.user =
      user !== null
        ? Object.assign(this.user === null ? {} : this.user, user)
        : null;
  },
});
