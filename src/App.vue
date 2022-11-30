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
  <div id="app">
    <HeaderBar />
    <HelloWorld />
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
import HelloWorld from '@/components/HelloWorld';
import store from '@/store';

export default {
  name: 'App',
  store,
  components: { HeaderBar, HelloWorld },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
