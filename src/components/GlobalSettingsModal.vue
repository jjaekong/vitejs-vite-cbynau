<template>
  <div
    class="modal fade"
    id="global-settings"
    tabindex="-1"
    ref="global-settings"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">설정</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="" class="form-label">국가:</label>
              <input class="form-control form-control" type="text" id="" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">언어:</label>
              <input class="form-control form-control" type="text" id="" />
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
