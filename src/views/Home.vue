<script>
import { store } from '../store';
import { getAuth, signOut } from 'firebase/auth';
import EditProfileModal from '../components/EditProfileModal.vue';
import GlobalSettingsModal from '../components/GlobalSettingsModal.vue';
import MilongaEventCard from '../components/MilongaEventCard.vue';

export default {
  components: {
    EditProfileModal,
    GlobalSettingsModal,
    MilongaEventCard,
  },
  data() {
    return {
      store,
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
    <header
      class="d-flex align-items-center p-2"
      style="background: var(--bs-gray-300)"
    >
      <h1 class="logo m-0" style="font-size: 1.2rem">LG</h1>
      <a
        class="settings ms-2 text-dark"
        href="#global-settings"
        style="font-size: 1.2rem"
        data-bs-toggle="modal"
        ><i class="bi bi-gear"></i
      ></a>
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
            style="width: 2rem; height: 2rem"
          />
          <i class="bi bi-person" v-else />
        </a>
        <div class="dropdown-menu shadow">
          <div class="px-3 py-1">
            <div class="username">{{ store.user.displayName }}</div>
            <div class="email">{{ store.user.email }}</div>
          </div>
          <hr class="dropdown-divider" />
          <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
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
          <h6 class="dropdown-header">오거나이저</h6>
          <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
            >내 밀롱가</a
          >
          <a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal"
            >내 밀롱가 이벤트</a
          >
          <!-- <p class="px-3 text-muted small">
            프로필 설정에서 오거나이저 역할을 선택하면 관련 메뉴가 노출됩니다.
          </p> -->
          <hr class="dropdown-divider" />
          <a class="dropdown-item text-danger" href="#" @click="logout"
            >로그아웃</a
          >
        </div>
      </div>
      <router-link class="btn btn-light btn-sm login ms-auto" to="/login" v-else
        >LOGIN</router-link
      >
    </header>
    <section class="p-3">
      <header>
        <h1>오늘</h1>
        <date>22년 7월 15일</date>
      </header>
      <MilongaEventCard
        v-for="milongaEvent in milongaEvents"
        :milonga="milongaEvent"
      />
    </section>
  </div>
  <EditProfileModal />
  <GlobalSettingsModal />
</template>

<style scoped lang="scss"></style>
