<script>
import "mdui/mdui.css";
import "mdui";
import "@mdui/icons/menu.js";
import "@mdui/icons/contrast.js";

import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

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
  <mdui-top-app-bar scroll-behavior="elevate">
    <mdui-tooltip placement="bottom-right" content="菜单（未完成）">
      <mdui-button-icon>
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
