import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

createApp(App)
    .use(router)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyBP60P7ybKdFyuKV9PwIBnW9rqNOC6HOD8',
            v: 'weekly'
        },
    })
    .use(VueLazyload)
    .use(VueAxios, axios)
    .mount('#app')
