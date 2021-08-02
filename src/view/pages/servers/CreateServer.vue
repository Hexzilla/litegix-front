<template>
  <div class="card card-custom max-w-sm-800px mx-auto">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="fas fa-link"></i>
        </span>
        <h3 class="card-label">Connect Server</h3>
      </div>
    </div>
    <div class="card-body p-0">
      <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
        <div class="col-xl-12">
          <form class="form" novalidate="novalidate" id="kt_form_server">
            <b-form-group v-bind:label="`Select Provider`">
              <b-row>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="Vultr"
                    name="provider"
                  >
                    <img
                      src="media/svg/logos/vultr.svg"
                      height="30px"
                      class="mb-2"
                    />
                    <br />
                    <strong>Vultr</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="UpCloud"
                    name="provider"
                  >
                    <img
                      src="media/svg/logos/upcloud.svg"
                      height="30px"
                      class="mb-2"
                    />
                    <br />
                    <strong>UpCloud</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="DigitalOcean"
                    name="provider"
                  >
                    <img
                      src="media/svg/logos/digitalocean.svg"
                      height="30px"
                      class="mb-2"
                    />
                    <br />
                    <strong>DigitalOcean</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="Linode"
                    name="provider"
                  >
                    <img
                      src="media/svg/logos/linode.svg"
                      height="30px"
                      class="mb-2"
                    />
                    <br />
                    <strong>Linode</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="Amazon"
                    name="provider"
                  >
                    <img src="media/logos/aws.png" height="30px" class="mb-2" />
                    <br />
                    <strong>Amazon</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="Scaleway"
                    name="provider"
                  >
                    <img
                      src="media/logos/scaleway.svg"
                      height="30px"
                      class="mb-2"
                    />
                    <br />
                    <strong>Scaleway</strong>
                  </b-form-radio>
                </b-col>
                <b-col md="2" sm="3" class="mt-2">
                  <b-form-radio
                    v-model="form.provider"
                    button
                    class="d-block h-100"
                    button-variant="outline-secondary btn-block h-100"
                    size="lg"
                    value="Custom"
                    name="provider"
                    ><i class="fas fa-server mb-2" height="30px"></i>
                    <br />
                    <strong> Custom server</strong>
                  </b-form-radio>
                </b-col>
              </b-row>
            </b-form-group>
            <div class="pb-5">
              <v-autocomplete
                v-model="form.web_server"
                name="web_server"
                :items="webservers"
                outlined
                dense
                label="Configure My Server For"
              ></v-autocomplete>

              <!-- <v-text-field
                v-model="form.name"
                label="Server Name"
                name="name"
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="form.address"
                label="IP address"
                name="address"
                outlined
                dense
              ></v-text-field> -->
              <b-form-group label="Server name">
                <b-form-input v-model="form.name" name="name"></b-form-input>
              </b-form-group>
              <b-form-group label="IP Address">
                <b-form-input
                  v-model="form.address"
                  name="address"
                ></b-form-input>
              </b-form-group>

              <v-autocomplete
                v-model="form.phpVersion"
                :items="phpversions"
                name="phpVersion"
                outlined
                dense
                label="PHP version"
              ></v-autocomplete>
              <v-autocomplete
                v-model="form.database"
                :items="databases"
                name="database"
                outlined
                dense
                label="Database"
              ></v-autocomplete>
            </div>

            <div class="d-flex justify-content-center border-top pt-10">
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_form_server_submit"
                  class="btn btn-primary text-uppercase px-15 py-2 my-3 mr-3"
                >
                  Create this server
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
// import ApiService from "@/core/services/api.service";

import { CREATE_SERVER } from "@/core/services/store/servers.module";

export default {
  name: "CreateServer",
  data() {
    return {
      webservers: [
        { text: "Nginx", value: "nginx" },
        { text: "OpenLiteSpeed web app stack", value: "openlitespeed" },
      ],
      phpversions: [
        { text: "PHP 8.0", value: "8.0" },
        { text: "PHP 7.4", value: "7.4" },
        { text: "PHP 7.3", value: "7.3" },
        { text: "PHP 7.2", value: "7.2" },
        { text: "PHP 7.1", value: "7.1" },
        { text: "PHP 7.0", value: "7.0" },
        { text: "PHP 5.6", value: "5.6" },
        { text: "Do not install PHP", value: "none" },
      ],
      databases: [
        { text: "MySQL 5.7", value: "mysql" },
        { text: "MariaDB 10.3", value: "mariadb" },
        { text: "PostgreSQL 10.9", value: "postgresql" },
        { text: "PostgreSQL 13", value: "postgresql13" },
        { text: "None (do not install a database)", value: "none" },
      ],
      form: {
        name: "",
        address: "",
        provider: "",
        web_server: "nginx",
        phpVersion: "7.4",
        database: "mysql",
      },
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Create" },
    ]);
    const create_form = KTUtil.getById("kt_form_server");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "Name is required",
            },
          },
        },
        address: {
          validators: {
            notEmpty: {
              message: "IP address is required",
            },
            ip: {
              message: "Invalid IP address",
            }
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });
    this.fv.on("core.form.valid", this.createServer);
    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      });
    });
  },
  methods: {
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        toaster: "b-toaster-bottom-right",
        variant: variant,
        solid: true,
      });
    },
    createServer() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_server_submit"];
      console.log(submitButton);
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };

      const payload = {
        name: this.form.name,
        provider: this.form.provider,
        web_server: this.form.web_server,
        database: this.form.database,
        address: this.form.address,
        phpVersion: this.form.phpVersion,
      };

      this.$store
        .dispatch(CREATE_SERVER, payload)
        .then((data) => {
          removeSpinner();
          this.onCreateSuccess(data.id);
        })
        .catch(() => {
          removeSpinner();
        });

    },
    onCreateSuccess(serverId) {
      Swal.fire({
        title: "",
        text: 'Your Server has been successfully created',
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      }).then(() => {
        console.log(serverId)
        this.$router.push({ name: "server-config", params: {serverId:serverId} });
      });
    },
  },
};
</script>
