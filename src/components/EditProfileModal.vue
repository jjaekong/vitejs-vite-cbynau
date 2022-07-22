<script>
import { store } from '../store';
import { getAuth, updateProfile } from 'firebase/auth';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      store,
      photo: null,
      name: null,
      file: null,
    };
  },
  computed: {
    user: () => store.user,
  },
  watch: {
    user: function () {
      this.fetchUserData();
    },
  },
  created() {
    this.fetchUserData();
  },
  mounted() {
    var modal = new Modal(this.$refs['edit-profile-modal']);
    modal.show();
    this.$refs['edit-profile-modal'].addEventListener(
      'hidden.bs.modal',
      (event) => {
        this.$emit('hideModal');
      }
    );
  },
  methods: {
    fetchUserData() {
      this.name = !this.user ? null : this.user.displayName;
      this.photo = !this.user ? null : this.user.photoURL;
    },
    uploadPhoto() {
      console.log('upload photo');
    },
    saveProfile() {
      const auth = getAuth();
      const data = {};
      updateProfile(auth.currentUser, {
        displayName: this.name,
        photoURL: this.photo,
      })
        .then(() => {
          this.store.setUser({ displayName: this.name });
          alert('프로필이 저장되었습니다.');
        })
        .catch((error) => {});
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="edit-profile-modal"
    tabindex="-1"
    data-bs-backdrop="static"
    ref="edit-profile-modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" v-if="user">
        <div class="modal-header">
          <h5 class="modal-title">프로필 수정</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <form @submit.prevent="saveProfile">
          <div class="modal-body">
            <div class="mb-3 text-center">
              <img class="rounded-circle avatar" :src="user.photoURL" />
            </div>
            <div class="mb-3">
              <label for="photo" class="form-label">사진:</label>
              <input
                class="form-control form-control"
                type="file"
                id="photo"
                accept="image/"
                @input="uploadPhoto"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="name">이름 또는 닉네임:</label>
              <input
                type="text"
                class="form-control form-control"
                id="name"
                v-model="name"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              취소
            </button>
            <button type="submit" class="btn btn-primary">프로필 저장</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
