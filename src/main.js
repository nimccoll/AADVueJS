//===============================================================================
// Microsoft FastTrack for Azure
// Vue.js Azure Active Directory Sample
//===============================================================================
// Copyright © Microsoft Corporation.  All rights reserved.
// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY
// OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE.
//===============================================================================
import { createApp } from 'vue'
import App from './App.vue'
import Emitter from 'tiny-emitter';
import store from './store';

//createApp(App).mount('#app')
const app = createApp(App);
app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter();

app.use(store).mount('#app');