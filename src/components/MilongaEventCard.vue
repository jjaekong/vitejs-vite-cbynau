<script>
export default {
  props: {
    milonga: { type: Object, require: true },
  },
};
</script>

<template>
  <router-link
    to="/milonga/gricel/event/2022-07-18T1900"
    class="card text-decoration-none text-dark border-0 bg-transparent"
  >
    <div class="row g-0 flex-nowrap">
      <div class="col-2">
        <div
          class="
            date
            d-flex
            flex-column
            align-items-center
            justify-content-center
            h-100
          "
        >
          <b style="font-size: 1.2rem">14</b>
          <small style="font-size: 0.8rem; color: var(--bs-gray-600)"
            >목요일</small
          >
        </div>
      </div>
      <div class="col-auto">
        <div class="card-body py-1 ps-2">
          <h6 class="card-title">
            <span class="badge text-bg-primary">{{ milonga.city }}</span>
            {{ milonga.name }}
          </h6>
          <div>
            <dl
              class="d-flex mb-0"
              style="font-size: 0.8rem; color: var(--bs-gray-600)"
            >
              <dt class="me-2" style="word-break: keep-all">시간</dt>
              <dd class="mb-0">8 pm ~ 1 am (4 hours)</dd>
            </dl>
            <dl
              class="d-flex mb-0"
              style="font-size: 0.8rem; color: var(--bs-gray-600)"
            >
              <dt class="me-2" style="word-break: keep-all">장소</dt>
              <dd class="mb-0">오초</dd>
            </dl>
            <dl
              class="d-flex mb-0"
              style="font-size: 0.7rem; color: var(--bs-gray-600)"
            >
              <dt class="me-2" style="word-break: keep-all">DJ</dt>
              <dd class="mb-0">에피톤</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="col-2 ms-auto">
        <img class="img-fluid" :src="milonga.poster" loading="lazy" />
      </div>
    </div>
  </router-link>
</template>
