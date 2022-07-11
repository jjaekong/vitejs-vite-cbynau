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
      <router-link to="/select_country">KR</router-link>
      <router-link to="/me" v-if="store.user">ME</router-link>
      <router-link to="/login" v-else>LOGIN</router-link>
    </header>
  </div>
</template>

<style scoped lang="scss"></style>
