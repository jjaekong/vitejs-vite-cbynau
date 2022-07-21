<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { store } from '../store';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // [TODO] users에 doc이 있는가? 페이지 이동 : doc 생성 후 페이지 이동
          if (result.user) {
            const db = getFirestore();
            const userRef = doc(
              db,
              import.meta.env.PROD ? 'users' : 'dev_users',
              result.user.uid
            );
            const userSnap = await getDoc(userRef);
            console.log('userSnap.metadata => ', userSnap.metadata);
            if (userSnap.exists()) {
              this.$router.push('/');
            } else {
              const userRoleData = {
                isOrganizer: false,
                isDJ: false,
                isDancer: false,
                isInstructor: false,
              };
              setDoc(userRef, { ...userRoleData }, { merge: true })
                .then(() => {
                  store.setUser({ ...userRoleData });
                  this.$router.push('/');
                })
                .catch((error) => {});
            }
          }
        })
        .catch((error) => {});
    },
    loginWithFacebook() {},
  },
};
</script>
<template>
  <div id="login" role="document">
    <section class="p-3">
      <h1 class="fw-bolder text-center mb-4">로그인</h1>
      <ul class="list-unstyled mb-0">
        <li class="mb-2">
          <button class="btn btn-outline-dark w-100" @click="loginWithGoogle">
            구글로 로그인
          </button>
        </li>
        <li class="mb-2">
          <button
            class="btn btn-outline-primary w-100"
            @click="loginWithFacebook"
          >
            페이스북으로 로그인
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>
