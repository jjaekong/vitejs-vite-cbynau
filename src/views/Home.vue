<script>
import { store } from '../store';
import { getAuth, signOut } from 'firebase/auth';

import EditProfileModal from '../components/EditProfileModal.vue';
import GlobalSettingsModal from '../components/GlobalSettingsModal.vue';
import MilongaEventCard from '../components/MilongaEventCard.vue';
import NewMilongaModal from '../components/NewMilongaModal.vue';
import NewMilongaEventModal from '../components/NewMilongaEventModal.vue';

export default {
  components: {
    EditProfileModal,
    GlobalSettingsModal,
    MilongaEventCard,
    NewMilongaModal,
    NewMilongaEventModal,
  },
  data() {
    return {
      store,
      modal: null,
      milongaEvents: [
        {
          city: '홍대',
          name: '루미노소',
          poster: 'https://picsum.photos/200/300',
        },
        {
          city: '부산',
          name: '땅겐미 정모',
          poster: 'https://picsum.photos/300/300',
        },
        {
          city: '홍대',
          name: '그리셀',
          poster: 'https://picsum.photos/200/400',
        },
        {
          city: '홍대',
          name: '목뜨라',
          poster: 'https://picsum.photos/200/350',
        },
        {
          city: '홍대',
          name: '목루쓰',
          poster: 'https://picsum.photos/250/300',
        },
      ],
    };
  },
  computed: {
    user: () => store.user,
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
    showModal(modal) {
      this.modal = modal;
    },
    hideModal() {
      this.modal = null;
    },
  },
};
</script>

<template>
  <div id="home" role="document" style="padding-top: 4rem">
    <header
      id="toolbar"
      class="d-flex align-items-center p-3 position-fixed w-100 top-0"
      style="z-index: 1000; height: 4rem"
    >
      <h1 class="logo m-0" style="font-size: 1rem">MT</h1>
      <a
        class="settings ms-2 text-dark"
        href="#global-settings"
        style="font-size: 1.2rem"
        data-bs-toggle="modal"
        ><i class="bi bi-gear"></i
      ></a>
      <div class="ms-auto d-flex">
        <div class="dropdown me-2" v-if="user">
          <button
            type="button"
            class="
              avatar
              d-block
              btn btn-dark
              p-0
              rounded-circle
              border-0
              bg-transparent
              text-dark
            "
            data-bs-toggle="dropdown"
            style="width: 2rem; height: 2rem; font-size: 2rem; line-height: 1"
          >
            <i class="bi bi-plus" />
          </button>
          <div class="dropdown-menu shadow">
            <a
              class="dropdown-item"
              href="#new-milonga"
              @click.prevent="showModal('new-milonga-modal')"
              >새로운 밀롱가</a
            >
            <a
              class="dropdown-item"
              href="#new-milonga-event"
              data-bs-toggle="modal"
              >새로운 밀롱가 이벤트</a
            >
          </div>
        </div>
        <div class="dropdown" v-if="user">
          <button
            type="button"
            class="avatar d-block btn btn-dark p-0 rounded-circle border-0"
            data-bs-toggle="dropdown"
            style="width: 2rem; height: 2rem"
          >
            <img
              :src="user.photoURL"
              v-if="user.photoURL"
              class="rounded-circle w-100 h-100"
              style="object-fit: cover"
              loading="lazy"
            />
            <i class="bi bi-person" v-else />
          </button>
          <div class="dropdown-menu shadow">
            <div class="px-3 py-1">
              <div class="username">{{ user.displayName }}</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <hr class="dropdown-divider" />
            <!-- <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
              >프로필 설정</a
            > -->
            <a
              class="dropdown-item"
              href="#edit-profile"
              @click.prevent="showModal('edit-profile-modal')"
              >프로필 설정</a
            >
            <hr class="dropdown-divider" />
            <a class="dropdown-item" href="#"
              >좋아요한 밀롱가 이벤트
              <span class="badge text-bg-primary">10</span>
            </a>
            <a class="dropdown-item" href="#"
              >참석한 밀롱가 이벤트
              <span class="badge text-bg-primary">1</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
              >내가 만든 밀롱가</a
            >
            <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
              >내가 만든 밀롱가 이벤트</a
            >
            <hr class="dropdown-divider" />
            <a class="dropdown-item text-danger" href="#" @click="logout"
              >로그아웃</a
            >
          </div>
        </div>
        <router-link
          class="btn btn-light btn-sm login ms-auto"
          to="/login"
          v-else
          >LOGIN</router-link
        >
      </div>
    </header>
    <section class="p-3">
      <header class="d-flex pb-2 align-items-end border-bottom">
        <h1 class="mb-0 fw-bold">오늘</h1>
        <time
          class="ms-auto fw-bold"
          style="font-size: 0.9rem; color: var(--bs-gray-600)"
          >22년 7월 15일</time
        >
      </header>
      <ul class="list-unstyled mb-0">
        <li v-for="milongaEvent in milongaEvents" class="border-bottom py-2">
          <MilongaEventCard :milonga="milongaEvent" />
        </li>
      </ul>
    </section>
    <div class="text-break">user => {{ user }}</div>
  </div>
  <component ref="modal" :is="modal" @hideModal="hideModal"></component>
  <!-- <EditProfileModal />
  <GlobalSettingsModal />
  <NewMilongaModal />
  <NewMilongaEventModal /> -->
</template>

<style scoped lang="scss">
#toolbar {
  backdrop-filter: blur(10px);
}
@supports not (backdrop-filter: blur(10px)) {
  #toolbar {
    background-color: rgba(255, 255, 255, 0.75);
  }
}
</style>
