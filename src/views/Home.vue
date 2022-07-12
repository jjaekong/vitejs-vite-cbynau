<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div id="home" role="document">
    <header>
      <h1 class="logo">LG</h1>
      <router-link class="settings" to="/settings"
        ><i class="bi bi-gear"></i
      ></router-link>
      <div class="dropdown ms-auto" v-if="store.user">
        <a href="#" class="avatar" data-bs-toggle="dropdown">
          <img :src="store.user.photoURL" :alt="store.user.displayName" />
        </a>

        <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">로그아웃</a></li>
        </ul>
      </div>
      <router-link class="avatar" to="/login" v-else>LOGIN</router-link>
    </header>
  </div>
</template>

<style scoped lang="scss">
#home {
  padding: 1rem;
  header {
    display: flex;
    align-items: center;
    .logo {
      margin: 0;
      font-weight: 600;
      letter-spacing: -0.1rem;
    }
    .country {
      margin-left: 0.5rem;
    }
    .settings {
      margin-left: 1rem;
      color: var(--bs-gray-600);
      font-size: 1.5rem;
    }
    .avatar {
      margin-left: auto;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
