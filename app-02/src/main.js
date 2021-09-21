import { defineCustomElement } from 'vue'
import App from './App.vue'

const App02 = defineCustomElement(App);
customElements.define('app-two', App02);
