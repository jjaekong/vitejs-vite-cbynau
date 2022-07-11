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
      <h1 class="logo">미땅고</h1>
      <router-link class="settings" to="/settings"
        ><i class="bi bi-gear"></i
      ></router-link>
      <router-link class="avatar" to="/me" v-if="store.user">
        <img :src="store.user.photoURL" :alt="store.user.displayName" />
      </router-link>
      <router-link class="avatar" to="/login" v-else>LOGIN</router-link>
    </header>
  </div>
</template>

<style scoped lang="scss">
#home {
  padding: 1rem;
}
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
</style>
