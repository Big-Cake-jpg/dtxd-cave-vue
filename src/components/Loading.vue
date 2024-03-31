<script setup lang="ts">
import 'mdui/components/circular-progress.js';
</script>

<template>
    <div class="loading-indicator fixed justify-center items-center flex top-0 left-0 w-full h-full z-114514 font-sans">
        <mdui-circular-progress></mdui-circular-progress>
    </div>
</template>

<style scoped>
.loading-indicator {
    background-color: rgb(var(--mdui-color-background));
}
</style>