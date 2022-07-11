<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export default {
  data() {
    return {};
  },
  methods: {
    loginWithGoogle: function () {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$router.push('/');
        })
        .catch((error) => {});
    },
  },
};
</script>
<template>
  <div id="login">
    <h1>LOGIN</h1>
    <button class="btn" @click="loginWithGoogle">구글로 로그인</button>
  </div>
</template>
