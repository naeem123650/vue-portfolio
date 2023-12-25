import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from '@/components/shared/InlineSvg/Index.vue';
import './assets/css/index.css'

createApp(App)
.component('InlineSvg', InlineSvg)
.mount('#app')
