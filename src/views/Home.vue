<script>
import { store } from '../store';
import { getAuth, signOut } from 'firebase/auth';
import EditProfileModal from '../components/EditProfileModal.vue';

export default {
  components: {
    EditProfileModal,
  },
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
        <a
          href="#"
          class="avatar d-block btn btn-dark p-0 rounded-circle"
          data-bs-toggle="dropdown"
        >
          <img
            :src="store.user.photoURL"
            v-if="store.user.photoURL"
            class="rounded-circle"
            style="width: 2.5rem; height: 2.5rem"
          />
          <i class="bi bi-person" v-else />
        </a>
        <div class="dropdown-menu shadow">
          <div class="px-3 py-1">
            <div class="username">악어</div>
            <div class="email">jjaekong@gmail.com</div>
          </div>
          <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
            >프로필 수정</a
          >
          <hr class="dropdown-divider" />
          <a class="dropdown-item" href="#">TEST</a>
          <hr class="dropdown-divider" />
          <!-- <h6 class="dropdown-header">오거나이저</h6>
          <a class="dropdown-item" href="#">TEST</a>
          <hr class="dropdown-divider" /> -->
          <a class="dropdown-item text-danger" href="#" @click="logout"
            >로그아웃</a
          >
        </div>
      </div>
      <router-link class="login ms-auto" to="/login" v-else>LOGIN</router-link>
    </header>
  </div>
  <EditProfileModal />
</template>

<style scoped lang="scss"></style>
