<script lang="ts" setup>
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";
import {useUserInfoStoreHook} from "@/store/modules/user-info";

onLaunch(() => {
  console.log("App Launch");
  useUserInfoStoreHook().setUserInfoData({name: '刘德华'})
  console.log('useUserInfoStoreHook:', useUserInfoStoreHook().userInfoData)
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
