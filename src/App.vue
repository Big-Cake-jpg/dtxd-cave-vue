<script>
import Loading from './components/Loading.vue'
import { onMounted, ref } from 'vue';
</script>

<template>
  <Header />
  <BackToTop />
  <div class="p-4 max-w-screen-md m-auto font-sans">
    <router-view />
  </div>
  <Footer />
</template>

<style scoped></style>
