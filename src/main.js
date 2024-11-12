import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia";

import mitt from 'mitt';
const Emitter = mitt();

import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import router from './router'

const vuetify = createVuetify({
  components,
  directives
});

createApp(App)
.use(router)
.use(createPinia())
.provide("Emitter", Emitter)
.use(vuetify)
.mount('#app')
