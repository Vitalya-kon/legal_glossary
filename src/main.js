import './assets/main.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'

import 'aos/dist/aos.css'

const app = createApp(App);

app.use(autoAnimatePlugin);
app.mount('#app')
