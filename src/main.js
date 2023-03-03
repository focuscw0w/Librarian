import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
import Store from "./store/store";

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {BootstrapVue3} from 'bootstrap-vue-3'
// import {nextTick} from 'vue';

axios.defaults.baseURL = "https://api.librarian.sk/api/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .use(VueGoogleMaps, {
        load: {
            key: "AIzaSyBP60P7ybKdFyuKV9PwIBnW9rqNOC6HOD8",
            v: "weekly",
        },
    })
    .use(VueLazyload)
    .use(VueAxios, axios)
    .use(Store)
    .mount("#app");


// const DEFAULT_TITLE = "";
// router.afterEach((to) => {
//     nextTick(() => {
//         document.title = (to.meta.title != null ? to.meta.title + ' | ' : DEFAULT_TITLE) + 'Librarian';
//     });
// });