<template>
  <div>
    <div>
      <TwoFactorAuth></TwoFactorAuth>
    </div>
    <div class="mt-8">
      <ChangePassword></ChangePassword>
    </div>
    <div class="mt-8">
      <DeleteAccount></DeleteAccount>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import TwoFactorAuth from "./TwoFactorAuth.vue";
import ChangePassword from "./ChangePassword.vue";
import DeleteAccount from "./DeleteAccount.vue";

export default {
  name: "KTAccount",
  components: {
    TwoFactorAuth,
    ChangePassword,
    DeleteAccount
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Account" }
    ]);
  }
};
</script>
