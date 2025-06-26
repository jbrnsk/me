import './main.css';
import { createApp } from 'vue';
import router from 'src/router';
import App from './HSApp.vue';

const app = createApp(App).use(router);

app.mount('#app');
