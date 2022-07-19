<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
      logo: null,
      name: null,
      id: null,
      description: null,
    };
  },
  computed: {
    user: () => store.user,
  },
};
</script>

<template>
  <div class="modal fade" id="new-milonga" tabindex="-1" v-if="user">
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
        <div class="modal-body">
          <form>
            <div class="mb-3 text-center">
              <img class="rounded-circle avatar" :src="logo" />
            </div>
            <div class="mb-3">
              <label for="logo" class="form-label">로고:</label>
              <input class="form-control form-control" type="file" id="logo" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="name">밀롱가 이름:</label>
              <input
                type="text"
                class="form-control form-control"
                id="name"
                v-model="name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="id">밀롱가 아이디:</label>
              <input
                type="text"
                class="form-control form-control"
                id="id"
                v-model="id"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="description">밀롱가 소개:</label>
              <input
                type="text"
                class="form-control form-control"
                id="description"
                v-model="description"
              />
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
          <button type="button" class="btn btn-primary">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>
