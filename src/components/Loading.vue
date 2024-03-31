<script setup lang="ts">
</script>

<template>
    <div class="loading-indicator">
        <mdui-circular-progress></mdui-circular-progress>
    </div>
</template>

<style scoped>
.loading-indicator {
    position: fixed;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1145141919810114514;
    background-color: rgb(var(--mdui-color-background));
}
</style>