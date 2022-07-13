<script>
import { store } from '../store';
import { getAuth, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          store.setUser(null);
        })
        .catch((error) => {});
    },
  },
};
</script>

<template>
  <div id="home" role="document">
    <header class="d-flex align-items-center">
      <h1 class="logo m-0">LG</h1>
      <router-link class="settings ms-2" to="/settings"
        ><i class="bi bi-gear"></i
      ></router-link>
      <div class="dropdown ms-auto" v-if="store.user">
        <a href="#" class="avatar d-block" data-bs-toggle="dropdown">
          <img :src="store.user.photoURL" v-if="store.user.photoURL" />
          <i class="bi bi-person" v-else />
        </a>
        <ul class="dropdown-menu shadow">
          <li>{{ store.user.displayName }}</li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">프로필 수정</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#" @click="logout">로그아웃</a>
          </li>
        </ul>
      </div>
      <router-link class="login ms-auto" to="/login" v-else>LOGIN</router-link>
    </header>
  </div>
</template>

<style scoped lang="scss">
#home {
  header {
    .avatar {
      margin-left: auto;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
