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
    if (store.user === null) {
      $router.push('/');
    }
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<template>
  <div id="me" role="document" v-if="store.user">
    <div class="profile">
      <img class="avatar" :src="store.user.photoURL" />
      <div>
        <h4 class="name">{{ store.user.displayName }}</h4>
        <div class="email">{{ store.user.email }}</div>
        <div class="action"></div>
      </div>
    </div>
    <div class="list-group">
      <router-link
        to="/"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        A list item
        <span class="badge bg-primary rounded-pill ms-auto">14</span>
        <i class="bi bi-chevron-right ms-2"></i>
      </router-link>
      <router-link
        to="/"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        A second list item
        <span class="badge bg-primary rounded-pill ms-auto">2</span>
        <i class="bi bi-chevron-right ms-2"></i>
      </router-link>
      <router-link
        to="/"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        A third list item
        <span class="badge bg-primary rounded-pill ms-auto">1</span>
        <i class="bi bi-chevron-right ms-2"></i>
      </router-link>
    </div>
    <a class="logout" href="#" @click.prevent="logout">로그아웃</a>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  .avatar {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline: 1px solid var(--bs-dark);
    padding: 0.1rem;
  }
  .name {
    margin-bottom: 0;
    font-size: 1rem;
  }
  .email {
    font-size: 0.9rem;
  }
}
.logout {
  font-size: 0.8rem;
  color: var(--bs-danger);
}
</style>
