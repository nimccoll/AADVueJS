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
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: '{your Azure AD client ID}',
          authority:
            'https://login.microsoftonline.com/{your Azure AD tenant ID}',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken: ''
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;