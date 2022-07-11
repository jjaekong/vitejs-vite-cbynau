import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8jSD2bgTOVYGrCxbLYYCZpHRZI10zh_Y',
  authDomain: 'mi-tango-247.firebaseapp.com',
  projectId: 'mi-tango-247',
  storageBucket: 'mi-tango-247.appspot.com',
  messagingSenderId: '376880262117',
  appId: '1:376880262117:web:b3e0a9420c7d53eccd1d0c',
  measurementId: 'G-5LEG2SG11N',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

import App from './App.vue';
import Home from './views/Home.vue';
import Me from './views/Me.vue';
import Login from './views/Login.vue';
import Settings from './views/Settings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/me', component: Me },
    { path: '/login', component: Login },
    { path: '/settings', component: Settings },
  ],
});

createApp(App).use(router).mount('#app');
