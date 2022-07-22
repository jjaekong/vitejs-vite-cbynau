<script>
import { store } from '../store';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      store,
      logo: null,
      name: null,
      id: null,
      description: null,
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
    newMilonga() {
      // 밀롱가 ID가 존재 ?
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
          <h5 class="modal-title">새 밀롱가</h5>
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
                autocomplete="no"
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
                autocomplete="no"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="description">밀롱가 소개:</label>
              <textarea
                class="form-control"
                id="description"
                v-model="description"
                autocomplete="no"
              ></textarea>
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
