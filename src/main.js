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
import Popper from 'popper.js'
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faWifi, faWheelchair, faPrint, faCoffee,faGear,faRightFromBracket,faHeart} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faWifi, faWheelchair, faPrint, faCoffee,faHeart,faGear,faRightFromBracket)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
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