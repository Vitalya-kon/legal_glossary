

import { createApp } from 'vue'
// import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'

import './assets/main.css'
import 'aos/dist/aos.css'
import 'tailwindcss/tailwind.css'

const app = createApp(App);

app.use(autoAnimatePlugin);
app.mount('#app')
