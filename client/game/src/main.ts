import './styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createORM } from 'pinia-orm';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import router from '@/router';

import App from './App.vue';

const store = createPinia().use(createORM()).use(piniaPluginPersistedState);

const app = createApp(App).use(store).use(router);

app.mount('#app');
