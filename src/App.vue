<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { store } from './store';

export default {
  data() {
    return { store };
  },

  beforeCreate() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('fb user ==> ', user);
        store.setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        });
      } else {
        store.setUser(null);
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
$border-radius: 0.5rem;
$border-radius-sm: 0.25rem;
$border-radius-lg: 0.75rem;
$border-radius-xl: 1rem;
$border-radius-2xl: 2rem;
// $font-size-root: 14px;
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons.css';

body {
  @extend .p-4;
  background-color: var(--bs-gray-200);
}
</style>
