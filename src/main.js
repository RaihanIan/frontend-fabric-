import { createApp } from 'vue';
import App from './components/App.vue';
import router from './components/router'; // Sesuaikan jalur file router Anda
import './assets/scss/main.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');
