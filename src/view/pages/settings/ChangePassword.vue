<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Change Password
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Change your password</span
        >
      </div>
      <div class="card-toolbar">
        <v-btn color="primary" @click="update()" ref="kt_pass_update">
          Save Changes
        </v-btn>
        <!-- <button type="reset" class="btn btn-secondary" @click="cancel()">
        Cancel
      </button> -->
      </div>
    </div>
    <div class="card-body">
      <v-form>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Current Password:" label-for="password">
              <b-form-input
                id="password"
                type="password"
                required
                placeholder="Enter current password"
                ref="curPass"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="New Password:" label-for="newPass">
              <b-form-input
                id="newPass"
                type="password"
                required
                placeholder="Enter new password"
                ref="newPass"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="3" sm="12" offset-sm="0">
            <b-form-group label="Verify Password:" label-for="conPass">
              <b-form-input
                id="conPass"
                type="password"
                required
                placeholder="Confirm password"
                ref="conPass"
              ></b-form-input>
            </b-form-group>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "Authentication",
  data() {
    return {
      passLen: 12,
      size: {
        type: String,
        default: "12"
      },
      password: {
        type: String,
        default: ""
      },
      dialog: false,
      characters: ["a-z", "A-Z", "0-9", "#"]
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    auto: [String, Boolean]
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Authentication" }
    ]);
  },

  methods: {
    update() {
      var curPass = this.$refs.curPass.value;
      var newPass = this.$refs.newPass.value;
      var conPass = this.$refs.conPass.value;

      // set spinner to submit button
      const submitButton = this.$refs["kt_pass_update"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // send update request
      this.$store.dispatch(UPDATE_PERSONAL_INFO, {
        curPass,
        newPass,
        conPass
      });

      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    }
  }
};
</script>
