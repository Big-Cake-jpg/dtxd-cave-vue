<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
  <Header />
  <BackToTop />
  <div class="p-4 max-w-screen-md m-auto font-sans">
    <router-view />
  </div>
  <Footer />
</template>

<style scoped></style>
