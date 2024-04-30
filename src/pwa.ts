import { registerSW } from "virtual:pwa-register";
import { snackbar } from "mdui/functions/snackbar.js";

const updateSW = registerSW({
  onNeedRefresh() {
    snackbar({
      message: "更新可用，刷新即可安装",
      action: "刷新",
      placement: "bottom",
      autoCloseDelay: 0,
      onActionClick: () => {
        updateSW();
      },
    });
  },
  onOfflineReady() {
    snackbar({
      message: "内容已缓存，现在可以在无网络的情况下查看页面与部分留言",
      placement: "bottom",
    });
  },
  onRegisterError(error) {
    snackbar({
      message: "缓存内容时出现问题，请尝试刷新页面",
    });
  },
});

window.addEventListener("offline", () => {
  snackbar({
    message: "网络连接已断开，部分功能可能无法使用。",
    placement: "bottom",
  });
});
