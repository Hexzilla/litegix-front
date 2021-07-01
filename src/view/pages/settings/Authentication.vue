<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder text-dark">
            Two-factor Authentication
          </h1>
          <p class="text-muted  font-size-sm mt-1">
            Two-factor authentication adds an extra layer of security to your
            account by asking for a verification code when you sign in.
          </p>
        </div>
      </div>
      <div class="card-body">
        <router-link
          to="/settings/authentication/connectApp"
          v-slot="{ href, navigate }"
        >
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
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h1 class="font-weight-bolder text-dark">Password</h1>
        </div>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="form-group row mb-2">
            <label class="col-xl-12 col-lg-12 col-form-label text-left"
              >Current Password</label
            >
            <b-form-input
              ref="curPass"
              class="form-control form-control-lg"
              type="password"
              placeholder="Your current password"
            >
            </b-form-input>
          </div>
          <div class="form-group row mb-2">
            <label class="col-xl-12 col-lg-12 col-form-label text-left"
              >Password</label
            >
            <b-input-group class="mt-3">
              <b-form-input
                ref="newPass"
                class="form-control form-control-lg"
                type="password"
                placeholder="New password"
              >
              </b-form-input>
              <b-input-group-append>
                <b-button variant="success" @click="showModal"
                  >Generate Password</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="form-group row mb-2">
            <label class="col-xl-12 col-lg-12 col-form-label text-left"
              >Verify Password</label
            >
            <b-form-input
              ref="conPass"
              class="form-control form-control-lg"
              type="password"
              placeholder="New password confirmation"
            >
            </b-form-input>
          </div>
          <div class="form-group row mb-2">
            <button
              type="button"
              class="btn btn-dark w-100"
              @click="update()"
              ref="kt_pass_update"
            >
              Update My Password
            </button>
          </div>
        </form>
      </div>
    </div>
    <!--end::Card-->
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
            class="align-center"
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
