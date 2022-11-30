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
    <header>
      <nav
        class="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarBrand />
        <HeaderBarLinks />
      </nav>
    </header>
  </template>
  
  <script>
  import HeaderBarBrand from '@/components/header-bar-brand';
  import HeaderBarLinks from '@/components/header-bar-links';
  
  export default {
    name: 'HeaderBar',
    components: { HeaderBarBrand, HeaderBarLinks },
  };
  </script>