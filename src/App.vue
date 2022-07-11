<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  data() {
    return {};
  },

  beforeCreate() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('fb user ==> ', user);
      } else {
        console.log('fb user not logged in.');
      }
    });
  },
};
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
