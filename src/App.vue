<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { store } from './store';

export default {
  data() {
    return { store, isPROD: import.meta.env.PROD };
  },

  beforeCreate() {
    console.log('import.meta.env.PROD ==> ', import.meta.env.PROD);
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('firebase auth user ==>', user);
        store.setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
        });
      } else {
        store.setUser(null);
      }
    });
  },
};
</script>

<template>
  <div
    class="position-fixed bg-danger text-white"
    style="top: 0; left: 0; z-index: 9999"
    v-show="!isPROD"
  >
    !PROD
  </div>
  <router-view />
  <!-- <div id="loading" ref="loading">
    <div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div> -->
</template>

<style lang="scss">
// $border-radius-sm: 0.25rem;
// $border-radius: 0.5rem;
// $border-radius-lg: 0.75rem;
// $border-radius-xl: 1rem;
// $border-radius-2xl: 2rem;
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons.css';

body {
  background-color: var(--bs-gray-100);
}

#loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: rgba(#000, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
