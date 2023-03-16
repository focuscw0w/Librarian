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
import * as Sentry from "@sentry/vue";
import {BrowserTracing} from "@sentry/tracing";

/* add icons to the library */
library.add(faWifi, faWheelchair, faPrint, faCoffee,faHeart,faGear,faRightFromBracket)

const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://81bcb51ee5fe434cb6dbe0f8b0334e0d@o4504797849911296.ingest.sentry.io/4504847333326848",
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

app.use(router)
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

console.log(process.env)