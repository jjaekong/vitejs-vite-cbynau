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

let firebaseConfig;

if (import.meta.env.PROD) {
  firebaseConfig = {
    apiKey: 'AIzaSyARy5QgR2xpVIW7pVnQPcDTtQKD-_KQLIY',
    authDomain: 'mi-tango-7763.firebaseapp.com',
    projectId: 'mi-tango-7763',
    storageBucket: 'mi-tango-7763.appspot.com',
    messagingSenderId: '890820579684',
    appId: '1:890820579684:web:afc74adf7afd12c5dd2a71',
    measurementId: 'G-56541TK94J',
  };
} else {
  firebaseConfig = {
    apiKey: 'AIzaSyDuVsb_ytNdFl1o8V_tfdQ_wDlWo3TiXoM',
    authDomain: 'mi-tango-338.firebaseapp.com',
    projectId: 'mi-tango-338',
    storageBucket: 'mi-tango-338.appspot.com',
    messagingSenderId: '702279597172',
    appId: '1:702279597172:web:5884714f40def870296521',
    measurementId: 'G-ERS4XD23Y1',
  };
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

import App from './App.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import MilongaEvent from './views/MilongaEvent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/milonga/:milongaId/event/:milongaEventId',
      component: MilongaEvent,
    },
    { path: '/login', component: Login },
  ],
});

const app = createApp(App).use(router).mount('#app');
