import { createApp } from 'vue';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import App from './App.vue';

import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.mount('#app');
