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
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Vue.js Sample with Azure AD Authentication</h2>
    </div>
    <div v-if="account">
      <div class="level">
        <div class="level-item title">
          You are logged in as {{ account.name }}
        </div>
      </div>
      <div>
          <ul>
            <li style="display:block"><b>User Id:</b> {{ account.username }}</li>
            <li style="display:block"><b>Object Id:</b> {{ account.localAccountId }}</li>
            <li style="display:block"><b>Tenant Id:</b> {{ account.tenantId }}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      account: undefined,
      containers: [],
    };
  },
  async created() {
    this.$emitter.on(
      'login',
      async function (account) {
        this.account = account;
        console.log(this.account);
      }.bind(this),
    ),
      this.$emitter.on('logout', () => {
        console.log('logging out');
        this.account = undefined;
      });
  },
  methods: {
    ...mapMutations(['setAccessToken']),

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
