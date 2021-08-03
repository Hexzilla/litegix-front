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
import TwoFactorAuth from "./TwoFactorAuth.vue";
import ChangePassword from "./ChangePassword.vue";
import DeleteAccount from "./DeleteAccount.vue";

export default {
  name: "Account",
  components: {
    TwoFactorAuth,
    ChangePassword,
    DeleteAccount
  }
};
</script>
