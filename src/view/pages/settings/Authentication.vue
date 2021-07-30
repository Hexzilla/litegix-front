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
            <v-btn color="primary" elevation="2" type="button" ref="setup">
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
            type="password"
            label="New Password" 
            ref="newPass" 
            color="primary"
            >
            <template v-slot:append>
              <v-dialog v-model="dialog" max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    style="margin-top: -6px; margin-right: -10px"
                    v-on="on"
                    v-bind="attrs"
                    @click="showModal"
                  >
                    Generate
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Generate Password</span>
                  </v-card-title>
                  <v-card-text>
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
                              v-model="characters"
                              value="A-Z"
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
                              v-model="characters"
                              value="a-z"
                              align="center"
                              button
                              button-variant="outline-secondary"
                              @change="generate"
                            >
                              <h3>a-z</h3>
                              <b-card-text>Lowercase</b-card-text>
                            </b-form-checkbox>
                          </b-col>
                          <b-col>
                            <b-form-checkbox
                              v-model="characters"
                              value="0-9"
                              align="center"
                              button
                              button-variant="outline-secondary"
                              @change="generate"
                            >
                              <h3>0-9</h3>
                              <b-card-text>Number</b-card-text>
                            </b-form-checkbox>
                          </b-col>
                          <b-col>
                            <b-form-checkbox
                              v-model="characters"
                              value="#"
                              align="center"
                              button
                              button-variant="outline-secondary"
                              @change="generate"
                            >
                              <h3>!%@#</h3>
                              <b-card-text>Symbol</b-card-text>
                            </b-form-checkbox>
                          </b-col>
                        </b-row>
                      </b-card-group>

                      <b-card-group class="mt-5">
                        <v-text-field
                          outlined
                          dense
                          type="text"
                          append-icon="mdi-refresh"
                          auto="true"
                          characters="characters"
                          :value="password"
                          @click:append="generate()"
                        ></v-text-field>
                      </b-card-group>
                    </v-content>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      block
                      large
                      color="primary"
                      type="button"
                      @click="createPass()"
                    >
                      Use This Password
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
          </v-text-field>
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
  </div>
</template>

<script>
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "Authentication",
  components: {
    VueSlider,
  },
  data() {
    return {
      passLen: 12,
      size: {
        type: String,
        default: "12",
      },
      password: {
        type: String,
        default: "",
      },
      dialog: false,
      characters : ["a-z", "A-Z", "0-9", "#"],
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    auto: [String, Boolean],
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Authentication" },
    ]);
  },

  methods: {
    generate() {
      this.size = this.passLen;
      let charactersArray = this.characters;
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
      this.generate();
    },

    createPass() {
      this.dialog = false;
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
          conPass,
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
  },
};
</script>
