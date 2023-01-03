import { createApp } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(CKEditor)

app.mount('#app')
