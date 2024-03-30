<script lang="ts">
import "mdui/mdui.css";
import "mdui";
import "@mdui/icons/menu.js";
import "@mdui/icons/contrast.js";
import "@mdui/icons/home.js";
import "@mdui/icons/balance.js";
import "@mdui/icons/how-to-vote.js";
import "@mdui/icons/outbound--outlined.js";

import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

import { ref, onMounted, reactive } from 'vue';
const navigationDrawer = ref<HTMLElement | null>(null);
const openButton = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLElement | null>(null);

onMounted(() => {
    openButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = true);
    closeButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = false);
});

export default {
  setup() {
    const isDark = useDark({
      selector: "html",
      attribute: "class",
      valueDark: "mdui-theme-dark",
      valueLight: "mdui-theme-light",
    });
    const toggleDark = useToggle(isDark);

    return {
      toggleDark,
    };
  },
};
</script>

<template>
  <mdui-top-app-bar scroll-behavior="elevate hide">
    <mdui-tooltip placement="bottom-right" content="菜单（未完成）">
      <mdui-button-icon ref="openButton">
        <mdui-icon-menu></mdui-icon-menu>
      </mdui-button-icon>
    </mdui-tooltip>
    <mdui-top-app-bar-title>大唐现代回声洞</mdui-top-app-bar-title>
    <mdui-tooltip placement="bottom-left" content="切换模式">
      <mdui-button-icon @click="toggleDark()">
        <mdui-icon-contrast></mdui-icon-contrast>
      </mdui-button-icon>
    </mdui-tooltip>
  </mdui-top-app-bar>

  <mdui-navigation-drawer modal close-on-overlay-click class="drawer" close-on-esc ref="navigationDrawer">
    <mdui-list>
      <mdui-list-subheader>主站</mdui-list-subheader>
      <mdui-list-item active @click="toggleDrawer">
        首页
        <mdui-icon-home slot="icon"></mdui-icon-home>
      </mdui-list-item>
      <mdui-list-item @click="toggleDrawer">
        使用守则
        <mdui-icon-balance slot="icon"></mdui-icon-balance>
      </mdui-list-item>
      <mdui-list-item @click="toggleDrawer">
        校花 / 校草投票
        <mdui-icon-how-to-vote slot="icon"></mdui-icon-how-to-vote>
      </mdui-list-item>
      <mdui-list-subheader>友情链接</mdui-list-subheader>
      <mdui-list-item href="https://lihaoyu.cn" target="_blank">
        晓雨杂记
        <mdui-icon-outbound--outlined slot="icon"></mdui-icon-outbound--outlined>
      </mdui-list-item>
    </mdui-list>
  </mdui-navigation-drawer>
</template>

<style scoped>
mdui-linear-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 114514;
}
</style>
