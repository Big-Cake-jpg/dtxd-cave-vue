<script lang="ts">
import "mdui/mdui.css";
import "mdui";
import { snackbar } from "mdui";
import "@mdui/icons/home.js";
import "@mdui/icons/home--outlined.js";
import "@mdui/icons/how-to-vote.js";
import "@mdui/icons/how-to-vote--outlined.js";
import "@mdui/icons/balance.js";
import "@mdui/icons/balance--outlined.js";
import { useRouter } from "vue-router";

export default {
    name: "NavigationBar",
    methods: {
        Vote() {
            snackbar({
                message: "投票功能暂未开放",
                autoCloseDelay: 5000,
                closeable: true,
            });
        },
    },
    setup() {
        const router = useRouter();
        return {
            router,
        };
    },
};
</script>

<template>
    <mdui-navigation-bar value="home" label-visibility="selected">
        <mdui-navigation-bar-item
            value="policies"
            :value="router.currentRoute.value.path"
            :to="{ path: '/policies' }"
            :href="router.resolve({ path: '/policies' }).href"
        >
            使用守则
            <mdui-icon-balance--outlined slot="icon"></mdui-icon-balance--outlined>
            <mdui-icon-balance slot="active-icon"></mdui-icon-balance>
        </mdui-navigation-bar-item>
        <mdui-navigation-bar-item
            value="home"
            :value="router.currentRoute.value.path"
            :to="{ path: '/' }"
            :href="router.resolve({ path: '/' }).href"
            exact
        >
            主页
            <mdui-icon-home--outlined slot="icon"></mdui-icon-home--outlined>
            <mdui-icon-home slot="active-icon"></mdui-icon-home>
        </mdui-navigation-bar-item>
        <mdui-navigation-bar-item
            value="vote"
            :value="router.currentRoute.value.path"
            :to="{ path: '/vote' }"
            :href="router.resolve({ path: '/vote' }).href"
            @click="Vote"
        >
            投票
            <mdui-icon-how-to-vote--outlined
                slot="icon"
            ></mdui-icon-how-to-vote--outlined>
            <mdui-icon-how-to-vote slot="active-icon"></mdui-icon-how-to-vote>
        </mdui-navigation-bar-item>
    </mdui-navigation-bar>
</template>

<style>
@media screen and (min-width: 600px) {
    mdui-navigation-bar {
        /* display: none; */
    }
}
</style>
