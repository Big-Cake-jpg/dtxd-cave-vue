<script lang="ts">
import '@mdui/icons/arrow-back.js';
import 'mdui/components/button.js';
import { useTitle } from '@vueuse/core';

useTitle('未找到页面 - 大唐现代回声洞 v3 - Beta 版');

export default {
    // Component logic
};
</script>

<template>
    <div class="mdui-prose">
        <h1>404 未找到页面</h1>
        <p>呃……这个页面不存在呢，请检查你是否输入了正确的链接。</p>
        <p>如果你确定这不应该出现，你应该<RouterLink to="/policies">联系我</RouterLink>。</p>
    </div>
    <div class="mt-8">
        <RouterLink to="/"><mdui-button><mdui-icon-arrow-back slot="icon"></mdui-icon-arrow-back>返回首页</mdui-button>
        </RouterLink>
    </div>
</template>

<style>
.content {
    margin: 0 auto;
    max-width: 800px;
    padding: 1rem;
}
</style>