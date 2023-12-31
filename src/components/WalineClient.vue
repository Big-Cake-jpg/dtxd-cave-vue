<template>
  <Waline
    :serverURL="serverURL"
    :path="path"
    :imageUploader="imageUploader"
    :search="search"
    :emoji="emojis"
    :pageview="pageview"
    :comment="comment"
    :locale="locale"
  />
</template>
<script setup>
import { Waline } from "@waline/client/component";
import { computed } from "vue";
import { useRoute } from "vue-router";

import "@waline/client/dist/waline.css";

const serverURL = "https://dtxd-comment.lihaoyu.cn";
const imageUploader = false;
const path = computed(() => useRoute().path);
const search = false;
const pageview = true;
const comment = true;
const emojis = [
  "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/bilibili/",
  "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
  "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
  "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
  "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
];
const locale = {
  optional: "可选项目",
  comment: "留言",
  placeholder:
    "在这里填写你想要发送的内容。请勿提交或上传任何违反「使用守则」的内容",
};
</script>

<style>
:root {
  --waline-theme-color: rgb(var(--mdui-color-primary));
  --waline-active-color: rgb(var(--mdui-color-primary-light));
}
</style>
