<script>
import { store } from '../store';
import { getAuth, updateProfile } from 'firebase/auth';

export default {
  data() {
    return {
      store,
      username: null,
      file: null,
      role: {
        organizer: false,
      },
    };
  },
  watch: {
    'store.user': function () {
      if (store.user) {
        this.username = store.user.displayName;
        this.role.organizer = !store.user.role
          ? false
          : !store.user.role.organizer
          ? false
          : store.user.role.organizer;
      }
    },
  },
  created() {},
  methods: {
    editProfile() {
      console.log('edit profile');
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: this.username,
      }).then(() => {
        console.log('udpate username');
        store.setUser({ displayName: this.username });
      });
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="edit-profile"
    tabindex="-1"
    data-bs-backdrop="static"
    ref="edit-profile"
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
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3 text-center">
              <img class="rounded-circle avatar" :src="store.user.photoURL" />
            </div>
            <div class="mb-3">
              <label for="photo" class="form-label">사진:</label>
              <input class="form-control form-control" type="file" id="photo" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="username">이름 또는 닉네임:</label>
              <input
                type="text"
                class="form-control form-control"
                id="username"
                v-model="username"
              />
              <div class="form-text">
                이름(닉네임)은 오직 한 번 만 수정할 수 있습니다.
              </div>
            </div>
            <div class="mb-3">
              <h6 class="form-label">역할</h6>
              <div class="form-text mb-2">
                역할은 30일 마다 한 번 수정할 수 있습니다.
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="role-organizer"
                  v-model="role.organizer"
                />
                <label class="form-check-label" for="role-organizer"
                  >오거나이저</label
                >
              </div>
              <div class="form-text">
                오거나이저 역할을 활성화하면, 밀롱가를 생성하고 밀롱가 이벤트를
                추가할 수 있습니다.
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
          <button type="button" class="btn btn-primary" @click="editProfile">
            수정하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
