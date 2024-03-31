<script>
import WalineClient from "./WalineClient.vue";
import 'mdui/components/button.js';
import "@mdui/icons/announcement--outlined.js";
import "@mdui/icons/link.js";
import "@mdui/icons/comment--outlined.js";
import "@mdui/icons/analytics--outlined.js";
import "@mdui/icons/remove-red-eye--outlined.js";
import "@mdui/icons/info--outlined.js";
import "@mdui/icons/arrow-forward.js";
import "@mdui/icons/account-circle.js";
import "@mdui/icons/wb-sunny--outlined.js";

</script>

<template>
  <div class="content mdui-prose">
    <h1>大唐现代回声洞 <mdui-badge>Beta</mdui-badge></h1>
    <p>欢迎来到大唐现代回声洞，大家可以在这里<b>匿名地</b>畅所欲言。</p>
    <p>如果愿意进行留言，请务必遵守<RouterLink to="/policies">「使用守则」</RouterLink>。</p>
    <mdui-button href="https://dtxd-comment.lihaoyu.cn/ui" target="_blank"
      >注册账号<mdui-icon-account-circle slot="icon"></mdui-icon-account-circle
      ><mdui-icon-arrow-forward slot="end-icon"></mdui-icon-arrow-forward
    ></mdui-button>
    <h2>
      <mdui-icon-announcement--outlined></mdui-icon-announcement--outlined>
      公告
    </h2>
    <p>
      <b
        >回声洞现已使用 Vue.js 与 Vite.js
        重构，可以带来更好的页面切换体验与加载速度。由于尚未完工 Bug
        会很多，请多多向我反馈任何问题。</b
      >
    </p>
    <p>
      欢迎拜访回声洞！留言时，<b>除了留言框外其它内容均可以留空不填</b>。<br />
      输入自己的留言之后，按下“提交”按钮，然后等待一段时间即可看到你的留言。<br />
      如你愿意成为一名管理员帮助管理评论的话，请通过「使用守则」内的联系方式与我联系并提前注册一个账号。<br />
      如果觉得不错的话，请把它分享给你的同学或者老师吧！
    </p>
    <h2>
      <mdui-icon-analytics--outlined></mdui-icon-analytics--outlined>
      统计信息
    </h2>
    <p>
      <mdui-icon-remove-red-eye--outlined></mdui-icon-remove-red-eye--outlined>
      页面浏览量: <b><span class="waline-pageview-count" data-path="/" /></b><br />
      <mdui-icon-comment--outlined></mdui-icon-comment--outlined>
      留言数量：<b><span class="waline-comment-count" data-path="/" /></b>
    </p>
    <h2>
      <mdui-icon-info--outlined></mdui-icon-info--outlined>
      关于
    </h2>
    <p>
      <b
        >Proudly powered by Waline, MDUI, Vercel. Built with ❤️ heart, ✨ stars
        & 🐛 bugs.</b
      >
    </p>
    <p>
      <b>自豪地采用 Vue.js & Vite.js 驱动</b>
    </p>
    <h2>
      <mdui-icon-link></mdui-icon-link>
      友情链接
    </h2>
    <p>
      <b
        ><a href="https://www.lihaoyu.cn">晓雨杂记</a>
        <!-- <a href="https://bjwz.yuzu-soft.cf">北京五中树洞</a> --></b
      >
    </p>
  </div>
  <div class="content">
    <WalineClient />
  </div>
</template>
