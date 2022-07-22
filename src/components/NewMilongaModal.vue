<script>
import { store } from '../store';
import { Modal } from 'bootstrap';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from 'firebase/firestore';

export default {
  data() {
    return {
      store,
      logo: null,
      name: null,
      id: null,
      nameValid: null,
      nameFeedback: null,
    };
  },
  computed: {
    user: () => store.user,
  },
  mounted() {
    var modal = new Modal(this.$refs['new-milonga-modal']);
    modal.show();
    this.$refs['new-milonga-modal'].addEventListener(
      'hidden.bs.modal',
      (event) => {
        this.$emit('hideModal');
      }
    );
  },
  methods: {
    uploadLogo() {},
    async newMilonga() {
      if (!(this.name && this.id)) return;
      const db = getFirestore();
      const milongaRef = doc(db, 'milongas', this.id);
      const milongaSnap = await getDoc(milongaRef);
      if (milongaSnap.exists()) {
        alert('밀롱가 아이디가 이미 존재합니다.');
      } else {
        setDoc(milongaRef, {
          id: this.id,
          name: this.name,
          logo: this.logo,
          createdAt: Timestamp.now(),
          createdBy: doc(db, 'users', this.user.uid),
        })
          .then(() => {
            alert(
              '밀롱가가 만들어졌습니다. 이제 밀롱가 이벤트를 등록해 보세요.'
            );
          })
          .catch((error) => {});
      }
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="new-milonga-modal"
    tabindex="-1"
    v-if="user"
    ref="new-milonga-modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">새로운 밀롱가</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="newMilonga">
          <div class="modal-body">
            <div class="mb-3 text-center">
              <img class="rounded-circle avatar" :src="logo" />
            </div>
            <div class="mb-3">
              <label for="logo" class="form-label">로고:</label>
              <input
                class="form-control"
                type="file"
                id="logo"
                accept="image/"
                @input="uploadLogo"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="name">밀롱가 이름:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="name"
                required
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="id">밀롱가 아이디:</label>
              <input
                type="text"
                class="form-control"
                id="id"
                v-model="id"
                required
                autocomplete="off"
                pattern="[0-9a-z-_]{6,}"
              />
              <div class="form-text">
                영문 소문자, 숫자, 대시(-), 언더바(_)를 이용해 6자 이상으로
                작성해 주세요.
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              닫기
            </button>
            <button type="submit" class="btn btn-primary">밀롱가 만들기</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
