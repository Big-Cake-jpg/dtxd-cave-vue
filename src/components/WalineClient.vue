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
    :dark="dark"
  />
</template>
<script setup>
import { Waline } from "@waline/client/component";
import { computed } from "vue";
import { useRoute } from "vue-router";

import '@waline/client/style';

const serverURL = "https://dtxd-comment.lihaoyu.cn";
const imageUploader = false;
const path = computed(() => useRoute().path);
const search = false;
const pageview = true;
const comment = true;
const emojis = [
  "https://cdn.jsdmirror.com/npm/@waline/emojis@latest/bilibili/",
  "https://cdn.jsdmirror.com/npm/@waline/emojis@latest/weibo/",
  "https://cdn.jsdmirror.com/npm/@waline/emojis@latest/qq/",
  "https://cdn.jsdmirror.com/npm/@waline/emojis@latest/tieba/",
  "https://cdn.jsdmirror.com/npm/@waline/emojis@latest/bmoji/",
];
const locale = {
  optional: "可选项目",
  comment: "留言",
  placeholder:
    "在这里填写你想要发送的内容。请勿提交或上传任何违反「使用守则」的内容",
};
const dark = 'html[class="mdui-custom-color-scheme-4286651679-0 mdui-theme-dark"]';
</script>

<style>
:root {
  --waline-theme-color: rgb(var(--mdui-color-primary));
  --waline-active-color: rgb(var(--mdui-color-primary-light));
}
</style>
