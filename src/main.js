import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseContainer from '@/components/BaseContainer.vue'
import BaseGoTo from '@/components/BaseGoTo.vue'
import router from '@/router/index.js'


const cellframeApp = createApp(App)
cellframeApp.use(router)
cellframeApp.component('BaseButton', BaseButton)
cellframeApp.component('BaseContainer', BaseContainer)
cellframeApp.component('BaseGoTo', BaseGoTo)
cellframeApp.mount('#app')
