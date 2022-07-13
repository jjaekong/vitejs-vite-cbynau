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
  <div
    class="modal modal-lg"
    id="edit-profile"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
      v-if="store.user"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">프로필 수정</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3 text-center">
              <img class="rounded-circle avatar" :src="store.user.photoURL" />
            </div>
            <div class="mb-3">
              <label for="photo" class="form-label">사진:</label>
              <input class="form-control" type="file" id="photo" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="username">이름 또는 닉네임:</label>
              <input type="text" class="form-control" id="username" />
            </div>
            <div class="mb-3">
              <h6 class="form-label">역할:</h6>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >오거나이저</label
                >
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            취소
          </button>
          <button type="button" class="btn btn-primary">수정하기</button>
        </div>
      </div>
    </div>
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
