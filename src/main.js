import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

//Provide/Inject baseURL - Change this to whatever you want as baseURL!
app.provide('$baseURL', "http://squall.local/wp-json/wp/v2")

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
