<script>
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import Loading from './components/Loading.vue'
import { onMounted, ref } from 'vue';

setColorScheme("#811d1f");

export default {
  components: {
    Loading
  },
  setup() {
    const loading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });

    return {
      loading
    };
  }
}
</script>

<template>
  <Loading v-if="loading" />
  <Header />
  <BackToTop />
  <router-view />
  <Footer />
</template>

<style scoped></style>
