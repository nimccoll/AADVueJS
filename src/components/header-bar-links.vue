<!--
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
-->
<template>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              v-if="!account"
              @click="SignIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-sign-in-alt fa-2x" aria-hidden="false"></i>
            </a>
            <a v-else @click="SignOut" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-sign-out-alt fa-2x" aria-hidden="false"></i>
            </a>
            <div v-if="account">{{ account.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { PublicClientApplication } from '@azure/msal-browser';
  
  export default {
    name: 'HeaderBar',
    data() {
      return {
        account: undefined,
        signin: 'https://microsoft.com'
      };
    },
    async created() {
      this.$msalInstance = new PublicClientApplication(
        this.$store.state.msalConfig,
      );
    },
    async mounted() {
      await this.$msalInstance.handleRedirectPromise();  
      const accounts = this.$msalInstance.getAllAccounts();
      if (accounts.length == 0) {
        return;
      }
      this.account = accounts[0];
      this.$emitter.emit('login', this.account);
    },
    methods: {
      async SignIn() {
        await this.$msalInstance
          .loginPopup({})
          .then(() => {
            const myAccounts = this.$msalInstance.getAllAccounts();
            this.account = myAccounts[0];
            this.$emitter.emit('login', this.account);
          })
          .catch(error => {
            console.error(`error during authentication: ${error}`);
          });
      },
      async SignOut() {
        await this.$msalInstance
          .logout({})
          .then(() => {
            this.$emitter.emit('logout', 'logging out');
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>