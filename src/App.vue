<script lang="ts">
import Header from './components/Header.vue';
import Main from './components/Main.vue';
// import NavigationDrawer from './components/NavigationDrawer.vue';
import Footer from './components/Footer.vue';

import "mdui/mdui.css";
import { setColorScheme } from 'mdui/functions/setColorScheme.js';

setColorScheme("#811d1f");
</script>

<template>
  <Header />
  <!-- <NavigationDrawer /> -->
  <Main />
  <Footer />
</template>

<style scoped>

</style>
