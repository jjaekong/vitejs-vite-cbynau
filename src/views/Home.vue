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
  <div id="home">
    <header>
      <h1 class="logo">LG</h1>
      <router-link class="country" to="/select_country">KR</router-link>
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
  }
  .country {
    margin-left: 0.5rem;
  }
  .avatar {
    margin-left: auto;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
}
</style>
