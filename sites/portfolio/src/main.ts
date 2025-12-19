import './main.css';
import { createApp } from 'vue';
import router from 'src/router';
import App from './App.vue';
import { initSiteMode } from './stores/siteMode';

initSiteMode();

const app = createApp(App).use(router);

app.mount('#app');
