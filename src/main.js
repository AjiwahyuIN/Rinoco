import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.AOS = new AOS.init({ disable: "desktop" });
// app.mount('#app')

app.use(AOS).mount('#app')
