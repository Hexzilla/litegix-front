<template>
  <div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>Two-factor Authentication</h1>
        </v-card-title>
        <p class="text-muted font-size-sm mt-1">
          Two-factor authentication adds an extra layer of security to your
          account by asking for a verification code when you sign in.
        </p>

        <router-link to="/settings/connectApp" v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
            <v-btn 
              color="primary"
              elevation="2" 
              type="button" 
              ref="setup">
              Set Up Two-Factor Authentication
            </v-btn>
          </a>
        </router-link>
      </div>
    </v-card>
    <!--end::Card-->
    <div class="form-group"></div>
    <!--begin::Card-->
    <v-card>
      <div class="card-body">
        <!--begin::Header-->
        <v-card-title>
          <h1>Password</h1>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-form>
            <v-text-field
              outlined
              dense
              label="Current Password"
              ref="curPass"
              type="password"
            >
            </v-text-field>
            <v-text-field
              outlined
              dense
              label="New Password"
              ref="newPass"
              type="password"
              append-icon="mdi-plus"
              @click:append="showModal"
            >
            </v-text-field>

            <!-- <v-text-field
              outlined
              dense
              label="New Password"
              color="primary"
              v-model="input"
              @keypress.enter="showModal">
          
              <template v-slot:append >
                  <v-btn
                    color="primary"
                    style="margin-top:0px;"
                    @click="showModal">
                    Generate
                  </v-btn>
              </template>
            </v-text-field> -->

            <v-text-field
              outlined
              dense
              label="Verify Password"
              ref="conPass"
              type="password"
            >
            </v-text-field>
            <v-btn
              block
              large
              color="primary"
              type="button"
              @click="update()"
              ref="kt_pass_update"
            >
              Update My Password
            </v-btn>
        </v-form>
      </div>
    </v-card>
    <!--end::Card-->
    <!-- begin create password modal -->

    <b-modal
      ref="create-pass-modal"
      hide-footer
      title="Password Generator"
      size="lg"
    >
      <v-form class="mt-3">
        <v-content>
          <h6 class="pl-0">Password Length ({{ passLen }})</h6>
          <vue-slider
            v-model="passLen"
            :disabled="false"
            @change="setChangePassLength"
          ></vue-slider>
          <b-card-group deck class="w-100 pr-10 pl-10 mt-5">
            <b-row>
              <b-col>
                <b-form-checkbox
                  v-model="uppercase"
                  name="check-button"
                  align="center"
                  button
                  button-variant="outline-secondary"
                  min-height="600px"
                  @change="generate"
                >
                  <h3>A-Z</h3>
                  <b-card-text>Uppercase</b-card-text>
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  v-model="lowercase"
                  name="check-button"
                  align="center"
                  button
                  button-variant="outline-secondary"
                >
                  <h3>a-z</h3>
                  <b-card-text>Lowercase</b-card-text>
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  v-model="number"
                  name="check-button"
                  align="center"
                  button
                  button-variant="outline-secondary"
                >
                  <h3>0-9</h3>
                  <b-card-text>Number</b-card-text>
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  v-model="symbol"
                  name="check-button"
                  align="center"
                  button
                  button-variant="outline-secondary"
                >
                  <h3>!%@#</h3>
                  <b-card-text>Symbol</b-card-text>
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-card-group>

          <b-card-group class="mt-5">
            <h6>Generated Password</h6>
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
                <b-button variant="dark">
                  <i class="fa fa-copy"></i>
                </b-button>
                <b-button variant="success" @click="generate()">
                  <i class="fa fa-sync"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-card-group>
          <b-card-group>
            <b-button
              type="button"
              class="btn btn-success w-100 mt-5"
              @click="createPass()"
              ref="kt_create_pass"
            >
              Use This Password
            </b-button>
          </b-card-group>
        </v-content>
      </v-form>
    </b-modal>
    <!-- end modal -->
  </div>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import Vue from "vue";
// import VueClipboard from "vue-clipboard2";

// Vue.use(VueClipboard);
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "Authentication",
  components: {
    VueSlider
  },
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
      uppercase: true,
      lowercase: true,
      number: true,
      symbol: true
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9,#"
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
    generate() {
      //console.log("selected2 ==== " + this.symbol);
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
