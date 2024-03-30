<script lang="ts" setup>
import { isClient, useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'
import '@mdui/icons/arrow-upward.js'

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
  <div class="backtotop">
    <Transition name="fade">
      <mdui-fab
        :extended="fabExtended"
        class="mdui-back-to-top"
        @click="backToTop"
      >
        返回顶部
        <mdui-icon-arrow-upward slot="icon" />
      </mdui-fab>
    </Transition>
  </div>
</template>

<style scoped>
.mdui-back-to-top {
  z-index: 1919810114514;
}

.backtotop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1919810114514;
}
</style>
