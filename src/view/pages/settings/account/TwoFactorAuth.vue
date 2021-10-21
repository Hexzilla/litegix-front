<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Two-factor Authentication
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Security your account</span
        >
      </div>
      <div class="card-toolbar">
        <!-- <v-btn color="primary" @click="save()" ref="user_save_changes">
          Save Changes
        </v-btn>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
        Cancel
      </button> -->
      </div>
    </div>
    <div class="card-body">
      <p class="font-size-lg mt-1">
        Two-factor authentication adds an extra layer of security to your
        account by asking for a verification code when you sign in.
      </p>

      <router-link to="/settings/connectApp">
        <button type="reset" class="btn btn-warning mr-2">
          Set Up Two-Factor Authentication
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTTwoFactorAuth",
  data() {
    return {
      size: {
        type: String,
        default: "12"
      },
      dialog: false
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    auto: [String, Boolean]
  }
};
</script>
