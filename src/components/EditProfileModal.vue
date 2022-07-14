<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
      username: null,
      file: null,
      roles: {
        organizer: false,
      },
    };
  },
  created() {
    this.username = store.user.displayName;
    this.roles.organizer = !store.user.roles
      ? false
      : store.user.roles.organizer
      ? store.user.roles.organizer
      : false;
  },
  methods: {
    editProfile() {
      console.log('edit profile');
    },
  },
};
</script>

<template>
  <div class="modal" id="edit-profile" tabindex="-1" data-bs-backdrop="static">
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
          <div>{{ roles }}</div>
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
            </div>
            <div class="mb-3">
              <h6 class="form-label">역할:</h6>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="role-organizer"
                  v-model="roles.organizer"
                />
                <label class="form-check-label" for="role-organizer"
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
          <button type="button" class="btn btn-primary" @click="editProfile">
            수정하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
