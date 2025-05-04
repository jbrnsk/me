import './styles/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createORM } from 'pinia-orm';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';

import router from '@/router';

const store = createPinia().use(createORM()).use(piniaPluginPersistedState);

const app = createApp(App).use(router).use(store);

app.mount('#app');
