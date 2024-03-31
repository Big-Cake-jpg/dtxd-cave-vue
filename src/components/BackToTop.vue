<script lang="ts" setup>
import { isClient, useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'
import '@mdui/icons/arrow-upward.js'
import 'mdui/components/fab.js';

const { y } = useWindowScroll()
const fabExtended = ref(false)

function backToTop() {
  if (!isClient)
    return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(() => y.value, () => {
  if (y.value < 1250)
    fabExtended.value = false
  else
    fabExtended.value = true
})
</script>

<template>
  <div>
    <mdui-fab :extended="fabExtended" class="z-1919 fixed bottom-5 right-5 font-sans" @click="backToTop">
      返回顶部
      <mdui-icon-arrow-upward slot="icon" />
    </mdui-fab>
  </div>
</template>
