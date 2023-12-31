<template>
  <mdui-drawer modal close-on-overlay-click class="drawer">
    <mdui-list>
      <mdui-list-subheader>主站</mdui-list-subheader>
      <mdui-list-item active
        >首页<mdui-icon-home slot="icon"></mdui-icon-home
      ></mdui-list-item>
      <mdui-list-item
        >使用守则<mdui-icon-balance slot="icon"></mdui-icon-balance
      ></mdui-list-item>
      <mdui-list-item
        >校花 / 校草投票<mdui-icon-how-to-vote
          slot="icon"
        ></mdui-icon-how-to-vote
      ></mdui-list-item>
      <mdui-list-subheader>友情链接</mdui-list-subheader>
      <mdui-list-item href="https://lihaoyu.cn" target="_blank"
        >晓雨杂记<mdui-icon-outbound--outlined
          slot="icon"
        ></mdui-icon-outbound--outlined
      ></mdui-list-item>
    </mdui-list>
  </mdui-drawer>
</template>

<script>
import "mdui/mdui.css";
import "mdui";
import "@mdui/icons/home.js";
import "@mdui/icons/balance.js";
import "@mdui/icons/how-to-vote.js";
import "@mdui/icons/outbound--outlined.js";

</script>

<style scoped>

</style>
