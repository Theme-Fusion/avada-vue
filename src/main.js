import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app   = createApp( App );

app.use( pinia );

const awbVue = app.mount( '#awb-vue-app' );
window.awbVue = awbVue;
