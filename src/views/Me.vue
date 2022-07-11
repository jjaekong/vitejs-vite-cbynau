<script>
import { store } from '../store';
import { getAuth, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    if (!this.store.user) {
      this.$router.push('/');
    }
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<template>
  <div id="me">
    <a href="#" @click="logout">로그아웃</a>
  </div>
</template>

<style scoped lang="scss"></style>
