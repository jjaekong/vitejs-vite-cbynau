<script>
import { store } from '../store';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import dayjs from 'dayjs';

export default {
  data() {
    return {
      store,
      photoURL: null,
      displayName: null,
      file: null,
      isOrganizer: false,
      canUpdateName: null,
      canUpdateRoleOrganizer: null,
    };
  },
  computed: {
    user: () => store.user,
  },
  watch: {
    user: function () {
      console.log('watch user data: ', this.user);
      this.fetchUserData();
    },
    'user.role': function () {
      this.fetchUserRoleData();
    },
  },
  created() {
    this.fetchUserData();
    this.fetchUserRoleData();
  },
  methods: {
    fetchUserData() {
      if (this.user) {
        console.log('fetch user data: ', this.user);
        this.displayName = this.user.displayName;
        this.canUpdateName = () => {
          return this.user.nameUpdatedAt === null ? true : false;
        };
      }
    },
    fetchUserRoleData() {
      if (this.user) {
        if (this.user.role) {
          this.isOrganizer = this.user.role.isOrganizer;
          this.canUpdateRoleOrganizer =
            this.user.role.organizer.updatedAt === null ? true : false;
        } else {
          this.isOrganizer = false;
        }
      }
    },
    editProfile() {
      const auth = getAuth();
      const db = getFirestore();
      const userRef = doc(
        db,
        import.meta.env.PROD ? 'users' : 'dev_users',
        this.user.uid
      );

      // 이름 업데이트
      if (this.canUpdateName) {
        if (this.displayName !== this.user.displayName) {
          updateProfile(auth.currentUser, {
            displayName: this.displayName,
          })
            .then(() => {
              const nameUpdatedAt = Timestamp.now();
              setDoc(userRef, {
                nameUpdatedAt: nameUpdatedAt,
              }).then(() => {
                store.setUser({ nameUpdatedAt: nameUpdatedAt });
              });
            })
            .catch(() => {});
        }
      }

      // 오거나이저 업데이트
      setDoc(userRef, {
        role: {
          isOrganizer: this.isOrganizer,
          organizerChangeDate: new Date(),
        },
      });
    },
    uploadPhoto() {
      console.log('upload photo');
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
    v-if="user"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
              <img class="rounded-circle avatar" :src="user.photoURL" />
            </div>
            <div class="mb-3">
              <label for="file" class="form-label">사진:</label>
              <input
                class="form-control form-control"
                type="file"
                id="file"
                accept="image/"
                @input="uploadPhoto"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="displayName"
                >이름 또는 닉네임:</label
              >
              <input
                type="text"
                class="form-control form-control"
                id="displayName"
                v-model="displayName"
                :disabled="canUpdateName === false"
              />
              <div
                class="form-text text-danger"
                v-show="canUpdateName === false"
              >
                이름(닉네임)을 수정할 수 없습니다.
              </div>
              <div class="form-text">
                이름(닉네임)은 오직 한 번 만 수정할 수 있습니다.
              </div>
            </div>
            <div class="mb-2">
              <h6 class="form-label">역할</h6>
              <div class="form-text">
                역할은 30일 마다 한 번 수정할 수 있습니다.
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="role-organizer"
                  v-model="isOrganizer"
                  :disabled="canUpdateRoleOrganizer === false"
                />
                <label class="form-check-label" for="role-organizer"
                  >오거나이저</label
                >
              </div>
              <div
                class="form-text text-danger"
                v-show="canUpdateRoleOrganizer === false"
              >
                오거나이저 역할을 변경할 수 없습니다.
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
