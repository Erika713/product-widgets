// Import the main CSS file for styling the application
import './assets/main.css'

// Import necessary functions from Vue and Pinia
import { createApp } from 'vue' // Function to create a Vue application
import { createPinia } from 'pinia' //Function to create a Pinia store

// Import the root component of the application
import App from './App.vue'

// Create a new Vue application instance
const app = createApp(App)

// Use Pinia as the state management library for the application
app.use(createPinia())

// Mount the Vue application to the DOM element with the id 'app'
app.mount('#app')
