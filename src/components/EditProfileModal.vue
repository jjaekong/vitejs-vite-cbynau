<script>
import { store } from '../store';
import { getAuth, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import dayjs from 'dayjs';

export default {
  data() {
    return {
      store,
      photo: null,
      name: null,
      file: null,
      isOrganizer: true,
      uploadPhotoValid: null,
      uploadPhotoFeedback: null,
      saveNameValid: null,
      saveNameFeedback: null,
      saveRoleOrgValid: null,
      saveRoleOrgFeedback: null,
    };
  },
  computed: {
    user: () => store.user,
  },
  watch: {
    user: function () {
      console.log('watch user', this.user);
      this.fetchUserData();
    },
  },
  created() {
    this.fetchUserData();
  },
  mounted() {
    this.$refs['edit-profile'].addEventListener('hidden.bs.modal', () => {
      this.resetValidData();
    });
  },
  methods: {
    fetchUserData() {
      this.name = !this.user ? null : this.user.displayName;
      this.isOrganizer = !this.user ? false : this.user.isOrganizer;
    },
    uploadPhoto() {
      console.log('upload photo');
    },
    saveName() {
      if (this.name) {
        if (this.name !== this.user.displayName) {
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: this.name,
          })
            .then(() => {
              this.saveNameValid = true;
              this.saveNameFeedback = '이름(닉네임)이 변경되었습니다.';
              this.store.setUser({ displayName: this.name });
            })
            .catch((error) => {
              this.saveNameValid = false;
              this.saveNameFeedback =
                '이름(닉네임)을 변경하는데 오류가 발생했습니다.';
            });
        } else {
          this.saveNameValid = false;
          this.saveNameFeedback = '기존 이름(닉네임)과 동일합니다.';
        }
      } else {
        this.saveNameValid = false;
        this.saveNameFeedback = '이름(닉네임)을 입력하세요.';
      }
    },
    saveRole() {
      if (this.isOrganizer !== this.user.isOrganizer) {
        const db = getFirestore();
        const userRef = doc(
          db,
          import.meta.env.PROD ? 'users' : 'dev_users',
          this.user.uid
        );
        setDoc(userRef, { isOrganizer: this.isOrganizer }, { merge: true })
          .then(() => {
            this.saveRoleOrgValid = true;
            this.saveRoleOrgFeedback = `오거나이저 역할을 ${
              this.isOrganizer ? '' : '비'
            }활성화했습니다.`;
            this.store.setUser({ isOrganizer: this.isOrganizer });
          })
          .catch((error) => {
            this.saveRoleOrgValid = false;
            this.saveRoleOrgFeedback = `역할을 저장하는데 오류가 발생했습니다.`;
          });
      }
    },
    resetValidData() {
      console.log('resetValidData');
      this.uploadPhotoValid = null;
      this.uploadPhotoFeedback = null;
      this.saveNameValid = null;
      this.saveNameFeedback = null;
      this.saveRoleOrgValid = null;
      this.saveRoleOrgFeedback = null;
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
        <div class="modal-body">
          <form>
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
            <div class="mb-4">
              <label class="form-label" for="name">이름 또는 닉네임:</label>
              <div
                class="input-group"
                :class="
                  saveNameValid === null
                    ? null
                    : saveNameValid
                    ? 'is-valid'
                    : 'is-invalid'
                "
              >
                <input
                  type="text"
                  class="form-control form-control"
                  id="name"
                  v-model="name"
                  required
                  :class="
                    saveNameValid === null
                      ? null
                      : saveNameValid
                      ? 'is-valid'
                      : 'is-invalid'
                  "
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="saveName"
                  :disabled="this.name === this.user.displayName"
                >
                  저장
                </button>
              </div>
              <div
                :class="
                  saveNameValid === null
                    ? null
                    : saveNameValid
                    ? 'valid-feedback'
                    : 'invalid-feedback'
                "
              >
                {{ saveNameFeedback }}
              </div>
            </div>
          </form>
          <form @submit.prevent="saveRole">
            <fieldset>
              <legend>
                역할 {{ this.isOrganizer }} {{ this.user.isOrganizer }}
              </legend>
              <div class="mb-3">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    :class="
                      saveRoleOrgValid === null
                        ? null
                        : saveRoleOrgValid
                        ? 'is-valid'
                        : 'is-invalid'
                    "
                    type="checkbox"
                    role="switch"
                    id="is-organizer"
                    v-model="isOrganizer"
                  />
                  <label class="form-check-label" for="is-organizer"
                    >오거나이저</label
                  >
                  <div
                    :class="
                      saveRoleOrgValid === null
                        ? null
                        : saveRoleOrgValid
                        ? 'valid-feedback'
                        : 'invalid-feedback'
                    "
                  >
                    {{ saveRoleOrgFeedback }}
                  </div>
                </div>
                <div class="form-text">
                  오거나이저 역할을 활성화하면, 밀롱가를 생성하고 밀롱가
                  이벤트를 추가할 수 있습니다.
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="this.isOrganizer === this.user.isOrganizer"
              >
                역할 저장
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
