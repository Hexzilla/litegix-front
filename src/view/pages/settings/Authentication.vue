<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            Two-factor Authentication
          </h3>
          <p class="text-muted font-size-sm mt-1">
            Two-factor authentication adds an extra layer of security to your
            account by asking for a verification code when you sign in.
          </p>
        </div>
      </div>
      <div class="card-body">
        <router-link to="/settings/connectApp" v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
            <button type="button" class="btn btn-success" ref="setup">
              Set Up Two-Factor Authentication
            </button>
          </a>
        </router-link>
      </div>
    </div>
    <!--end::Card-->
    <div class="form-group row mt-12"></div>
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            Change Password
          </h3>
          <span class="text-muted font-weight-bold font-size-sm mt-1"
            >Change your account password</span
          >
        </div>
        <div class="card-toolbar">
          <button
            type="submit"
            class="btn btn-success mr-2"
            @click="save()"
            ref="kt_save_changes"
          >
            Save Changes
          </button>
          <!-- <button type="reset" class="btn btn-secondary" @click="cancel()">
            Cancel
          </button> -->
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Form-->
      <form class="form" id="kt_password_change_form">
        <div class="card-body">
          <!--begin::Alert-->
          <div
            class="alert alert-custom alert-light-danger fade show mb-10"
            role="alert"
          >
            <div class="alert-icon">
              <span class="svg-icon svg-icon-3x svg-icon-danger">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24" />
                    <circle
                      fill="#000000"
                      opacity="0.3"
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <rect
                      fill="#000000"
                      x="11"
                      y="10"
                      width="2"
                      height="7"
                      rx="1"
                    />
                    <rect
                      fill="#000000"
                      x="11"
                      y="7"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
            </div>
            <div class="alert-text font-weight-bold">
              Configure user passwords to expire periodically. Users will need
              warning that their passwords are going to expire, <br />or they
              might inadvertently get locked out of the system!
            </div>
            <div class="alert-close">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="ki ki-close"></i>
                </span>
              </button>
            </div>
          </div>
          <!--end::Alert-->
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-alert"
              >Current Password</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="password"
                class="form-control form-control-lg form-control-solid mb-2"
                value=""
                placeholder="Current password"
                name="current_password"
                ref="current_password"
              />
              <a href="#" class="text-sm font-weight-bold">Forgot password ?</a>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-alert"
              >New Password</label
            >
            <b-input-group class="col-lg-9 col-xl-6">
              <input
                type="password"
                class="form-control form-control-lg form-control-solid"
                value=""
                placeholder="New password"
                name="new_password"
                ref="new_password"
              />
              <b-input-group-append>
                <b-button variant="success" @click="showModal"
                  >Generate Password</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-alert"
              >Verify Password</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                type="password"
                class="form-control form-control-lg form-control-solid"
                value=""
                placeholder="Verify password"
                name="verify_password"
                ref="verify_password"
              />
            </div>
          </div>
        </div>
      </form>
      <!--end::Form-->
    </div>

    <!-- begin create password modal -->
    <b-modal
      ref="create-pass-modal"
      hide-footer
      title="Password Generator"
      size="lg"
    >
      <v-row>
        <v-col class="pr-4">
          <v-subheader class="pl-0"> Password Length </v-subheader>
          <v-slider
            v-model="passLen"
            class="align-items-center"
            :max="60"
            :min="6"
            @change="setChangePassLength"
            thumb-label
            step="1"
          >
            <template v-slot:append>
              <v-text-field
                v-model="passLen"
                class="mt-0 pt-0"
                type="number"
                style="width: 40px"
                @click="setChangePassLength"
                @change="setChangePassLength"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-form class="mt-3">
        <v-container>
          <b-card-group deck class="w-100 pr-10 pl-10">
            <b-card align="center" border-variant="primary">
              <h3>A-Z</h3>
              <b-card-text>Uppercase</b-card-text>
              <v-card-actions>
                <v-btn outlined rounded text> select </v-btn>
              </v-card-actions>
            </b-card>
            <b-card
              align="center"
              border-variant="primary"
              style="cursor: pointer"
            >
              <h3>a-z</h3>
              <b-card-text>Lowercase</b-card-text>
            </b-card>
            <b-card
              align="center"
              border-variant="primary"
              style="cursor: pointer"
            >
              <h3>0-9</h3>
              <b-card-text>Number</b-card-text>
            </b-card>
            <b-card
              align="center"
              border-variant="primary"
              style="cursor: pointer"
            >
              <h3>!%@#</h3>
              <b-card-text>Symbol</b-card-text>
            </b-card>
          </b-card-group>

          <v-container>
            <v-card-subtitle> Generated Password </v-card-subtitle>
            <b-input-group class="mt-3">
              <b-form-input
                auto="true"
                characters="characters"
                class="form-control form-control-lg"
                type="text"
                :value="password"
              >
              </b-form-input>
              <b-input-group-append>
                <b-button variant="dark" v-clipboard:copy="password">
                  <i class="fa fa-copy"></i>
                </b-button>
                <b-button variant="success" @click="generate()">
                  <i class="fa fa-sync"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </v-container>
          <v-container>
            <b-button
              type="button"
              class="btn btn-dark w-100 mt-5"
              @click="createPass()"
              ref="kt_create_pass"
            >
              Use This Password
            </b-button>
          </v-container>
        </v-container>
      </v-form>
    </b-modal>
    <!-- end modal -->
  </div>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

export default {
  name: "Authentication",

  data() {
    return {
      passLen: 12
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "12"
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9,#"
    },
    auto: [String, Boolean],
    password: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Authentication" }
    ]);
  },

  methods: {
    generate() {
      this.size = this.passLen;
      let charactersArray = this.characters.split(",");
      let CharacterSet = "";
      let password = "";
      if (charactersArray.indexOf("a-z") >= 0) {
        CharacterSet += "abcdefghijklmnopqrstuvwxyz";
      }
      if (charactersArray.indexOf("A-Z") >= 0) {
        CharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (charactersArray.indexOf("0-9") >= 0) {
        CharacterSet += "0123456789";
      }
      if (charactersArray.indexOf("#") >= 0) {
        CharacterSet += "![]{}()%&*$#^<>~@|";
      }

      for (let i = 0; i < this.size; i++) {
        password += CharacterSet.charAt(
          Math.floor(Math.random() * CharacterSet.length)
        );
      }
      this.password = password;
    },
    showModal() {
      this.$refs["create-pass-modal"].show();
      this.generate();
    },

    createPass() {
      this.$refs["create-pass-modal"].hide();
      this.$refs.newPass.value = this.password;
      this.$refs.conPass.value = this.password;
    },
    setChangePassLength() {
      this.generate();
    },

    update() {
      var curPass = this.$refs.curPass.value;
      var newPass = this.$refs.newPass.value;
      var conPass = this.$refs.conPass.value;

      // set spinner to submit button
      const submitButton = this.$refs["kt_pass_update"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
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
      }, 2000);
    }
  }
};
</script>
